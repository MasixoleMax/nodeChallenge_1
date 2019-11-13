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
       let jsonString = JSON.stringify(this,null, 4);

        this.index = 0;

         do {
            this.index++; 
         } while(fs.existsSync(`visitor_${this.index}.json`));

        fs.writeFile(`visitor_${this.index}.json`, jsonString, function(err){
            if (err) {
                console.log(err);
            } 
            return `data saved successfully ${jsonString}`;
        }) 
    }
load(int){
    let text = fs.readFileSync(`visitor_${int}.json`, 'utf-8');
    console.log(text);
}}

    let visitor = new Visitors("Masixole",25,"08-06-2019","09:00","none","Mike");
    module.exports = Visitors

//  visitor.save();
// visitor.load(5);
// visitor.load(2);
