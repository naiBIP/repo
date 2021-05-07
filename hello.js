function max(arg1, arg2) {
    var arg1islarger = arg1 > arg2;
    console.log(arg1islarger);
    if (arg1islarger) {
        return arg1;
    } else {
        return arg2;
    }
}