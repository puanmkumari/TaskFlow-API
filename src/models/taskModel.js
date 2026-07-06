const { v4: uuidv4 } = require("uuid");

class Task {
    constructor({
        title,
        description = "",
        priority = "medium",
        completed = false
    }) {
        this.id = uuidv4();

        this.title = title.trim();

        this.description = description.trim();

        this.priority = priority;

        this.completed = completed;

        this.createdAt = new Date().toISOString();

        this.updatedAt = new Date().toISOString();
    }
}

module.exports = Task;