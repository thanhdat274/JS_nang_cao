const Banner = {
    render() {
        return /* html */`
            <div class="max-w-[1440px] mx-auto">
                <div class="w-[1440px] h-auto">
                    <div class="container">
                        <div class="mySlides">
                            <img src="../../../src/image/banner-black-shark-4s-mc.jpg" class="image">
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        // const slideIndex = 1;
        // showSlides(slideIndex);

        // function plusSlides(n) {
        //     showSlides(slideIndex += n);
        // }

        // function currentSlide(n) {
        //     showSlides(slideIndex = n);
        // }

        // function showSlides(n) {
        //     let i;
        //     const slides = document.getElementsByClassName("mySlides");
        //     const dots = document.getElementsByClassName("demo");
        //     if (n > slides.length) {
        //         slideIndex = 1;
        //     }
        //     if (n < 1) {
        //         slideIndex = slides.length;
        //     }
        //     for (i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace("active", "");
        //     }
        //     slides[slideIndex - 1].style.display = "block";
        //     dots[slideIndex - 1].className += "active";
        // }
    },
};
export default Banner;