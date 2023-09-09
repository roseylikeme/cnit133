$(function (){
    $('#startAnimationBtn').click(function (){
        console.log('start animation button clicked')
        initialFontSize = $('.main-heading').css('font-size');
        initialColor = $('.main-heading').css('color');
        // Grow the font size
        $('.main-heading').animate({fontSize: "50px"}, "slow", function(){
            // Go back to initial font size
            $(this).animate({fontSize: initialFontSize, color: initialColor }, "slow");
        })
        // Change color
        $('.main-heading').css('color', '#ae4646')
        // Change color back to initial color after waiting 2 seconds
        setTimeout(function (){
            $('.main-heading').css({color: initialColor})
        }, 1200)

        $("#my-image").css("border", "5px solid white");
        $("#my-image").animate({ border: "5px solid white" }, "slow");
    })
})