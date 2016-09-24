require('./daycount.js')

function testYear(y) {
    var d = new Date(Date.UTC(y, 0, 1, 0, 0, 0));
    var s = 0;
    while (true) {
        d = d.nextBusinessDay();
        //console.log(d.ymd());
        if (d.getFullYear() > y)
            return s;
        s += d.getDate();
    }
}

function test1() {
    for (var i = 2001; i <= 2020; i++) {
        console.log(i + " - " + testYear(i))
    }
}

function test2() {
    var d;

    d = new Date(Date.UTC(2016, 2, 24, 0, 0, 0));
    console.log("Påsk: " + d.ymd() + " => " + d.nextBusinessDay().ymd());

    d = new Date(Date.UTC(2016, 5, 23, 0, 0, 0));
    console.log("Midsommar: " + d.ymd() + " => " + d.nextBusinessDay().ymd());
}

test2();
//console.log(testYear(2001))
/*
var d = new Date(Date.UTC(2001, 2, 25, 0, 0, 0));
d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0))
console.log(d)
console.log(d.addDays(1).isBusinessDay())
console.log(d.nextBusinessDay())
*/