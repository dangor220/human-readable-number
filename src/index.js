module.exports = function toReadable(number) {
  let arr = number.toString().split("");
  let result;

  let number_one = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let number_two = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };

  let number_three = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  if (number.toString().length === 3) {
    if (arr[1] === "0") {
      return `${number_one[arr[0]]} hundred ${number_one[arr[2]]}`.trim();
    }
    return arr[1] === "1"
      ? `${number_one[arr[0]]} hundred ${number_two[arr[1] + arr[2]]}`
      : `${number_one[arr[0]]} hundred ${number_three[arr[1]]} ${
          number_one[arr[2]]
        }`.trim();
  }

  if (number.toString().length === 2) {
    return arr[0] === "1"
      ? `${number_two[arr[0] + arr[1]]}`
      : `${number_three[arr[0]]} ${number_one[arr[1]]}`.trim();
  }

  if (number.toString().length === 1) {
    if (arr[0] === "0") return "zero";
    return `${number_one[arr[0]]}`;
  }
};
