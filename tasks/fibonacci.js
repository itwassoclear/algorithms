// finding the nth fibonacci number
// О(2^n)

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// fibonacci series is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
