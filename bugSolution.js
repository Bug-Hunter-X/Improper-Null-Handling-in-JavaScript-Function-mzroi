function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo('hello', 5)); // Output: NaN
console.log(foo(5, 'world')); // Output: NaN