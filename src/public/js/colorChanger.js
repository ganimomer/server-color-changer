if (typeof $ === 'undefined')
{
    throw new Error('No JQuery found');
}

function initColor(backgroundEl) {
    $.get('/get',function(data) {
       backgroundEl.css({'background-color': data});
    });
}

function sendClick(btnEl,incrementEl,backgroundEl) {
    var channel = ["red","green","blue"].reduce(function(prevVal,currItem,index) {
        if (prevVal != -1)
        {
            return prevVal;
        }
        else
        {
            if (btnEl.className.indexOf(currItem) >= 0)
            {
                return index;
            }
            else
            {
                return -1;
            }
        }
    },-1);
    var increment = (btnEl.className.indexOf("minus") >= 0) ? -incrementEl.val() : incrementEl.val();
    $.get('/change', {channel: channel, increment: increment}, function(data) {
        backgroundEl.css({'background-color': data});
    });
}

function init()
{
    var $incBox = $('#increment'),
        $colBox = $('#colorbox');
    initColor($colBox);
    $('.btn').click(function() {
        sendClick(this,$incBox,$colBox);
    });
}