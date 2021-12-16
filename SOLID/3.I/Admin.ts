import { IAdminUserAuth } from "./IAdminUserAuth";

//admin cannot use google or facebook token
export class Admin implements IAdminUserAuth {
    private _password : string = 'admin';

    checkGoogleLogin(token: string): boolean {
        return false;
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    getFacebookLogin(token: string): boolean {
        return false;
    }

    setFacebookToken() {
        throw new Error('Function not supported for admins');
    }

    setGoogleToken() {
        throw new Error('Function not supported for admins');
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}