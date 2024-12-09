function foo(a, b) {
  // Use nullish coalescing to provide default values for a and b if they are null or undefined
  a ??= 0;  
  b ??= 0; 
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(undefined, 2)); // 2
console.log(foo(1, undefined)); // 1
console.log(foo(null, null)); // 0