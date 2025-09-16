import assert from 'node:assert';
import { type FizzBuzzConfig, fizzBuzz } from './fizz-buzz.js';

/**
 * Test runner function
 */
function runTests() {
  console.log('🧪 Running FizzBuzz Tests...\n');

  // Test basic FizzBuzz functionality
  testBasicFizzBuzz();
  testSpecificNumbers();
  testCustomConfiguration();
  testErrorHandling();

  console.log('✅ All tests passed!\n');
}

/**
 * Test basic FizzBuzz logic
 */
function testBasicFizzBuzz() {
  console.log('Testing basic FizzBuzz logic...');

  const result = fizzBuzz(15);

  // Test array length
  assert.strictEqual(result.length, 15, 'Should return array of length 15');

  // Test specific values
  assert.strictEqual(result[0], 1, 'First element should be 1');
  assert.strictEqual(result[1], 2, 'Second element should be 2');
  assert.strictEqual(result[2], 'Fizz', 'Third element should be "Fizz"');
  assert.strictEqual(result[4], 'Buzz', 'Fifth element should be "Buzz"');
  assert.strictEqual(result[14], 'FizzBuzz', 'Fifteenth element should be "FizzBuzz"');

  console.log('  ✓ Basic FizzBuzz logic works correctly');
}

/**
 * Test specific number patterns
 */
function testSpecificNumbers() {
  console.log('Testing specific number patterns...');

  const result = fizzBuzz(20);

  // Test multiples of 3
  assert.strictEqual(result[5], 'Fizz', '6 should be "Fizz"');
  assert.strictEqual(result[8], 'Fizz', '9 should be "Fizz"');
  assert.strictEqual(result[11], 'Fizz', '12 should be "Fizz"');

  // Test multiples of 5
  assert.strictEqual(result[9], 'Buzz', '10 should be "Buzz"');
  assert.strictEqual(result[19], 'Buzz', '20 should be "Buzz"');

  // Test multiples of both 3 and 5
  assert.strictEqual(result[14], 'FizzBuzz', '15 should be "FizzBuzz"');

  // Test regular numbers
  assert.strictEqual(result[6], 7, '7 should remain 7');
  assert.strictEqual(result[10], 11, '11 should remain 11');

  console.log('  ✓ Specific number patterns work correctly');
}

/**
 * Test custom configuration
 */
function testCustomConfiguration() {
  console.log('Testing custom configuration...');

  const customConfig: FizzBuzzConfig = {
    rules: [
      { divisor: 14, replacement: 'FizzBang' }, // 2 AND 7
      { divisor: 2, replacement: 'Fizz' },
      { divisor: 7, replacement: 'Bang' },
    ],
  };

  const result = fizzBuzz(14, customConfig);

  // Test custom rules
  assert.strictEqual(result[1], 'Fizz', '2 should be "Fizz"');
  assert.strictEqual(result[3], 'Fizz', '4 should be "Fizz"');
  assert.strictEqual(result[6], 'Bang', '7 should be "Bang"');
  assert.strictEqual(result[13], 'FizzBang', '14 should be "FizzBang"');

  // Test numbers that don't match rules
  assert.strictEqual(result[0], 1, '1 should remain 1');
  assert.strictEqual(result[2], 3, '3 should remain 3');
  assert.strictEqual(result[4], 5, '5 should remain 5');

  console.log('  ✓ Custom configuration works correctly');
}

/**
 * Test error handling
 */
function testErrorHandling() {
  console.log('Testing error handling...');

  // Test invalid input - negative number
  assert.throws(
    () => fizzBuzz(-1),
    /Input must be a positive integer greater than 0/,
    'Should throw error for negative numbers'
  );

  // Test invalid input - zero
  assert.throws(
    () => fizzBuzz(0),
    /Input must be a positive integer greater than 0/,
    'Should throw error for zero'
  );

  // Test invalid input - decimal
  assert.throws(
    () => fizzBuzz(3.5),
    /Input must be a positive integer greater than 0/,
    'Should throw error for decimal numbers'
  );

  // Test invalid configuration - empty rules
  const emptyConfig: FizzBuzzConfig = { rules: [] };
  assert.throws(
    () => fizzBuzz(5, emptyConfig),
    /Configuration must contain at least one rule/,
    'Should throw error for empty rules'
  );

  // Test invalid configuration - invalid divisor
  const invalidDivisorConfig: FizzBuzzConfig = {
    rules: [{ divisor: 0, replacement: 'Test' }],
  };
  assert.throws(
    () => fizzBuzz(5, invalidDivisorConfig),
    /Rule divisors must be positive integers/,
    'Should throw error for invalid divisor'
  );

  // Test invalid configuration - empty replacement
  const emptyReplacementConfig: FizzBuzzConfig = {
    rules: [{ divisor: 3, replacement: '' }],
  };
  assert.throws(
    () => fizzBuzz(5, emptyReplacementConfig),
    /Rule replacements must be non-empty strings/,
    'Should throw error for empty replacement'
  );

  console.log('  ✓ Error handling works correctly');
}

runTests();
