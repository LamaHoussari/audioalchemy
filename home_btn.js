$("#Icon").click(function(){
    window.location.href = "home.html";
})
$(".alchemy").click(function(){
    window.location.href = "home.html";
})
$(".alchemy").hover(
    function(){
    $(this).css({"color":"white", "cursor":"pointer"});
    $("#Icon").css({"filter":"invert(1)","cursor":"pointer"} );

},
function(){
    $(this).css("color", "");
    $("#Icon").css("filter", "");

}
);

$("#Icon").hover(
    function(){
    $(this).css({"filter": "invert(1)","cursor":"pointer"});
    $(".alchemy").css({"color": "white","cursor":"pointer"});

},
function(){
    $(this).css("filter", "");
    $(".alchemy").css("color", "");

}
);