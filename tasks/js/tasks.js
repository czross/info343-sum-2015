"use strict";

/*
    tasks.js
    Script for the index.html page
    This code will use Parse.com's JavaScript library to create new tasks, save them, query them
    mark them as done, and purge done tasks
 */

//use jQuery to register a function that is called when the document is ready for manipulation
$(function() {
   var currentUser = Parse.User.current();
    if(!currentUser) {
        window.location = 'signin.html'
    }
    $('.nav-link-sign-out').click(function(evt) {
        evt.preventDefault();
        Parse.User.logOut();
        window.location = 'signin.html';
    })

    $('.user-name').text(currentUser.get('firstName') + ' ' + currentUser.get('lastName'));

    var Task = Parse.Object.extend('Task');

    var tasksQuery = new Parse.Query(Task);
    tasksQuery.equalTo('user', currentUser);
    tasksQuery.ascending('done, createdAt');

    var TaskList = Parse.Collection.extend({
       model: Task,
       query: tasksQuery
    });

    var tasks = new TaskList();

    tasks.fetch();
});