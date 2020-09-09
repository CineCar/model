import { Session } from "com.cinecar.objects";

export interface AuthenticationService {
    loginUser(id: number, password: String): Promise<Session>;
    verifySession(id: number, token: String): Promise<boolean>;
}
