const hello: string = 'Hello';

console.log(`${hello} world!`);

const list: Array<number> = [1, 2, 3];
console.log(list);

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

function calculate(): number {
  return 1 + 1;
}

console.log(calculate());

function warnUser(): void {
  console.log('This is my warning message');
}

warnUser();

// Don't use var !!!!
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }

  return x;
}

console.log(f(true));  // returns '10'
console.log(f(false)); // returns 'undefined'

function badExample() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  }
}

badExample();