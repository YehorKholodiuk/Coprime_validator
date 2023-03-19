const isCoprime = (x,y) => y ? isCoprime (y,x % y): x == 1;
console.log (isCoprime(20, 27))
