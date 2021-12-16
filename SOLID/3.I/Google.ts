import { IGoogle } from "./IGoogle";

export class Google implements IGoogle{

    private _googleToken : string;

    constructor(googleToken :string){
        this._googleToken = googleToken;
    }

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }


}