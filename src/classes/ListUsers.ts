export class ListUsers {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    public renderCards(id: string, name: string, email: string, avatar: string) {
        const cardContianer = document.createElement("div");
        cardContianer.className = "item";
        const h4 = document.createElement("h4") as HTMLHeadingElement;
        const p = document.createElement("p") as HTMLParagraphElement;
        const img = document.createElement("img") as HTMLImageElement;
        const deleteButton = document.createElement("button") as HTMLButtonElement;

        h4.innerText = name;
        p.innerText = email;
        img.src = avatar;
        deleteButton.innerHTML = `<i class="bi bi-x"></i>`;
        deleteButton.className = "delete-button"
        deleteButton.setAttribute("button-id", String(id));

        cardContianer.append(h4, p, img, deleteButton);

        this.container.append(cardContianer);
    }
}
