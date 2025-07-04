$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 60000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    $('.de-marquee-list-2').marquee({
        direction: 'right',
        duration: 60000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});