+function () {
    var channel = Channeljs.get('keyboard_event')
    document.body.addEventListener('keyup', function (e) {
        channel.pub('up', [e])
    });
    document.body.addEventListener('keydown', function (e) {
        channel.pub('down', [e])
    });
    document.body.addEventListener('keypress', function (e) {
        channel.pub('press', [e])
    });
}();
