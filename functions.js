function multiply(x, y, z){
   return x * y * z 
}
numbers = multiply (5,3,8)
console.log(numbers);

let convertToSeconds = function(minutes) {
    return minutes *  60
}
time = convertToSeconds (4)
console.log(time);

let fahrenheitToCelsius = function(temperature){
      return (temperature -32) / 1.8
}
celsius = fahrenheitToCelsius(40)
console.log(celsius)

function reverse(string) {
       return string.split('').reverse().join('');
}
console.log(reverse('blue'));

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("computer")); 

function isPrime(number){
    if(number < 2) {
        return false;
    }
    for(let i = 2; i < number;i++){
        if (number % i == 0) {
            return false;
        }
    }
      return true;
}
console.log(isPrime (2))
console.log(isPrime (15))
console.log(isPrime (25))
console.log(isPrime (7))