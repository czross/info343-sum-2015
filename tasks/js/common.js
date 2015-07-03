"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('eGWCJfJD19HGj1Nm7s2Qbz0y0Z39mMc7lrJY4bbY', '031UBDUDabVmxUuQPk13yCAWgI7Xt6PfuHAHizqZ');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
