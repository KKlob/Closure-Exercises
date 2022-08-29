function curriedAdd(ini = null) {
    if (ini === null) return 0;
    let sum = ini;
    return function add(num = null) {
        if (num) {
            sum += num;
            return add;
        } else return sum;
    }
}


module.exports = { curriedAdd };
