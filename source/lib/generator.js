var Levels = (function () {
    function separatedRepeat(chars, min, max, num, sep) {
        var res = [],
            card = chars.length,
            i;
        min = min > 0 ? min : 1;
        max = max >= min ? max  : min;
        sep = sep || ' ';
        function picksome(n) {
            var res = '';
            while (n--) res += chars[Math.floor(Math.random() * card)]
            return res;
        }
        for (i = 0; i < num; i++) {
            res.push(picksome(min + Math.floor(Math.random() * (max - min + 1))))
        }
        return res.join(sep)
    }
    console.log(separatedRepeat(['a', 'b', 'c', 'd'], 1,3, 5))
    console.log(separatedRepeat(['a', 'b', 'c', 'd'], 2,3, 5))
    console.log(separatedRepeat(['a', 'b', 'c', 'd'], 3,3, 5))
    console.log(separatedRepeat(['a', 'b', 'c', 'd'], 3,2, 5))
    console.log(separatedRepeat(['a', 'b', 'c', 'd'], 3,7, 10))

    var levels = {
        letters: [{
            set: 'fj',
            domains:{
                left: { index: 'f' },
                right: { index: 'j' }
            }
            tests: [
                
            ]
        }, {
            set: 'dk',
            domains:{
                left: { middle: 'd' },
                right: { middle: 'k' }
            }
        }, {
            set: 'sl',
            domains: {
                left: { ring: 's' },
                right: { ring: 'l' }
            }
        }]
    };
    function generate() {

    }

    return levels;
})()