function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b;
}

console.log(foo(1, "2")); // Output: Error: Inputs must be numbers
console.log(foo(1, 2)); // Output: 3

// Or using type conversion (less safe)
function bar(a, b) {
  return Number(a) + Number(b);
}

console.log(bar(1, "2")); // Output: 3
console.log(bar(1, 2)); // Output: 3