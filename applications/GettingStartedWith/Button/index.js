$(function(){
    $("#button").dxButton({
        text: "Click me!",
        type: "success",
        stylingMode: "outlined",
        icon: "comment",
        onClick: function() {
            DevExpress.ui.notify("The button was clicked");
        } 
    });
});