export class Model {

    user;
    items;

    constructor() {
        this.user = "OrkunYK";
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Kitap Okumak", true),
            new TodoItem("Ders", true),
            new TodoItem("Sinema", false)
        ];
    }

}

export class TodoItem {

    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }

}