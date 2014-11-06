'use strict';
define(['colorChanger', 'jquery'], function (colorChanger, $) {

    describe('colorChanger.js', function () {

        var $bgEl = $('body');
        $bgEl.append('<input type="number" value="10"/>');
        var $incEl = $('input');
        $bgEl.append('<button data-sign="-" data-colorchannel= "0"></button>');
        var $btnEl = $('button');
        var someChanger = new ColorChanger($bgEl, $incEl, $btnEl, mockInit, mockClick);

        var initCalled = false,
            handlerCalled = false;
        var theChannel, theSign, theIncrement, theBg;

        function mockInit(bgEl) {
            initCalled = true;
        }

        function mockClick(channel, sign, increment, backgroundEl) {
            handlerCalled = true;
            theChannel = channel;
            theSign = sign;
            theIncrement = increment;
            theBg = backgroundEl;
        }


        it('should be defined', function () {
            expect(someChanger).toBeDefined();
        });

        it('should call the color init', function () {
            someChanger.init();
            expect(initCalled).toBe(true);
        });


        it('should respond to click', function () {

            $btnEl.trigger('click');

            expect(handlerCalled).toBe(true);
            expect(theChannel).toBe(0);
            expect(theSign).toBe('-');
            expect(theIncrement).toBe('10');
            expect(theBg).toBeTruthy();
        })

    });
});