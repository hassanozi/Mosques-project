let Offset =$('#home').offset().top;
console.log(Offset);

$(window).scroll(function() {

    let wScroll = $(window).scrollTop();
    if(wScroll >= Offset -100){
        $('#navBar').css('backgroundColor','red');
        $('#arrow').fadeIn(500);
    }
    else
    {
        $('#navBar').css('backgroundColor','white');
        $('#arrow').fadeOut(500);
    }
    console.log(wScroll);

})