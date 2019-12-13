You can subscribe to an event using a configuration option. All event handling options are given names that begin with *on*.

    <!--JavaScript-->
    var viewModel = {
        menuInstance: {},
        menuOptions: {
            // ...
            onItemClick: function (info) {
                // Handles the "itemClick" event
            },
            onInitialized: function (info) {
                // Saves the widget instance
                viewModel.menuInstance = info.component;    
                // Handles the "initialized" event
            }
        }
    };

    ko.applyBindings(viewModel);

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/Knockout/Light/"
}

#####See Also#####
- **API Reference**.**WidgetName**.**Events**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/').[Events](/api-reference/10%20UI%20Widgets/dxMenu/4%20Events '/Documentation/ApiReference/UI_Widgets/dxMenu/Events/')

[tags]basics, knockout, handle events, subscribe