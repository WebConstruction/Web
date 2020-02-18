$(document).ready(function() {

    $("#jsstyle").click(function() {
        $("#container").empty();
        $.getJSON("pics.json", function(data) {
            $.each(data, function(key, val) {
                if(key === "pics") {
                    $.each(val, function(index, value) {
                        $("#container").append("<img src=\"" + value.url + "\"/>");
                    });
                }
                else {
                    $.each(val, function(index, value) {
                        $("#container").append("<a href=\"" + value.url + "\">PDF " + (index+1) + "</a>");
                    });
                }
            });
        });
    });
    

});