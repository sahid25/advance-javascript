const number=  [1,2,3,4,5,6,7,8,9,10];
// console.log(number);

for(let i = 0; i< number.length; i++){
    if(number[i]> 2){
        break;
    }
    console.log(number[i]);
};

const random = [ 1,2,3,-4,-5,6,-7,-8,9];
for (let i = 0; i < random.length; i++) {
    if (random[i]<0) {
        continue;
    }
 console.log(random[i]);   
}