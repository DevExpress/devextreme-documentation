$(function() {
    DevExpress.config({
        floatingActionButtonConfig: {
            icon: "share",
            position: {
                my: "right bottom",
                at: "right bottom",
                of: "#app-container",
                offset: "-16 -16"
            }
        }
    });

    var editAction = $("#action-edit").dxSpeedDialAction({
        hint: "Edit",
        icon: "edit",
        onClick: function() {
            showNotification("Edit is clicked")
        }
    }).dxSpeedDialAction("instance");

    var copyAction = $("#action-copy").dxSpeedDialAction({
        hint: "Copy to clipboard",
        icon: "copy",
        visible: false,
        onClick: function() {
            showNotification("Copied to clipboard")
        }
    }).dxSpeedDialAction("instance");

    var mailAction = $("#action-mail").dxSpeedDialAction({
        hint: "Send by email",
        icon: "email",
        visible: false,
        onClick: function() {
            showNotification("Sent by email")
        }
    }).dxSpeedDialAction("instance");

    var facebookAction = $("#action-social").dxSpeedDialAction({
        hint: "Share on Social Media",
        icon: "link",
        visible: false,
        onClick: function() {
            showNotification("Shared on Social Media")
        }
    }).dxSpeedDialAction("instance");

    $("#tab-panel").dxTabPanel({
        items: [{
            title: "Edit Tab",
            template: function() {
                return "<p>Edit tab's content</p>";
            }
        }, {
            title: "Share Tab",
            template: function() {
                return "<p>Share tab's content</p>";
            }
        }],
        onSelectionChanged: function(e) {
            switchSDAs(e.addedItems[0].title);
        }
    });

    function switchSDAs(tabTitle) {
        if (tabTitle === "Edit Tab") {
            editAction.option("visible", true);
            copyAction.option("visible", false);
            mailAction.option("visible", false);
            facebookAction.option("visible", false);
        }
        if (tabTitle === "Share Tab") {
            editAction.option("visible", false);
            copyAction.option("visible", true);
            mailAction.option("visible", true);
            facebookAction.option("visible", true);
        }
    }

    var showNotification = function(message) {
        DevExpress.ui.notify({
            message: message,
            position: {
                my: "left bottom",
                at: "left bottom",
                of: "#app-container",
                offset: "16 -16"
            },
            minWidth: null,
            width: function() {
                return $("#app-container").width() * 0.7;
            }
        }, "info", 1000);
    }
});