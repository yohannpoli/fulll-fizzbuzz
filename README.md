# FizzBuzz Algorithm Implementation

A modern, scalable TypeScript implementation of the classic FizzBuzz algorithm with comprehensive error handling and extensible rule system.

## 🚀 Features

- **Type-Safe**: Full TypeScript implementation with strict typing
- **Scalable**: Configurable rule system for custom FizzBuzz variants
- **Robust**: Comprehensive input validation and error handling
- **Modern**: Uses ES modules and latest TypeScript features
- **Flexible**: Multiple implementation approaches (imperative and functional)
- **Well-Documented**: Extensive JSDoc comments and examples

## 📋 Requirements

- Node.js (v16 or higher)
- TypeScript (v5.0 or higher)

## 🛠️ Installation

```bash
# Clone the repository
git clone git@github.com:yohannpoli/fulll-fizzbuzz.git
cd fulll-fizzbuzz

# Install dependencies
npm clean-install
```

## 🎯 Usage

### Basic Usage

```typescript
import { fizzBuzz } from './fizzbuzz.js';

// Generate FizzBuzz array for numbers 1-20
const results = fizzBuzz(20);

// Display FizzBuzz results directly to console
for (let index = 0; index < results.length; index++) {
  console.log(`${index + 1}: ${results[index]}`);
}
```

### Custom Rules

```typescript
import { fizzBuzz, FizzBuzzConfig } from './fizzbuzz.js';

const customConfig: FizzBuzzConfig = {
  rules: [
    { divisor: 21, replacement: 'FizzBuzzBang' }, // 3 AND 7
    { divisor: 15, replacement: 'FizzBuzz' },     // 3 AND 5
    { divisor: 35, replacement: 'BuzzBang' },     // 5 AND 7
    { divisor: 3, replacement: 'Fizz' },
    { divisor: 5, replacement: 'Buzz' },
    { divisor: 7, replacement: 'Bang' }
  ]
};

// Generate FizzBuzz array for numbers 1-20
const results = fizzBuzz(20, customConfig);

// Display FizzBuzz results directly to console
for (let index = 0; index < results.length; index++) {
  console.log(`${index + 1}: ${results[index]}`);
}
```

## 🏃‍♂️ Running the Code

```bash
npm start
```

## 🏃 Running the Tests

```bash
npm test
```

## 🏃 Running the Linter and the Formatter

```bash
npm run check
npm run check:fix
```

## 🧪 Example Output

```
=== Classic FizzBuzz (1-20) ===
1: 1
2: 2
3: Fizz
4: 4
5: Buzz
6: Fizz
7: 7
8: 8
9: Fizz
10: Buzz
11: 11
12: Fizz
13: 13
14: 14
15: FizzBuzz
16: 16
17: 17
18: Fizz
19: 19
20: Buzz
```

## 🔧 Configuration Options

### FizzBuzzConfig Interface

```typescript
interface FizzBuzzConfig {
  rules: FizzBuzzRule[];
}

type FizzBuzzRule = {
  divisor: number;
  replacement: string;
};
```

### Default Configuration

```typescript
const DEFAULT_CONFIG: FizzBuzzConfig = {
  rules: [
    { divisor: 15, replacement: 'FizzBuzz' }, // Must come first
    { divisor: 3, replacement: 'Fizz' },
    { divisor: 5, replacement: 'Buzz' }
  ]
};
```

## 🚨 Error Handling

The implementation includes comprehensive error handling for:

- **Invalid Input**: Non-integer or non-positive numbers
- **Invalid Configuration**: Missing rules, invalid divisors, or empty replacements
- **Runtime Errors**: Graceful error reporting with descriptive messages
