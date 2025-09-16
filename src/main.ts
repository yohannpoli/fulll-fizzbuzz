import { type FizzBuzzConfig, fizzBuzz } from './fizz-buzz.js';

console.log('=== Classic FizzBuzz (1-20) ===');

try {
  const results = fizzBuzz(20);

  for (let index = 0; index < results.length; index++) {
    console.log(`${index + 1}: ${results[index]}`);
  }
} catch (error) {
  console.error('FizzBuzz Error:', error instanceof Error ? error.message : 'Unknown error');
}

console.log('\n\n=== Custom Rules Example ===');

const customConfig: FizzBuzzConfig = {
  rules: [
    { divisor: 21, replacement: 'FizzBuzzBang' }, // 3 AND 7
    { divisor: 15, replacement: 'FizzBuzz' }, // 3 AND 5
    { divisor: 35, replacement: 'BuzzBang' }, // 5 AND 7
    { divisor: 3, replacement: 'Fizz' },
    { divisor: 5, replacement: 'Buzz' },
    { divisor: 7, replacement: 'Bang' },
  ],
};

try {
  const results = fizzBuzz(50, customConfig);

  for (let index = 0; index < results.length; index++) {
    console.log(`${index + 1}: ${results[index]}`);
  }
} catch (error) {
  console.error('FizzBuzz Error:', error instanceof Error ? error.message : 'Unknown error');
}
