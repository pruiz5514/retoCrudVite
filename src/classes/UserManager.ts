import { IUsers } from "../interfaces/IUsers.js";

export class UserManager {
  constructor() {}

  async crateUser(
    id: number,
    name: string,
    email: string,
    avatar: string,
    url: string
  ) {
    // this.validateDocument(id, url);
    const newUser: IUsers = {
      id: id,
      name: name,
      email: email,
      avatar: avatar,
    };
    
    try {
     const response:Response= await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      return response.json()
       
      
    } catch (error) {
        
    }
  }

  async validateDocument(idInput: string | number, url: string) {
    const response = await fetch(`${url}?id=${idInput}`);
    const data = await response.json();

    console.log(data);
  }
}
