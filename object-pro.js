const student = [
    {id:21, name:'someOne1'},
    {id:22, name:'someOne2'},
    {id:23, name:'someOne3'},
    {id:24, name:'someOne4'},
    {id:25, name:'someOne5'}
];
// const studentName = [];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;
//     studentName.push(element);
// }
// console.log(studentName);

const names = student.map(e => e.name);
console.log(names);