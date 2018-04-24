$(document).ready(function(){
    $("img").click(function(){
        if($(this).attr("src") == $(this).attr("ninja"))
            $(this).attr("src", $(this).attr("cat"));
        else
            $(this).attr("src", $(this).attr("ninja")); 
    });
});