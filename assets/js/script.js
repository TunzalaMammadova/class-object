"use strict"



let stu1 = {
    id: 1,
    fullName: "Tunzale Memmedova",
    age: 25,
    address: "Azadliq"
};

let stu2 = {
    id: 2,
    fullName: "Nergiz Memmedova",
    age: 26,
    address: "Azadliq"
};


let stu3 = {
    id: 3,
    fullName: "Semed Huseynov",
    age: 27,
    address: "Ehmedli"
};


let stu4 = {
    id: 4,
    fullName: "Elnur Memmedov",
    age: 25,
    address: "Nesimi"
};


let stu5 = {
    id: 5,
    fullName: "Togrul Memmedov",
    age: 30,
    address: "Nerimanov"
};

let students = [stu1, stu2, stu3, stu4, stu5];



let group = {
    name: "P418",
    capacity: 10,
    students: [],

    addStudent: function (student) {
        if (student == undefined) {
            alert("Can't be empty");
            return;
        }

        this.students.push(student)
    },

    search: function (searchText) {

        return this.students.filter(students => students.fullName.toLowerCase().trim().includes(searchText.toLowerCase().trim()));
    },

    getById: function (id) {

        return this.students.find(m => m.id == id)
    },

    delete: function (id) {

        if(this.students.find(m => m.id == id)){

            console.log(students)
        } 
        
    },

    getAll: function (students) {
        for (const item of students) {
            return students;
        }
    }
};



group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);
group.addStudent(stu5);


//console.log(group.search("s"));

//console.log(group.getById(3));

//group.delete(4);

//console.log(group.getAll(students));







