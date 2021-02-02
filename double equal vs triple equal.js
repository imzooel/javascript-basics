
if (0 === "0"){
    console.log(true);
}
else {
    console.log(false);
}
// it will return false, because === will first check the data type and value both.
// as first 0 is a number and second "0" is a string it'll throuw false!


if (0 == "0"){
    console.log(true);
}
else {
    console.log(false);
}
// output will be true. because if there is == and data type doesn't match>> it will try to match the data types of those value.
// if data type matching is possible than it'll match the value.
