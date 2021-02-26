To get a UI component instance, save it in a scope property once the UI component is initialized:

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menuOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

Alternatively, you can apply techniques from the [jQuery article](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/13%20Get%20a%20Widget%20Instance.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance/').

#####See Also#####
- [Change Options](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/')
- [Call Methods](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/')
- [Handle Events](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')