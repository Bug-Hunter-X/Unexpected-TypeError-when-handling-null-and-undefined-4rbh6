# JavaScript Null and Undefined Handling Bug

This repository demonstrates a common JavaScript error related to handling `null` and `undefined` values.  The code includes a function `foo` which attempts to handle `null` values gracefully, but fails to account for `undefined` values, resulting in a `TypeError`. This highlights the importance of robust null and undefined checks in JavaScript.

## Bug Description

The function `foo` checks if either `a` or `b` are strictly equal to `null`. However, if either is `undefined`, the addition operation `a + b` throws a `TypeError` because you can't perform arithmetic operations on `undefined`.

## Solution

The solution involves checking for both `null` and `undefined` using a more comprehensive approach, such as the nullish coalescing operator (`??`) or explicit checks for both values.