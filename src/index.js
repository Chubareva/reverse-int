module.exports = function reverse(n) {
    let res = '';
    if (n % 10 == 0) {
        n = n / 10;
    }
    let arr = n.toString();
    if (arr[0] === '-') {

        for (let i = 1; i < arr.length; i++) {
            res = arr[i] + res;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            res = arr[i] + res;
        }
    }
    return res;
}
