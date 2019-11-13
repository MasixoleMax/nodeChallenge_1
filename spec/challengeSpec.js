const Visitors = require('../src/challenge_1')
describe("writing javascript objects to files", function() {
    
    let visitor = new Visitors("Masixole",25,"08-06-2019","09:00","none","Mike");


    it ("should be able to use the save() method to write and save a json file with the required naming convention", function() {
  
       expect(visitor.save()).toEqual({
        "fullName": "Masixole",
        "age": 25,
        "dateOfVisit": "08-06-2019",
        "timeOfVisit": "09:00",
        "comments": "none",
        "assistor": "Mike"
    })
    });
});