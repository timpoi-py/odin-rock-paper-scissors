const len = [0,1,2,3,4,5]

function iterateArrayLength(array) {

    for (let i=array.length-1; i>=0; i++){
        setTimeout(() => {
            console.log(array[i]);
        }, i*200);
    }
}    

console.log(iterateArrayLength(len));

console.log(len.length);