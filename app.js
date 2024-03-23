$('.navItem').css("color", "white")
$('#nav').css("background-color", "#145")
$('li:contains("even")').css("background-color", "#ccc")
$('li:contains("odd")').css("background-color", "#aaa")
$(':input').each(function() {
    let elem = $(this);
    alert(elem.val('Jack'));
});