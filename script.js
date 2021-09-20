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


// smtp js section
function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var number = $('#Number').val();
var message = $('#Message').val();

   
    var Body='Name: '+name+'<br>Email: '+email+'<br>Number: '+number+'<br>Message: '+message;
    

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'official00980@gmail.com',
        From: "theislam00980@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            console.log (message);
            if(message=='OK'){
            alert('Your Message has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}
