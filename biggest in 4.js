var n1 = 10;
var n2 = 5;
var n3 = 11;
var n4 = 8;
if (n1 >= n2) {
    if (n1 >= n3) {
        if (n1 >= n4) {
            console.log("n1 is biggest");
        } else {
            console.log("n4 is biggest");
        }
    } else {
        if (n3 >= n4) {
            console.log("n3 is biggest");
        } else {
            console.log("n4 is biggest");
        }
    }
} else {
    if (n2 >= n3) {
        if (n2 >= n4) {
            console.log("n2 is biggest");
        } else {
            console.log("n4 is biggest");
        }
    } else {
        if (n3 >= n4) {
            console.log("n3 is biggest");
        } else {
            console.log("n4 is biggest");
        }
    }
}
