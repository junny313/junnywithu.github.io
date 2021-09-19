$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Penetration tester", "WordPress Expert", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Penetration tester", "WordPress Expert", "Freelancer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });


    function sendmail() {

        let name = $('#name').val();
        let email = $('#sender').val();
        let phonenumber = $('#phonenumber').val();
        let message = $('#message').val();
    
        let Body ='Name: '+name+'<br>Email:' +email+'<br>phonenumber: '+phonenumber+'<br>Message: '+message;
    
    }
    
    
    Email.send({
        Host: "smtp.gmail.com",
        Username: "theislam00980@gmail.com",
        Password: "zong4G(html)",
        To: 'official00980@gmail.com',
        From: "theislam00980@gmail.com",
        Subject: "New mail on junnywithu site From: "+name,
        Body : Body
    }).then(
        message =>{
            if(message=='Ok'){
                alert("Your message has been send.Thank you for connecting.");
            }
            else{
                console.error(message);
                alert("There is error at sending message.Please try again later.");
            }
        }
    );

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
