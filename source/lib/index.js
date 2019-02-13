(function () {
    $$dependencies.js$$
    $$keyMediator.js$$
    $$levels.js$$

    $$ui.js$$

    var channel = Channeljs.get('keyboard_event');
    channel.sub('down', function(e) {
        console.log(e);
    });

    console.debug(Levels)
})();
