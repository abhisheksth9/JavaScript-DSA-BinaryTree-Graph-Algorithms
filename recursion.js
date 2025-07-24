const factorial = (n) => {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(11));
console.log(factorial(5));
console.log(factorial(4));

//Time: O(n)
//Space: O(n)   