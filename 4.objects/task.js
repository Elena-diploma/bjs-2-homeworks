function Student(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

let student3 = new Student("Иван", "male", 30);
let student4 = new Student("Вася", "male", 25);

Student.prototype.setSubject = function (subjectName) { this.subject = subjectName; }

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
        this.marks = [];
    }
    this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
    marks.forEach( it => this.addMark(it));
}

Student.prototype.getAverage = function () {
    let sum = 0;
    for(let mark of this.marks) {
        sum += mark;
    }
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}