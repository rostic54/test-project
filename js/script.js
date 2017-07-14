"use strict";

function bigSlider() {
    $( '.js-script-slider' ).slick( {
        infinite:true,
        arrows: true

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
});