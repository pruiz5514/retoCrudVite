import { ListUsers } from "./classes/ListUsers.js";
import { Users } from "./classes/Users.js";
import { IUsers } from "./interfaces/IUsers.js";

const container = document.querySelector(".item-list") as HTMLElement;
const mainContainer = new ListUsers(container);



const getUser = async():Promise<IUsers[]| string > =>{
    try{
        const response = await fetch("http://localhost:3000/users");
        const data  = await response.json();
        return data;  
    }
    catch (error) {
        return "error";   
    }
};

document.addEventListener("DOMContentLoaded", async()=>{
    const data: IUsers[]| string = await getUser()

    if(typeof(data) == "string"){
        alert("Error")
    }else{
        data.map((user:IUsers) =>{
            const userCard = new Users(user.id, user.name, user.email, user.avatar);
             mainContainer.renderCards(userCard.id, userCard.name, userCard.email, userCard.avatar);
         })
    }
})
