const fontStyles = [{
    icon: "bold",
    style: "bold"
}, {
    icon: "italic",
    style: "italic"
}, {
    icon: "underline",
    style: "underline"
}, {
    icon: "strike",
    style: "strike"
}];

$(function() {
    $("#myButtonGroup").dxButtonGroup({
        items: fontStyles,
        keyExpr: "style",
        selectionMode: "multiple",
        selectedItemKeys: [ "italic" ],
        onSelectionChanged: function(e) {
            const selectedItemKeys = e.component.option("selectedItemKeys");
            let message;
            if(selectedItemKeys.length > 0) {
                message = "The following styles are selected: " + selectedItemKeys.join(", ");
            } else {
                message = "There are no selected styles"
            }
            console.log(message);
        }
    });
});