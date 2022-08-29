function createAccount(pin, amount = 0) {
    let currPin = pin;
    let currAmount = amount;
    return {
        checkBalance: function (pin) {
            if (pin === currPin) {
                return `$${currAmount}`;
            } else return "Invalid PIN.";
        },
        deposit: function (pin, amount) {
            if (pin === currPin) {
                currAmount += amount;
                return `Succesfully deposited $${amount}. Current balance: $${currAmount}.`;
            } else return "Invalid PIN.";
        },
        withdraw: function (pin, amount) {
            if (pin === currPin) {
                if (currAmount - amount > 0) {
                    currAmount -= amount;
                    return `Succesfully withdrew $${amount}. Current balance: $${currAmount}.`
                } else return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            } else return "Invalid PIN.";
        },
        changePin: function (pin, newPin) {
            if (pin === currPin) {
                currPin = newPin;
                return "PIN successfully changed!";
            } else return "Invalid PIN.";
        }

    }
}

module.exports = { createAccount };
