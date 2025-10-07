class ToDoModel {
    static lastId = 0;

    constructor(description, date, completed) {
        this.id = ++ToDoModel.lastId;
        this.description = description;
        this.completed = completed;
        this.date = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
            }).format(new Date(date));
    };

    getId() {
        return this.id;
    };

    getDescription() {
        return this.description;
    };

    getDate() {
        return this.date;
    };

    getCompleted() {
        return this.completed;
    };

    setDescription(description) {
        this.description = description;
    };

    setDate(date) {
        this.date = date;
    };

    setCompleted(completed) {
        this.completed = completed;
    };
};

export default ToDoModel;