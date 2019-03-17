export class UserCredential
{
    public UserId: string;
    public Password: string;
    
    public constructor(UserId:string, Password:string)
    {
        this.UserId = UserId;
        this.Password = Password;    
    }
}
