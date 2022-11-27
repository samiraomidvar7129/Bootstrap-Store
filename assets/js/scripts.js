//  Count Down Timer//


//set the date we are counting down to

var countDownTimer=new Date('Novamber 10, 2023 13:37:25').getTime();

// Update the count down every 1 second
var x=setInterval(function(){

    //get today's date and time
    var now=new Date().getTime();

    //find the distance between now and  the count down date

    var distance = countDownTimer - now;

    //find the calculations for days , hours , minutes and seconds

    // var day=Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes=Math.floor((distance %( 1000 * 60 * 60)) / (1000 * 60));
    var seconds=Math.floor((distance % (1000 * 60)) / 1000);

     //output the result  in an element width id="demo"

//  document.getElementById('demo').innerHTML='<span id="day">' + days + '</span>' +
//  '<span id="minutes">' + minutes + '</span>' + '<span id="hours">' + hours + '</span>'+
//  '<span id="seconds">' + seconds + '</span>';

var z=document.getElementsByClassName("demos");
for(var index = 0; index < z.length ; index++) {
    z[index].innerHTML=
    // '<span id="days">'+
    // day +
    // "</span"+
    '<span id="hours">'+
    hours +
    "</span>"+
    '<span id="minutes">'+
    minutes +
    "</span>"+
    '<span id="seconds">'+ 
    seconds +
    "</span>";

}



 if(distance < 0){
    clearInterval(x);
    // document.getElementById("demo").innerHTML="";
    var y=document.getElementsByClassName("demos");
    for (let index = 0; index < z.length; index++) {
        y[index].innerHTML=""
        
    }



    // document.getElementById("after-expire").setAttribute("id","offer-expire-text");

    var g=document.getElementsByClassName("after-expire");
    for (let index = 0; index < z.length; index++) {
        g[index].classList.add("after-expire-text")
        
    }
    // document.getElementById("offer-expire-text-inner").innerHTML="پیشنهاد ویژه این محصول به پایان رسیده !";
    var d=document.getElementsByClassName("offer-expire-text-inner");
    for (var index = 0; index < z.length; index++) {
        d[index].innerHTML="پیشنهاد ویژه این محصول به پایان رسیده !"
        
    }
    // document.getElementById("offer-expire-text-inner").style.zIndex="999";

    // document.getElementById("offer-blur").style.filter='blur(1px)';
    var t=document.getElementsByClassName("offer-blur");
    for (let index = 0; index < z.length; index++) {
        t[index].style.filter ="blur(1px)";
        
    }

 }
},1000);


// END Count Down Timer//





// owl carousel 2

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            rtl:true,
            items:4,
            nav:true,
            dot:false,
            center:true,
            loop:true,
            touchDrag:true,
            margin:10,
            slidBy:3,
            autoplay:true,
            autoplayTimeout:3000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    center:false
                }

            }

        });
      });


    //   slider-product-offer

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            rtl:true,
            items:2,
            nav:false,
            dot:false,
            center:true,
            loop:true,
            touchDrag:true,
            margin:10,
            slidBy:3,
            autoplay:false,
            autoplayTimeout:3000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    center:false
                },
                1200:{
                    items:4,
                    nav:true
                }

            }

        });
      });

    //   $(".popovers").popover("show");
      $(".popovers").popover({
        trigger:'hover'
      })








