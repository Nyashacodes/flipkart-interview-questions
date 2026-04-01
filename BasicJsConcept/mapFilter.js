arr = [3,1,7,9,0,5,6]

const result = arr.map((i)=>{return i+1})

// console.log(result);
// console.log(arr.map((i)=>{return i+1}));//returns a new array
// console.log("old arr", arr);//map creates a new array by applying a function to each element of the original array

//forEach just runs a loop doesn't returns anything

//filter
//return number greater than 5
const res = arr.filter((num)=>{ //filter returns a new array containing only elements that satisfy a condition
return num > 5
})

// console.log(res);
// console.log("old arr", arr);

//reduce to sum of all element

const response = arr.reduce((a,b)=>{ //reduce is used to accumulate values into a single result
    return a+b
},0)

// console.log(response);
// console.log("old arr", arr);

//maximum number in array using reduce

const max = arr.reduce((a,b)=>{
    return a>b?a:b
},)
// console.log(max);

const freq = ["a","b","a","c","b","a"]
//count frequency using reduce

const freqtrack = freq.reduce((acc,index)=>{
    
})



