$(window).on('resize', function() {
    if($(window).height() > 500) {
        $('#border').addClass('border-right');
    }else{
        $('#border').removeClass('border-right');
    }
})
