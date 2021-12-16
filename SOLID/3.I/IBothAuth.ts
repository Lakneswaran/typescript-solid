export interface IBothAuth {

    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}