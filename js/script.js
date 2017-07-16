"use strict";

function initMap() {

    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 8.9194172, lng: 76.6418569},
        scrollwheel: false,
        zoom: 14
    });
}

function submitForm() {
    $('#check').click(function () {
        $('.js-script-form').submit();
    });
}

function bigSlider() {
    $('.js-script-slider').slick({
        infinite: true,
        arrows: true
        //fade: true

    });

}

function carousel() {
    $('.js-script-carousel').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        arrows: 'none'
    });
}

function shad() {
    $('.js-script-shadow').flatshadow({
        color: "#61e199",
        fade: true,
        angle: "SW",
        boxShadow: "transparent"
    })
}

function validForm() {
    let form = $('form');
    for (let i = 0; i < form.length; i++) {
        $(form[i]).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                email:{
                    required: true,
                    email: true
                },
                zip: {
                    required: true,
                    number: true
                }
            },
            focusCleanup: true,
            focusInvalid: false,
            onfocusout: false,
            massages: false,
            errorPlacement: function (error, element) {

                let id = element.parent().attr( 'id' );

                if( id === 'circle' ) {
                    $('.js-script-errorBlock').text('NOT CORRECT');
                    element.parent().css('margin-top', '0px');
                }else{
                    $( '.js-script-invalid' ).removeClass( "is-hidden" );
                    $( '.js-script-valid' ).addClass( 'is-hidden' );

                }
            },
            onkeyup: function (element, event) {
                //let target = element.attr( 'class' );

                if( $( element ).hasClass( 'js-script-active' ) ) {
                    $(".js-script-errorBlock").text('');
                    $( element ).parent().css('margin-top', '');
                }else{
                    $( '.js-script-valid' ).removeClass( "is-hidden" );
                    $( '.js-script-invalid' ).addClass( 'is-hidden' );
                }

            }


        });
    }
}

$(document).ready(function () {
    bigSlider();
    shad();
    carousel();
    initMap();
    submitForm();
    validForm();
});

