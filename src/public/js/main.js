'use strict';

requirejs.config({
    paths: {
        jquery: './lib/jquery-2.1.1.min'
    }
});

/*eslint-disable no-undef*/
requirejs(['colorChanger', 'jquery'], function(colorChanger, $) {
    var clrChanger = new ColorChanger($('body'), $('#increment'), $('.btn'));
    clrChanger.init();
});

/*eslint-enable no-undef*/