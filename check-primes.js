function isPrimes(num) {

    let result;


    let str="2,";
    for (let num = 2; num < 10000; num++) {

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {
                result = false;
                break;
            } else {
                result = true;
            }
        }
        if (result) {
            str += num+",";
        }
    }

    console.log(str);
}

isPrimes(25);