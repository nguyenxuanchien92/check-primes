function isPrimes(num) {

    let result;
    let str = "";
    if (num < 2) {
        console.log("nhập lại giá trị")
    } else if (num === 2) {
        str += num;
    } else {
        for (num; num < 10000; num++) {
            for (let i = 2; i < num; i++) {

                if (num % i === 0) {
                    result = false;
                    break;
                } else {
                    result = true;
                }
            }
            if (result) {
                str += num + ",";
            }
        }
    }

    console.log(str);
}

isPrimes(25);