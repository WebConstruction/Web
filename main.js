$(document).ready(function() {

    $("#jsstyle").click(function() {
        $("#container").empty();
        $.getJSON("pics.json", function(data) {
            $.each(data, function(key, val) {
                if(key === "pics") {
                    $.each(val, function(index, value) {
                        $("#img-container").append("<img src=\"" + value.url + "\"/>");
                    });
                }
            });
        });
    });

    $("#pdf-btn").click(function() {
        $("#container").empty();
        $.getJSON("pics.json", function(data) {
            $.each(data, function(key, val) {
                if(key === "pdfs") {
                    $.each(val, function(index, value) {
                        $("#pdf-container").append("<a href=\"" + value.url + "\">PDF " + (index+1) + "</a>");
                    });
                }
            });
        });
    });
    

});