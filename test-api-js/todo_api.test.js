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
    const responses = await request(app).post("/todoAdd").send(record)
            expect(responses.body.length).toBe(4);
            expect(responses.statusCode).toBe(200);
    });

    test("todoDelete /", async () => {
        let title = "T3"
        const response = await request(app).delete("/todoDelete/" + title)
        console.log('body', response.body)
        expect(response.body.length).toBe(2)
            
    })

    test("todoUpdate /", async () => {
        let record = {
            "title": "T3",
            "description": "update testing",
            "done": false
        }
            const responses = await request(app).put("/todoUpdate/" + record.title).send(record)
            let len = responses.body.length
            expect(responses.body[len-1].description).toBe(record.description)
                
    })


});