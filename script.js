document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.getElementById('closeBtn');
    const inputEle = document.querySelectorAll(".input-group div");
    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        popupForm.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    inputEle.forEach((element)=>{
        element.addEventListener('click',(ele)=>{
            let inTag = element.getElementsByTagName("input");
            // console.log(inTag);
            inTag[0].style.height = "25px";
        });
    })


});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.static-slide');
    const dots = document.querySelectorAll('.dot');
    const innerCircle = document.querySelectorAll('.circle');

    slides.forEach((slide, index) => {
        slide.addEventListener('mouseover', () => {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            innerCircle.forEach(ele => ele.classList.remove('circle-active'));
            innerCircle[index].classList.add('circle-active');
            slide.classList.remove('decreseWidth');
            slide.classList.add('increaseWidth');
        });

        slide.addEventListener('mouseout', () => {
            innerCircle[index].classList.remove('circle-active');
            dots[index].classList.remove('active');
            slide.classList.remove('increaseWidth');
            slide.classList.add('decreseWidth');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const projectImage = document.getElementById('project-image');

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            projectItems.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            item.classList.add('active');
            // Change the image
            const newImage = item.getAttribute('data-image');
            projectImage.setAttribute('src', newImage);
        });
    });
});
