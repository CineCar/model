import { AuthenticationService } from "./AuthenticationService";
import { Session, User } from "com.cinecar.objects";
import * as bcrypt from "bcrypt";
import { DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";
import { TokenGenerator } from "../structure/TokenGenerator";

export class AuthenticationServiceImplementation implements AuthenticationService {
    private static authenticationService: AuthenticationService;

    public static getSingleton(): AuthenticationService {
        if (AuthenticationServiceImplementation.authenticationService == null) {
            AuthenticationServiceImplementation.authenticationService = new AuthenticationServiceImplementation();
        }

        return AuthenticationServiceImplementation.authenticationService;
    }

    public loginUser(id: number, password: String): Promise<Session> {
        return new Promise((resolve, reject) => {
            DatabaseConnectorImplementation.getSingleton()
                .get(id, DatabaseObjectType.User)
                .then((user) => {
                    bcrypt.compare(password, (<User>user).getPassword(), (err, res) => {
                        if (err || !res) reject();
                        else {
                            const session: Session = new Session();
                            session.setUser(<User>user);
                            session.setToken(TokenGenerator.generate());

                            resolve(
                                <Promise<Session>>(
                                    DatabaseConnectorImplementation.getSingleton().create(
                                        session,
                                        DatabaseObjectType.Session
                                    )
                                )
                            );
                        }
                    });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    public verifySession(id: number, token: String): Promise<void> {
        return new Promise((resolve, reject) => {
            DatabaseConnectorImplementation.getSingleton()
                .get(id, DatabaseObjectType.Session)
                .then((session) => {
                    if ((<Session>session).getToken() == token) resolve();
                    else reject();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}
