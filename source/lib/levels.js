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

    var tests = {
        basic: [
            [5, 5, 1],
            [2, 2, 5],
            [4, 4, 10],
            [1, 6, 10]
        ],
        row: [
            [5, 5, 1],
            [2, 2, 5],
            [4, 4, 10],
            [1, 6, 10]
        ]
    }
    function generateTests(test, set) {
        return tests[test].map(function (t) {
            return separatedRepeat.apply(null, [set].concat(t));
        });
    }
    function generateLevel(chars, test) {
        var set = chars.split('');
        return {
            set: set,
            tests: generateTests(test, set)
        };
    }

    var levels = {
        
        basic: [{
            name: 'homerow',
            tests: [
                generateLevel('fj', 'basic'),
                generateLevel('dk', 'basic'),
                generateLevel('sl', 'basic'),
                generateLevel('a;', 'basic'),
                generateLevel('gh', 'basic'),
                generateLevel('fghj', 'basic'),
                generateLevel('dfghjk', 'basic'),
                generateLevel('sdfghjkl', 'basic'),
                generateLevel('asdfghjkl;', 'row')
            ]
        }, {
            name: 'uprow',
            tests: [
                generateLevel('ru', 'basic'),
                generateLevel('ei', 'basic'),
                generateLevel('wo', 'basic'),
                generateLevel('qp', 'basic'),
                generateLevel('ty', 'basic'),
                generateLevel('rtyu', 'basic'),
                generateLevel('ertyui', 'basic'),
                generateLevel('wertyuio', 'basic'),
                generateLevel('qwertyuiop', 'row')
            ]
        }, {
            name: 'lowrow',
            tests: [
                generateLevel('vm', 'basic'),
                generateLevel('c,', 'basic'),
                generateLevel('x.', 'basic'),
                generateLevel('z/', 'basic'),
                generateLevel('bn', 'basic'),
                generateLevel('vbnm', 'basic'),
                generateLevel('cvbnm,', 'basic'),
                generateLevel('xcvbnm.,', 'basic'),
                generateLevel('zxcvbnm./,', 'row')
            ]
        }, {
            name: 'index',
            tests: [
                generateLevel('rtyufghjvbnm', 'basic')
            ]
        }, {
            name: 'middle',
            tests: [
                generateLevel('edcik,', 'basic')
            ],
        }, {
            name: 'ring',
            tests: [
                generateLevel('wsxol.', 'basic')
            ]
        }, {
            name: 'index',
            tests: [
                generateLevel('qazp;/', 'basic')
            ]
        }],
        numbers: [{
            name: 'index',
            tests: [
                generateLevel('47', 'basic'),
                generateLevel('38', 'basic'),
                generateLevel('29', 'basic'),
                generateLevel('10', 'basic'),
                generateLevel('56', 'basic'),
                generateLevel('4567', 'basic'),
                generateLevel('345678', 'basic'),
                generateLevel('23456789', 'basic'),
                generateLevel('1234567890', 'basic'),
            ]
        }],

        symbols: [{
            name: 'basic',
            tests:[
                generateLevel('`-=', 'basic'),
                generateLevel('[]\'\\', 'basic'),
            ]
        }, {
            name: 'advanced',
            tests: [
                generateLevel('$&', 'basic'),
                generateLevel('#*', 'basic'),
                generateLevel('@(', 'basic'),
                generateLevel('@(', 'basic'),
                generateLevel('!)', 'basic'),
                generateLevel('~_+', 'basic')
            ]
        }]
    };

    return levels;
})()