//= require prime_numbers

describe('isPrime', function() {

    it('should be true for prime numbers', function() {
        isPrime(2).should.be.true
        isPrime(3).should.be.true
    });

    //Order matters... have to define method before calling it
    should_be_prime = function(n) {
        it(n + ' should be prime', function() {
            isPrime(n).should.be.true
        });
    }

    inputs = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    inputs.map( should_be_prime )

    should_be_composite = function(n) {
        it(n + ' should NOT be prime', function() {
           isPrime(n).should.not.be.true
        });
    }

    inputs = [4, 6, 8, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28];
    inputs.map( should_be_composite );
});