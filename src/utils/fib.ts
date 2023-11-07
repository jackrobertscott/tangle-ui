/**
 * Creates a size value by summing the Fibonacci sequence values
 * of the given numbers.
 * @param numbers - The numbers to calculate the Fibonacci sequence values for.
 * @returns The size value calculated by summing the Fibonacci sequence values.
 */
export function fib(...numbers: number[]): number {
  let sum: number = 0
  let a: number
  let b: number
  let temp: number

  const fibonacci = (n: number): number => {
    a = 0
    b = 1
    for (let i = 0; i < n; i++) {
      temp = a
      a = b
      b = temp + b
    }
    return a
  }

  for (const n of numbers) {
    const fibValue: number = fibonacci(Math.abs(n))
    sum += n > 0 ? fibValue : -fibValue
  }

  return sum
}
