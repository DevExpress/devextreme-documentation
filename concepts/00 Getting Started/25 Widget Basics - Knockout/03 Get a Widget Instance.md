To get a widget instance, save it in a view model property once the widget is initialized:

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

Alternatively, you can apply techniques from the [jQuery article](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/03%20Get%20a%20Widget%20Instance.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_a_Widget_Instance/').

#####See Also#####
- [Change Options](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
- [Call Methods](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/')
- [Handle Events](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')