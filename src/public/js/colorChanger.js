(function() {
    'use strict';

    if (typeof $ === 'undefined')
    {
        throw new Error('No JQuery found');
    }

    function ColorChanger(bgEl, incEl, btnEls, initClrFnc, clickCB)
    {
        this.backgroundEl = bgEl;
        this.incrementEl = incEl;
        this.buttonEls = btnEls;
        this.initColorFunc = initClrFnc;
        this.clickFunc = clickCB;
    }

    ColorChanger.prototype.init = function()
    {
        var $incEl = this.incrementEl,
            $bgEl = this.backgroundEl;
        this.initColorFunc($bgEl);
        var clickFnc = this.clickFunc;
        this.buttonEls.click(function() {
            clickFnc(parseInt($(this).data('colorchannel'),10),$(this).data('sign'), $incEl.val(), $bgEl);
        });
    };

    if (typeof module !== 'undefined') {
        module.exports = ColorChanger;
    } else if (typeof window !== 'undefined') {
        window.ColorChanger = ColorChanger;
    }

})();

function initColor(backgroundEl) {
    $.get('/get',function(data) {
        backgroundEl.css({'background-color': data});
    });
}

function sendClick(channel, sign, increment,backgroundEl) {
    var inc =sign + increment;
    $.get('/change', {channel: channel, increment: inc}, function(data) {
        backgroundEl.css({'background-color': data});
    });
}