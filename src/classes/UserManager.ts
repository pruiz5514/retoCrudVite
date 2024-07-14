import { IUsers } from "../interfaces/IUsers.js";

export class UserManager {
  constructor() { }

  async crateUser(
    id: string,
    name: string,
    email: string,
    avatar: string,
    url: string,
    form: HTMLFormElement
  ) {
    if (
      (await this.validateDocument(id, url)) &&
      (await this.validateEmail(email, url))
    ) {
      const newUser: IUsers = {
        id: id,
        name: name,
        email: email,
        avatar: avatar,
      };

      alert("Usuario creado exitosamente")
      form.reset();

      try {
        const response: Response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        return response.json();
      } catch (error) { }

      alert("Usuario creado exitosamente");
    }
  }

  async validateDocument(idInput: string | number, url: string) {
    const response = await fetch(`${url}?id=${idInput}`);
    const data = await response.json();

    console.log(data);

    if (data.length == 0) {
      return true;
    } else {
      return alert("Documento ya se encuentra registrado");
    }
  }

  async validateEmail(emailInput: string | number, url: string) {
    const response = await fetch(`${url}?email=${emailInput}`);
    const data = await response.json();

    console.log(data);

    if (data.length == 0) {
      return true;
    } else {
      return alert("Email ya se encuentra registrado");
    }
  }

  async deleteUser(url: string, id: string) {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
