const number = [2,4,6,8,11];
const filter = [];

// for(let i = 0; i<number.length; i++){
//     const element = number[i];
//     let thisResult = element * element;
//     filter.push(thisResult);
// };
// console.log(filter);

// const mapIs  = number.map(Element=> Element*Element);
const bigger = number.filter(Element => Element < 5);
console.log(bigger);