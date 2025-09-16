// Type definitions for better type safety
type FizzBuzzRule = {
  divisor: number;
  replacement: string;
};

type FizzBuzzResult = string | number;

/**
 * Configuration interface for FizzBuzz rules
 */
interface FizzBuzzConfig {
  rules: FizzBuzzRule[];
}

/**
 * Default FizzBuzz configuration following the classic rules
 */
const DEFAULT_CONFIG: FizzBuzzConfig = {
  rules: [
    { divisor: 15, replacement: 'FizzBuzz' }, // 3 AND 5 (must come first for correct precedence)
    { divisor: 3, replacement: 'Fizz' },
    { divisor: 5, replacement: 'Buzz' },
  ],
};

/**
 * Validates input parameters
 * @param n - The upper limit for FizzBuzz
 * @throws Error if n is not a positive integer
 */
function validateInput(n: number): void {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('Input must be a positive integer greater than 0');
  }
}

/**
 * Validates FizzBuzz configuration
 * @param config - The configuration object
 * @throws Error if configuration is invalid
 */
function validateConfig(config: FizzBuzzConfig): void {
  if (!config.rules || config.rules.length === 0) {
    throw new Error('Configuration must contain at least one rule');
  }

  for (const rule of config.rules) {
    if (!Number.isInteger(rule.divisor) || rule.divisor < 1) {
      throw new Error('Rule divisors must be positive integers');
    }

    if (typeof rule.replacement !== 'string' || rule.replacement.trim() === '') {
      throw new Error('Rule replacements must be non-empty strings');
    }
  }
}

/**
 * Determines the FizzBuzz result for a single number
 * @param num - The number to evaluate
 * @param config - The FizzBuzz configuration
 * @returns The FizzBuzz result (string replacement or the original number)
 */
function getFizzBuzzValue(num: number, config: FizzBuzzConfig): FizzBuzzResult {
  for (const rule of config.rules) {
    if (num % rule.divisor !== 0) {
      continue;
    }

    return rule.replacement;
  }

  return num;
}

/**
 * Classic FizzBuzz implementation
 * Generates FizzBuzz sequence from 1 to N
 * @param n - The upper limit (inclusive)
 * @param config - Optional configuration for custom rules
 * @returns Array of FizzBuzz results
 */
export function fizzBuzz(n: number, config: FizzBuzzConfig = DEFAULT_CONFIG): FizzBuzzResult[] {
  validateInput(n);
  validateConfig(config);

  const results: FizzBuzzResult[] = [];

  for (let i = 1; i <= n; i++) {
    results.push(getFizzBuzzValue(i, config));
  }

  return results;
}

export type { FizzBuzzRule, FizzBuzzResult, FizzBuzzConfig };
