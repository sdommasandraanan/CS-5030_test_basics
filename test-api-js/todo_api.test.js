const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
    });

    test("todoAdd /", async () => {
        let record = {
            "title": "Test",
            "description": "Testing",
            "done": false
        }
    const responses = await request(app).post("/addToDo")
            .send(record)
            expect(responses.body.length).toBe(4);
            expect(responses.statusCode).toBe(200);
    });


});