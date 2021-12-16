import { IPasswoord } from "./IPasswoord";


//admin cannot use google or facebook token
export class Admin implements IPasswoord {
    private _password : string = 'admin';

    constructor(password: string) {
        this._password = password;
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}