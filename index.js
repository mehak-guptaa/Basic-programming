function prime(num) {
    for (let i = 1; i <= num/2 ; i++) {
        if (num % i == 0){
            console.log("false")
        }
        else (console.log("true"))
    }
}