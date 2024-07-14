import { ListUsers } from "./classes/ListUsers.js";
import { UserManager } from "./classes/UserManager.js";
import { Users } from "./classes/Users.js";
import { IUsers } from "./interfaces/IUsers.js";

const container = document.querySelector(".item-list") as HTMLElement;
const mainContainer = new ListUsers(container);

const url: string = "http://localhost:3000/users"

const getUser = async (): Promise<IUsers[] | string> => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return "error";
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    const data: IUsers[] | string = await getUser();

    if (typeof data == "string") {
        alert("Error");
    } else {
        showCards(data)
    }

    document.addEventListener("click", async (event: Event) => {

        if ((event.target as HTMLElement).parentElement?.classList.contains("delete-button")) {
            const idDeleteButton = (event.target as HTMLElement).parentElement?.getAttribute("button-id");
            const userManager: UserManager = new UserManager();

            if (idDeleteButton != null) {
                await userManager.deleteUser(url, idDeleteButton);
                const data: IUsers[] | string = await getUser();

                if (typeof data == "string") {
                    alert("Error");
                } else {
                    showCards(data)
                }
            }

        }
    });
});


function showCards(array: IUsers[]) {
    container.innerHTML = " "
    array.map((user: IUsers) => {
        const userCard = new Users(user.id, user.name, user.email, user.avatar);
        mainContainer.renderCards(
            userCard.id,
            userCard.name,
            userCard.email,
            userCard.avatar
        );
    });
}