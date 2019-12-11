To call a method, you need to obtain the widget instance first. You can use jQuery to do this.

    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");

As an alternative, you can save the widget instance in a view model property once the widget is initialized.

    <!--JavaScript-->var viewModel = {
        menuInstance: {},
        menuOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.menuInstance = e.component;    
            }
        }
	};

	ko.applyBindings(viewModel);

After that, you can call any method of the saved instance.

    <!--JavaScript-->viewModel.menuInstance.repaint();

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Methods** - describes all methods of a specific DevExtreme widget.