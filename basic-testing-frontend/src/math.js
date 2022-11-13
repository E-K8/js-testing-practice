export function add(numbers) {
  let sum = 0;

  // throw new Error('something went wrong');

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
