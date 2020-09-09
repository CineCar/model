export class TokenGenerator {
    public static generate(length: number = 265) {
        const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMLNOPQRSTUVXYZ0123456789";
        let token = "";

        for (let i = 0; i < length; i++) {
            token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        return token;
    }
}
