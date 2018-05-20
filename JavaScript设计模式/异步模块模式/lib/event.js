F.module('lib/event',['lib/dom'],function (dom) {
    var event = {
        on:function (id, type, fn) {
            dom.g(id)['on'+type] = fn;
        }
    };
    return event;
});