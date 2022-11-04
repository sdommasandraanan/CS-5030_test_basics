class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
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
        console.log('request.params.title---', request.params.title)
        const index = this.todo_data.todo.findIndex(key => key.title == request.params.title);
        this.todo_data.todo.splice(index,1);
        return this.todo_data.todo;
    }

    update_todo(request) {
        this.todo_data.todo.find(data => {
            if (data.title == request.params.title){
                data.description=request.body.description
            }
        })
        return this.todo_data.todo
    }
}


module.exports= todoservice;