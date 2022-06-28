The following code adds a refresh button to the toolbar:
    
    <!--JavaScript-->$(function() {
        $("#container").dx{WidgetName}({
            // ...
            onToolbarPreparing: function(e) {
                let dataGrid = e.component;
                e.toolbarOptions.items.unshift({
                    location: "after",
                    widget: "dxButton",
                    options: {
                        icon: "refresh",
                        onClick: function() {
                            dataGrid.refresh();
                        }
                    }
                });
            }
        });
    });

[tags] jquery