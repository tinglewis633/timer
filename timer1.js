const argv = process.argv.slice(2);

let numArr = [];
for (let elem of argv) {
  numArr.push(Number(elem));
}

let newnumArr = [];
for (let elem of numArr) {
  if (typeof elem === "number" && elem > 0) {
    newnumArr.push(elem);
  }
}

const orderArray = newnumArr.sort((a, b) => a - b);

for (let elem of orderArray) {
  setTimeout(() => {
    process.stdout.write("0");
  }, (x = elem * 500));
}

if (orderArray.length !== 0) {
  setTimeout(() => {
    process.stdout.write("\n");
  }, orderArray[orderArray.length - 1] * 500 + 500);
}
