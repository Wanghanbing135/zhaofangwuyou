$(function(){
    touch.on($('#a'),'tap',function(){
        $('.box').show();
        $('.chuxian').css('display','flex');
        $('.top').css('display','flex');
        $('#one').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.one').css('display','flex').siblings().hide();
    })
    touch.on($('#b'),'tap',function(){
        $('.box').show();
        $('.chuxian').css('display','flex');
        $('.top').css('display','flex');
        $('#two').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.two').css('display','flex').siblings().hide();
    })
    touch.on($('#c'),'tap',function(){
        $('.box').show();
        $('.chuxian').css('display','flex');
        $('.top').css('display','flex');
        $('#three').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.three').css('display','flex').siblings().hide();
    })
    touch.on($('#d'),'tap',function(){
        $('.box').show();
        $('.chuxian').css('display','flex');
        $('.top').css('display','flex');
        $('#four').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.four').css('display','flex').siblings().hide();
    })
    touch.on($('#one'),'tap',function(){
        $('#one').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.one').css('display','flex').siblings().hide();

    })
    touch.on($('#two'),'tap',function(){
        $('#two').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.two').css('display','flex').siblings().hide();
    })
    touch.on($('#three'),'tap',function(){
        $('#three').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.three').css('display','flex').siblings().hide();
    })
    touch.on($('#four'),'tap',function(){
        $('#four').addClass('buyiyang').siblings().removeClass('buyiyang');
        $('.four').css('display','flex').siblings().hide();
    })
    touch.on($('.box'),'tap',function(){
        $(this).hide();
        $('.chuxian').hide();
    })
})