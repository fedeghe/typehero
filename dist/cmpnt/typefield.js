var p = {
    method_getLetters: function () {
        var self = this,
            letters = Levels.basic[self.root.data.level].tests[0].tests[0].split(''),
            nodeLetters = letters.map(function (letter) {
                return { tag: 'span', html: letter, attrs: { class: 'letter' } }
            });
        return nodeLetters;
    },
    cb: function () {
        var level = Levels.basic[this.root.data.level].tests[0].tests[0];
        // console.log(this.root)
        // console.log(level)
        // this.method_paint(level)
        this.done();
    },
    content: function (){
        return this.getLetters();
    }
}
