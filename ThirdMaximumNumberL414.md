- this question has been asked in screening round of flipkart interviews.
- the question is to find the third maximum number in an array of integers. if the third maximum does not exist, return the maximum number. the time complexity of the solution should be o(n) and the space complexity should be o(1).
brute force approach:
- we can sort the array in descending order and then return the third element of the sorted array. if the third element does not exist, we can return the first element of the sorted array. the time complexity of this approach is o(nlogn) and the space complexity is o(1).
optimal approach:
- we can maintain three variables to store the first, second and third maximum numbers. we can iterate through the array and update these variables accordingly. if the current number is greater than the first maximum, we can update the second and third maximums. if the current number is greater than the second maximum but less than the first maximum, we can update the third maximum. if the current number is greater than the third maximum but less than the second maximum, we can update the third maximum. at the end of the iteration, if the third maximum does not exist, we can return the first maximum. otherwise, we can return the third maximum. the time complexity of this approach is o(n) and the space complexity is o(1).
```javascript   
function thirdMax(nums) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let num of nums) {
        if (num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num < firstMax) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num > thirdMax && num < secondMax) {
            thirdMax = num;
        }
    }

    return thirdMax === -Infinity ? firstMax : thirdMax;
}
```- the above code will return the third maximum number in the array. if the third maximum does not exist, it will return the maximum number.