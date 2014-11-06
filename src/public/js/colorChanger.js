'use strict';

define('colorChanger', ['lib/jquery-2.1.1.min'], function() {
    if (typeof $ === 'undefined')
    {
        throw new Error('No JQuery found');
    }

    function pollColor(backgroundEl) {
        setInterval(function() {
            $.get('/get',function(data) {
                backgroundEl.css({'background-color': data});
            });
        },500);
    }

    function sendClick(channel, sign, increment, backgroundEl) {
        var inc = sign + increment;
        $.get('/change', {channel: channel, increment: inc}, function(data) {
            backgroundEl.css({'background-color': data});
        });
    }


    function ColorChanger(bgEl, incEl, btnEls, pollClrFnc, clickCB)
    {
        this.backgroundEl = bgEl;
        this.incrementEl = incEl;
        this.buttonEls = btnEls;
        this.pollColorFunc = pollClrFnc ? pollClrFnc : pollColor;
        this.clickFunc = clickCB ? clickCB : sendClick;
    }

    ColorChanger.prototype.init = function()
    {
        var $incEl = this.incrementEl,
            $bgEl = this.backgroundEl;
        this.pollColorFunc($bgEl);
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
});

