class ToDoModel {
    constructor(description, date, completed, id = 0) {
        if (!id) {
            this._id = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        } else {
            this._id = id;
        }
        this.todoDescription = description;
        this.todoDateCreated = date;
        this.todoCompleted = completed;
    };

    getId() {
        return this._id;
    };

    getDescription() {
        return this.todoDescription;
    };

    getDate() {
        return this.todoDateCreated;
    };

    getFormattedDate() {
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
            }).format(new Date(this.todoDateCreated));
    }

    getCompleted() {
        return this.todoCompleted;
    };

    setDescription(description) {
        this.todoDescription = description;
    };

    setDate(date) {
        this.todoDateCreated = date;
    };

    setCompleted(completed) {
        this.todoCompleted = completed;
    };
};

export default ToDoModel;