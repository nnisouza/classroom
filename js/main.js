$(window).load(function() {
    $('body').fadeIn('slow', function() {
        $('.holder').removeClass('hidden');
        $('.holder.leftH').addClass('animated fadeInLeft');
        $('.holder.rightH').addClass('animated fadeInRight');
    });
});
