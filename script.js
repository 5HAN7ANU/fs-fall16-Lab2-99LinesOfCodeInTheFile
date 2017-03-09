var friends = ["Jason", "Sky", "JD", "Les", "Brian"];

for(var i = 0; i < friends.length; i++){
    var j = friends[i].toUpperCase();
    console.log(j + ":");

    for(var k = 99; k > 0; k--){
        if(k > 1){
            console.log(k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k - 1) + " lines of code in the file");
        }else{
            console.log("1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
}