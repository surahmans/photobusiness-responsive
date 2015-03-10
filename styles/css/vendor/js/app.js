var imgSource;
$('.header--thumbnails img').mouseenter(function() {
    imgSource = $('header > div > img').attr('src');
    $('header > div > img').attr('src', $(this).attr('src').replace('_s.','.'));
}).mouseleave(function() {
    $('header > div > img').attr('src', imgSource);
});