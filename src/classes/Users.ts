export class Users {
    id: number;
    name: string;
    email: string;
    avatar: string;
    constructor(id: number, name: string, email:string, avatar:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = avatar
    }
    static createUser() {
        
    }
}