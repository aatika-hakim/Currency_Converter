var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import chalk from "chalk";
const currencies = [
    'PKR',
    'EUR',
    'USD',
    'GBP',
    'IND',
    'EGY',
    'CAD',
];
const exchangeRates = {
    PKR: {
        EUR: 0.005,
        USD: 0.006,
        GBP: 0.004,
        IND: 0.46,
        EGY: 0.095,
        CAD: 0.008,
    },
    EUR: {
        PKR: 200,
        USD: 1.18,
        GBP: 0.85,
        IND: 86.24,
        EGY: 17.89,
        CAD: 1.56,
    },
    USD: {
        PKR: 170.25,
        EUR: 0.85,
        GBP: 0.72,
        IND: 75.0,
        EGY: 15.65,
        CAD: 1.33,
    },
    GBP: {
        PKR: 250,
        EUR: 1.18,
        USD: 1.39,
        IND: 105.36,
        EGY: 21.87,
        CAD: 1.91,
    },
    IND: {
        PKR: 2.17,
        EUR: 0.012,
        USD: 0.013,
        GBP: 0.0095,
        EGY: 0.21,
        CAD: 0.018,
    },
    EGY: {
        PKR: 10.53,
        EUR: 0.056,
        USD: 0.064,
        GBP: 0.046,
        IND: 4.71,
        CAD: 0.088,
    },
    CAD: {
        PKR: 124.25,
        EUR: 0.64,
        USD: 0.75,
        GBP: 0.52,
        IND: 55.56,
        EGY: 11.33,
    },
};
function Converter(from, to, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (exchangeRates[from] && exchangeRates[from][to]) {
            const exchangeRate = exchangeRates[from][to];
            const convertedAmount = amount * exchangeRate;
            console.log(chalk.cyanBright(`${amount} ${from} is equal to ${convertedAmount.toFixed(2)} ${to}`));
        }
        else {
            console.error("Invalid currency pair or missing exchange rate.");
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([
            {
                type: "list",
                name: "from",
                message: chalk.yellowBright("Convert From: "),
                choices: currencies,
            },
            {
                type: "list",
                name: "to",
                message: chalk.yellowBright("Convert To: "),
                choices: currencies,
            },
            {
                type: "number",
                name: "amount",
                message: chalk.greenBright("Enter the amount to be conversion: "),
                validate: (value) => {
                    if (!isNaN(value)) {
                        return true;
                    }
                    return chalk.redBright("Please enter a valid number.");
                },
            },
        ]);
        const { from, to, amount } = answers;
        Converter(from, to, amount);
    });
}
main();
