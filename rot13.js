function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
            newStr += String.fromCharCode(str.charCodeAt(i) - 13);
        } else if (str.charCodeAt(i) >= 65) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 13);
        } else {
            newStr += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return newStr;
}