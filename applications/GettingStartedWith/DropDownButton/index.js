$(function() {
    var actions = [
        { id: 1, text: "My profile", icon: "user" },
        { id: 2, text: "Messages", icon: "email" },
        { id: 3, text: "Contacts", icon: "group" },
        { id: 4, text: "Log out", icon: "runner" }
    ];

    $("#myDropDownButton").dxDropDownButton({
        text: "Sandra Johnson",
        icon: "user",
        items: actions,
        
        displayExpr: "text",
        onItemClick: function(e) {
            console.log(e.itemData.text + " was clicked");
        },
        splitButton: true,
        onButtonClick: function() {
            console.log("Main button was clicked");
        }
    });
});