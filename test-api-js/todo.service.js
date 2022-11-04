class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(request){
        this.todos = this.todo_data.todo.push((request.body));
        return this.todo_data.todo;
    }

    delete_todo(request){
        const index = this.todo_data.todo.findIndex(key => key.title === request.params.id);
        this.todo_data.todo.splice(index,1);
        return this.todo_data.todo;
    }

    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;