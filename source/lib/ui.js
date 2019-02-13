Engy.configSet({
    componentsUrl: 'cmpnt'
})

var app = Engy.render({
    data: {
        level : 0
    },
    content: [{
        attrs: {
            class: 'panel'
        },
        content: [{
            component: 'panel',
            params: {
                name : 'Federico'
            },

        }, {
            component: 'typefield'
        }]
    }, {

    }]
});