function Student(name, gender, age) {
    return {
        name,
        gender,
        age,
        subject: "",
        mark: "",
    }
    let student1 = new Student("Tony", "male", 37);
    student1.setSubject("Algebra");
    student1.addMark(5);
    student1.addMark(4);
    student1.addMark(5);
    console.log(student1.getAverage()); //4.6666
    console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
    let student2 = new Student("Buzz", "female", 35);
    student2.setSubject("Geometry");
    student2.addMark(2);
    student2.addMark(3);
    student2.addMark(2);
    student2.exclude('low grades')
    console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
    return this.subject;
}
Student.prototype.addMark = function (mark) {
    this.mark = mark;
    if(this.marks === undefined){
        this.marks = [this.mark];
    }else{
        this.mark.push(this.mark);
    }
    return this.marks;
}
Student.prototype.addMarks = function (...appraisals) {
    let sum = 0;
    if(this.marks === undefined){
        this.marks = [];
        for(let i of appraisals) {
            this.mark.push(i);
        }
    }else{

    }
    return this.marks;
}
Student.prototype.getAverage = function (addMarks) {
    let marks = this.addMarks();
    let average = sum/marks.length;
    let sum = 0;
    for(let i of marks) {
        sum += marks[i];
    }
    return average;
}

Student.prototype.exclude = function (reason) {
    this.exclude = reason;
    delete this.subject;
    delete this.marks;
    return this.exclude [reason];
}