function toDecimal() {}

function fromDecimal() {}

function test() {
  const arr = [
    "1=-0-2",
    "12111",
    "2=0=",
    "21",
    "2=01",
    "111",
    "20012",
    "112",
    "1=-1=",
    "1-12",
    "12",
    "1=",
    "122",
  ];
  const result = "2=-1=0";

  let sum = 0;
  for (const item of arr) {
    sum += toDecimal(item);
  }

  console.log(fromDecimal(sum) === result);
}

test();
