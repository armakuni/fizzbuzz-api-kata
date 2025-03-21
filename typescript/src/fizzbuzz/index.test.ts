import { describe, it, expect } from 'vitest';
import { fizzbuzz } from './index';

describe('FizzBuzz', () => {
    it('returns "Fizz" for multiples of 3 but not 5', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
    });

    it('returns "Buzz" for multiples of 5 but not 3', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
    });

    it('returns "FizzBuzz" for multiples of 15', () => {
        expect(fizzbuzz(0)).toBe('FizzBuzz');
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
    });

    it('returns the number as a string for non-multiples of 3 or 5', () => {
        expect(fizzbuzz(1)).toBe('1');
        expect(fizzbuzz(2)).toBe('2');
        expect(fizzbuzz(7)).toBe('7');
        expect(fizzbuzz(13)).toBe('13');
    });

    it('works with negative numbers', () => {
        expect(fizzbuzz(-3)).toBe('Fizz');
        expect(fizzbuzz(-5)).toBe('Buzz');
        expect(fizzbuzz(-15)).toBe('FizzBuzz');
        expect(fizzbuzz(-2)).toBe('-2');
    });

});
