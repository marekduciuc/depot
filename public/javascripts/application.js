/***
 * Excerpted from "Agile Web Development with Rails, 4rd Ed.",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/rails4 for more book information.
***/
// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$('a[data-remote=true]').livequery('click', function() {
    $.ajax({
      url: this.href,
      dataType: "script"
    });
    return false;
});


$('form[data-remote=true]').livequery('submit', function() {
return request({ url : this.action, type : this.method, data : $(this).serialize() });
});

$(function() {
  $(".alert").click(function() {
    alert(this.getAttribute("data-confirm"));
    return false;
  })
})
