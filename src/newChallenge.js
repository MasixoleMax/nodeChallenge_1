let fs = require('fs');

class Visitors {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistor){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistor = assistor;
       
    }
save(){
       var jsonString = JSON.stringify(this,null, 4);
   
       fs.writeFile(`visitor_${this.fullName}.json`, jsonString, function(err){
            if (err) {
                console.log(err);
            } 
        }) 
            return jsonString;

    }       
load(fullName){
    let text = fs.readFileSync(`visitor_${this.fullName}.json`, 'utf-8');
    console.log(text);
}}

    let max = new Visitors("Max",25,"08-06-2019","09:00","none","Mike");
    let masixole = new Visitors("Masixole",25,"08-06-2019","09:00","none","Mike")
    module.exports = Visitors;

// max.save();
// max.load(max);
// visitor.load(2);
