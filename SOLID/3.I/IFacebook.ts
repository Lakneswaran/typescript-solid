export interface IFacebook {
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}