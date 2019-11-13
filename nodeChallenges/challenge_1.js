let fs = require('fs');
// let http = require('http')

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
            console.log(`data saved successfully ${jsonString}`);
        }) 
    }

    load(int){
        let text = fs.readFileSync(`visitor_${int}.json`, 'utf-8')
        console.log(text);
   }
        
    }


let visitor = new Visitors ('Sihle', 19, '08-06-2019', '09:00', 'none', 'Jack');


// visitor.save();
// visitor.load(5);
// visitor.load(2);

