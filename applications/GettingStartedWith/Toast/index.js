$(function () {
    const types = ['error', 'info', 'success', 'warning'];

    $("#show-message").dxButton({
        text: "Show message",
        onClick: function() {
            DevExpress.ui.notify(
                {
                    message: "You have a new message", 
                    width: 230,
                    position: {
                        my: "bottom",
                        at: "bottom",
                        of: "#container"
                    }
                }, 
                types[Math.floor(Math.random() * 4)], 
                500
            );
        },
    });

    $("#show-custom-message").dxButton({
        text: "Show custom message",
        onClick: function() {
            DevExpress.ui.notify(
                {
                    width: 230,
                    height: 50,
                    position: {
                        my: "bottom",
                        at: "bottom",
                        of: "#container"
                    },
                    contentTemplate: function () {
                        return $("<p />")
                            .text("You have a new message ")
                            .append('<i class="dx-icon-email"></i>');
                    }
                }, 
                "custom", 
                500
            );
        },
    });

});
