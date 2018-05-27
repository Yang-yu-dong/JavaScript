F.module('lib/template',function () {
     //模板引擎 处理数据与编译模板入口

     var _TplEngine = function (str,data) {
         if (data instanceof Array) {
             var html = '',
                 i = 0,
                 len = data.length
             for (;i<len;i++) {
                 html +=_getTpl(str)(data[i]);
             }
         } else {
             return _getTpl(str)(data);
         }
     }
     var _getTpl = function (str) {
         
     }
     var _dealTpl = function () {}
     var _compileTpl = function () {}
     return _TplEnginel;

});