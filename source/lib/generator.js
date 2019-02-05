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
    function generateLevel(domains, test) {
        var set = '',
            i;
        if (domains.left)
            for( i in domains.left) {
                set += domains.left[i]
            }
        if (domains.right)
            for (i in domains.right) {
                set += domains.right[i]
            }
        return {
            set: set,
            domains: domains,
            tests: generateTests(test, set)
        };
    }

    var levels = {
        letters: [
            generateLevel({
                left: { index: 'f' },
                right: { index: 'j' }
            }, 'basic'),
            generateLevel({
                left: { middle: 'd' },
                right: { middle: 'k' }
            }, 'basic'),
            generateLevel({
                left: { ring: 's' },
                right: { ring: 'l' }
            }, 'basic'),
            generateLevel({
                left: { pinky: 'a' },
                right: { pinky: ';' }
            }, 'basic'),
            generateLevel({
                left: { index: 'g' },
                right: { index: 'h' }
            }, 'basic'),
            generateLevel({
                left: { index: 'fg', middle: 'd'},
                right: { index: 'hj', middle: 'k'}
            }, 'basic'),
            generateLevel({
                left: { index: 'fg', middle: 'd', ring: 's' },
                right: { index: 'hj', middle: 'k', ring: 'l' }
            }, 'basic'),
            generateLevel({
                left: { index: 'fg', middle:'d', ring: 's', pinky: 'a' },
                right: { index: 'hj', middle: 'k', ring: 'l', pinky: ';' }
            }, 'row')
        ]
    };


    return levels;
})()