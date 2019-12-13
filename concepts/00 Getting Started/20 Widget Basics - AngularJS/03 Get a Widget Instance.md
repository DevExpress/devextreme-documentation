To get a widget instance, save it in a scope property once the widget is initialized:

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menuOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

Alternatively, you can apply techniques from the [jQuery article](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/03%20Get%20a%20Widget%20Instance.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_a_Widget_Instance/').

#####See Also#####
- [Change Options](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/')
- [Call Methods](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/')
- [Handle Events](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')