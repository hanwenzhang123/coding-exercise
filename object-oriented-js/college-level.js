class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }
  get level (){
        let credits = this.credits;

        if (credits > 90) {return 'Senior';}

        else if (credits <= 90 && credits >= 61 ) {return 'Junior';}

        else if (credits <= 60 && credits >= 31) {return 'Sophomore';}

        else if (credits <= 30 ) {return 'Freshman';}
  }
}

const student = new Student(3.9);
