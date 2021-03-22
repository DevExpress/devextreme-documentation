To get a UI component instance, save it in a view model property once the UI component is initialized:

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

Alternatively, you can apply techniques from the [jQuery article](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/13%20Get%20a%20UI%20Component%20Instance.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance/').

#####See Also#####
- [Change Options](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/')
- [Call Methods](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/')
- [Handle Events](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')