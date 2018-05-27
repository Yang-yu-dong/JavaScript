$(function () {
    var MVC = {};
    MVC.model = function () {
        var M = {};

        M.data = {
            sliderBar:[
                {
                    title:'title',
                    content:'content'
                },
                {
                    title:'title',
                    content:'content'
                },
                {
                    title:'title',
                    content:'content'
                },
                {
                    title:'title',
                    content:'content'
                },
                {
                    title:'title',
                    content:'content'
                }
            ]
        };
        M.conf = {
            sliderBarCloseAnimate:false
        };
        return {
            getData:function (m) {
                return M.data[m];
            },
            getConf:function (c) {
                return M.conf[c]
            },
            setData:function (m, v) {
                M.data[m] = v;
                return this;
            },
            setConf:function (c, v) {
                M.data[c] = v;
                return this;
            }
        }


    } ();

    MVC.view = function () {
        var M = MVC.model;
        var V = {
            createSlideBar:function () {
                var html = '',
                data = M.getData('slideBar');
                if (!data || !data.length) {
                    return;
                }

                var dome = 
            }


        };
        return function (v) {
            V[v]();
        }
    } ();


    MVC.ctrl = function () {
        var M = MVC.model;
        var V = MVC.view;
        var C = {};
    } ();

});