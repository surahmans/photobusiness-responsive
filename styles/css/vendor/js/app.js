var imgSource;
$('.header--thumbnails img').mouseenter(function() {
    imgSource = $('header > div > img').attr('src');
    $('header > div > img').attr('src', $(this).attr('src').replace('_s.','.'));
}).mouseleave(function() {
    $('header > div > img').attr('src', imgSource);
});

$('#zoom_1').elevateZoom({
    gallery:'gal1',
    zoomType: "inner",
    responsive: true,
    cursor: "crosshair",
    galleryActiveClass: 'active',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750,
    loadingIcon: 'images/spinner.gif'
});

$("#zoom_1").bind("click", function(e) {
    var ez = $('#zoom_1').data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
});

$(window).bind('resize', function(e)
{
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
        this.location.reload(false); /* false to get page from cache */
    }, 200);
});