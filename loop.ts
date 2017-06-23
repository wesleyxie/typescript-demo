let array = [4, 5, 6];

for (let i in array) {
  console.log(i); // "0", "1", "2",
}

for (let i of array) {
  console.log(i); // "4", "5", "6"
}