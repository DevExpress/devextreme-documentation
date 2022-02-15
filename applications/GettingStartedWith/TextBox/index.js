$(function() {
    $('#textbox').dxTextBox({
        mode: "url",
        label: "Link",
        labelMode: "floating",
        maxLength: 20,
        showClearButton: true,
        onEnterKey: function(e) {
            console.log(e.component.option("value"));
        }
    });
});