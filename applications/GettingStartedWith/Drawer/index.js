$(function() {
    var drawer = $("#drawer").dxDrawer({
        minSize: 37,
        revealMode: "expand",
        height: 200,
        template: function(e) {
            var $list = $("<div/>").dxList({
                dataSource: [
                    { id: 1, text: "Inbox", icon: "message" },
                    { id: 2, text: "Sent Mail", icon: "check"},
                    { id: 3, text: "Trash", icon: "trash" },
                    { id: 4, text: "Spam", icon: "mention"}
                ],
                width: 200,
                onItemClick: function(e) {
                    $("#content" ).html(e.itemData.text);
                }
            });
            return $list;
        },
        openedStateMode: "overlap"
    }).dxDrawer("instance");

    $("#button").dxButton({
        icon: "menu",
        onClick: function() { drawer.toggle(); }
    });
});