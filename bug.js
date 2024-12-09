function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause a TypeError if called with undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(undefined, 2)); // TypeError: Cannot read properties of undefined (reading '+')