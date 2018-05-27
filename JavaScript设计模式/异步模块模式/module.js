~(function (F) {
    var moduleCache = {},
        getUrl = function (moduleName) {
            return String(moduleName).replace(/\.js$/g,'')+'.js';
        },
        loadScript = function (src) {
            var _script = document.createElement('script');
            _script.type = 'text/JavaScript',
            _script.charset = 'UTF-8',
            _script.async = true;
            _script.src = src,
            document.getElementsByTagName('head')[0].appendChild(_script);
        }
        setModule = function (moduleName,params,callback) {
            var _module,fn;
            if (moduleCache[moduleName]) {
                _module = moduleCache[moduleName];
                _module.status = 'loaded',
                _module.exports = callback?callback.apply(_module,params):null;
                while(fn = _module.onload.shift()){
                    fn(_module.exports);
                }
            } else {
                callback && callback.apply(null,params);
            }
        },
        loadModule = function (moduleName,callback) {
            var _module;
            if (moduleCache[moduleName]) {
                _module = moduleCache[moduleName];
                if (_module.status === 'loaded') {
                    setTimeout(callback(_module.exports),0);
                } else {
                    _module.onload.push(callback);
                }
            } else {
                moduleCache[moduleName] = {
                    moduleName:moduleName,
                    status:'loading',
                    exports:null,
                    onload:[callback]
                };
                loadScript(getUrl(moduleName));
            }
        };
        F.module = function (url, modDeps, modCallback) {
        //降参数转化成数组
        var args = [].slice.call(arguments),
            //回调函数,最后一个参数,
            callback = args.pop(),
            //依赖模块（紧邻回调函数参数，切数据类型为数组）
            deps = (args.length && args[args.length -1] instanceof Array) ? args.pop() : [],
            //该模块url(模块ID)
            url = args.length ? args.pop() : null,
            //依赖模块序列
            params = [],
            //未加载的依赖模块数量统计
            depsCount = 0,
            //依赖模块序列中索引值
            i = 0,
            //依赖模块序列长度
            len;
        
        if (len = deps.length) {
            while (i < len) {
                (function (i) {
                    depsCount++;
                    loadModule(deps[i],function (mod) {
                        params[i] = mod;
                        depsCount --;
                        if (depsCount === 0) {
                            setModule(url,params,callback);
                        }
                    });
                })(i);
                i++;
            }
        } else {
            setModule(url,[],callback);
        }

    }
})((function () {
    return window.F = {};
})());