"use strict";

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 8.9194172, lng: 76.6418569},
        scrollwheel: false,
        zoom: 14
    });
}

function submitForm() {
    $( '#check' ).click( function () {
         $( '.js-script-form' ).submit();
    });
}

function bigSlider() {
    $( '.js-script-slider' ).slick( {
        infinite:true,
        arrows: true,
        //fade: true

    } );

}

function carousel() {
    $( '.js-script-carousel' ).slick( {
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        //adaptiveHeight: true,
        arrows : 'none'
    } );
}

function shad() {
    $( '.js-script-shadow' ).flatshadow( {
        color: "#61e199",
        fade: true,
        angle: "SW",
        boxShadow: "transparent"
    } )
}

$( document ).ready( function () {
   bigSlider();
   shad();
   carousel();
    initMap();
    submitForm();
});

