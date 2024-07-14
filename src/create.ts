import { UserManager } from "./classes/UserManager.js";

const id = document.querySelector("#id") as HTMLInputElement;
const nameUser = document.querySelector("#name") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const avatar = document.querySelector("#avatar") as HTMLInputElement;
const form = document.querySelector("#user-form") as HTMLFormElement;

const url = "http://localhost:3000/users";

form.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const userManager: UserManager = new UserManager();

  await userManager.crateUser(
    id.value,
    nameUser.value,
    email.value,
    avatar.value,
    url,
    form
  );
});

