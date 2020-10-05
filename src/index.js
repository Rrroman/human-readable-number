module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let arrNumber = number.toString().split("");
    let result = "";
    let humanNumbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    if (arrNumber.length === 1) {
        numbers(arrNumber[0]);
    } else if (arrNumber.length === 2) {
        if (number > 9 && number < 20) {
            tensBelow20(number);
        } else if (arrNumber[1] === "0") {
            tensRound(arrNumber);
        } else {
            tens(arrNumber);
        }
    } else if (arrNumber.length === 3) {
        hundreds(arrNumber);
    }

    function numbers(number) {
        return (result = humanNumbers[number]);
    }

    function tens(number) {
        let toNumbs = numbers(number[1]);
        let toTens = tensRound(number[0]);
        return (result = `${toTens} ${toNumbs}`);
    }

    function tensBelow20(number) {
        let humanTens = [
            ...humanNumbers,
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        return (result = humanTens[number]);
    }
    function tensRound(number) {
        let temp = +number[0];
        let arrTensRound = [
            "",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
        return (result = arrTensRound[temp]);
    }

    function hundreds(number) {
        let temp = number.slice(1).join("");
        if (number[1] === "0" && number[2] === "0") {
            return (result = `${numbers(number[0])} hundred`);
        } else if (temp > 10 && temp < 20) {
            return (result = `${numbers(number[0])} hundred ${tensBelow20(
                temp
            )}`);
        } else if (number[2] === "0") {
            return (result = `${numbers(number[0])} hundred ${tensRound(
                temp
            )}`);
        } else {
            return (result = `${numbers(number[0])} hundred ${tens(temp)}`);
        }
    }

    return result.replace(/  +/g, " ");
};
