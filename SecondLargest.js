function SecondLargest(arr){
 
    let FirstLargest = -Infinity;
    let SecondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > FirstLargest){
            SecondLargest = FirstLargest;
            FirstLargest = arr[i];
        }
        else if (arr[i] > SecondLargest){
            SecondLargest = arr[i];
        }
    }

    return SecondLargest;
       
}

let arr = [5,6,7,7,8,9,];

console.log(SecondLargest(arr));