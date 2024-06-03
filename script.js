$(document).ready(() => {
    const $contactButton = $('#contactButton');
    const $popupForm = $('#popupForm');
    const $closeBtn = $('#closeBtn');
    const $inputGroups = $(".input-group div");

    $contactButton.on('click', (e) => {
        e.preventDefault();
        $popupForm.css('display', 'flex');
    });

    $closeBtn.on('click', () => {
        $popupForm.css('display', 'none');
    });

    $inputGroups.each(function() {
        $(this).on('click', function() {
            const $input = $(this).find("input");
            $input.css('height', '25px');
        });
    });
});

$(document).ready(() => {
    const $slides = $('.static-slide');
    const $dots = $('.dot');
    const $innerCircle = $('.circle');

    $slides.each(function(index) {
        $(this).on('mouseover', function() {
            $dots.removeClass('active');
            $dots.eq(index).addClass('active');
            $innerCircle.removeClass('circle-active');
            $innerCircle.eq(index).addClass('circle-active');
            $(this).removeClass('decreseWidth').addClass('increaseWidth');
        });

        $(this).on('mouseout', function() {
            $innerCircle.eq(index).removeClass('circle-active');
            $dots.eq(index).removeClass('active');
            $(this).removeClass('increaseWidth').addClass('decreseWidth');
        });
    });
});

$(document).ready(() => {
    const $projectItems = $('.project-item');
    const $projectImage = $('#project-image');

    $projectItems.on('click', function() {
        $projectItems.removeClass('active');
        $(this).addClass('active');
        const newImage = $(this).attr('data-image');
        $projectImage.attr('src', newImage);
    });
});
