const students = [];

// add student
function addStudent(name, grade) {
    students.push({
        name,
        grade,
    });
}

// remove student
function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, 'has been removed');
    } else {
        console.log(name, 'was not found');
    }
}

function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students
function formatStudentList() {
    return students.map(student => `${student.name} - Grade ${student.grade}`);
}

console.log('students =', students);

addStudent('Alice', 85);
addStudent('Joe', 95);
addStudent('eMA', 60);
addStudent('Gabe', 100);
addStudent('Marks', 69);
addStudent('Ivonete', 90);
addStudent('Pete', 83);

console.log('students =', students);
console.log('top students (>=90) =', filterTopStudents(90));
console.log('formatted list =', formatStudentList());

c