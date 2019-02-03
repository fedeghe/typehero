+function () {
    document.body.addEventListener('keyup', function (e) {
        console.log('up')
        console.log(e)
    });
    document.body.addEventListener('keydown', function (e) {
        console.log('down')
        console.log(e)
    });
    document.body.addEventListener('keypress', function (e) {
        console.log('press')
        console.log(e)
    });
}();
