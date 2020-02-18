$(document).ready(function() {
    $.getJSON("pics.json", function(data) {
        $.each(data, function(key, val) {
            $.each(val, function(index, value) {
                $("#container").append("<img src=\"" + value.url + "\"/>");
            });
        });
    });

});