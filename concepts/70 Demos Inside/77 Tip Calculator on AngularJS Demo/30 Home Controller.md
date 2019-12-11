<article data-show="/Demos/TipCalculatorAngular/">
Open the *controllers.js* file from the **js** folder. It contains the "HomeCtrl" controller for the application's "home" view. The controller's scope is an object whose fields bring values (data) for UI fields.


    <!--JavaScript-->angular.module('tipCalculator.controllers', []).
        controller('HomeCtrl', ["$scope", function($scope) {
            //...

            $scope.vm = {
                roundMode: ROUND_NONE,
                billTotal: undefined,
                tipPercent: DEFAULT_TIP_PERCENT,
                splitNum: 1,

                totalTip: totalTip,
                totalToPay: totalToPay,
                tipPerPerson: tipPerPerson,
                totalPerPerson: totalPerPerson,

                roundUp: roundUp,
                roundDown: roundDown
            };
            //...
        }]);

As you can see on the simulator's screen, there are three values that are specified by the end user. The scope object includes fields to store these input values. All these fields are initially set to default values.
      
- **billTotal**  
  A field that stores the total sum from a check.
  
- **tipPercent**  
  A field that stores the percentage value for the tips.
  
- **splitNum**  
  A field that stores the number of people to divide the payment by.  

The input values are used to calculate the output. The scope object includes the following fields to store the results.

- **totalTip**  
  The sum of the tips based on the arranged tip percentage.
  
- **totalToPay**  
  The sum of the total by the check and the tips.
  
- **totalPerPerson**  
  Totals for each person who takes part in the payment.
  
- **tipPerPerson**  
  Tips for each person who takes part in the payment.

All these fields are functions that define a business logic.

The output calculation algorithm implies that there are three round modes.

    <!--JavaScript-->var ROUND_UP = 1,
        ROUND_DOWN = -1,
        ROUND_NONE = 0;

The **totalToPay** function uses the current round mode in its calculation algorithm.

    <!--JavaScript-->function totalToPay() {
        var value = totalTip() + billTotalAsNumber();

        switch($scope.vm.roundMode) {
            case ROUND_DOWN:
                if(Math.floor(value) >= billTotalAsNumber())
                    return Math.floor(value);
                return value;

            case ROUND_UP:
                return Math.ceil(value);

            default:
                return value;
        }
    }
    
The remaining functions are implemented in the following way.

    <!--JavaScript-->function totalTip() {
    return 0.01 * Math.round($scope.vm.tipPercent * billTotalAsNumber());
    }

    function tipPerPerson() {
    return 0.01 * Math.round(100 * totalTip() / $scope.vm.splitNum);
    }

    function totalPerPerson() {
    return 0.01 * Math.round(100 * (totalTip() + billTotalAsNumber()) / $scope.vm.splitNum);
    }

By default, the **roundMode** field is set to *ROUND_NONE*. To set this field to *ROUND_UP* or *ROUND_DOWN*, the following functions are implemented.

    <!--JavaScript-->function roundUp() {
        $scope.vm.roundMode = ROUND_UP;
    }

    function roundDown() {
        $scope.vm.roundMode = ROUND_DOWN;
    }

The **roundMode** field must be set back to the *ROUND_NONE* value when one of the inputs changes, so that the outputs are recalculated without rounding the results. To be notified of changes to the values of the **billTotal**, **tipPercent** and **splitNum** fields, the [$scope.$watch()](https://docs.angularjs.org/api/ng.$rootScope.Scope#$watch) function is used.

    <!--JavaScript-->$scope.$watch('vm.billTotal', resetRoundMode);
    $scope.$watch('vm.tipPercent', resetRoundMode);
    $scope.$watch('vm.splitNum', resetRoundMode);

    function resetRoundMode(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        $scope.vm.roundMode = ROUND_NONE;
    };

To focus the **Bill Total** field when the view is shown, handle the scope's [$routeChangeSuccess](https://docs.angularjs.org/api/ngRoute.$route#$routeChangeSuccess) event.

    <!--JavaScript-->$scope.$on('$routeChangeSuccess', function() {
        $('#billTotalInput').data('dxNumberBox').focus();
    });

To apply the widget styles that correspond to the platform on which the application is currently running, use the **DevExpress.ui.themes.current** method. When used without parameters, this method returns an object defining the current device. This information is used to assign the corresponding theme to widgets. For this purpose, the **DevExpress.ui.themes.current** method is called for the second time passing the required theme as a parameter.

    <!--JavaScript-->$scope.$on('$viewContentLoaded', function () {
        var theme,
            device = DevExpress.devices.current();
        switch (device.platform) {
            case "android":
                theme = "android5.light";
                break;
            case "ios":
                theme = "ios7.default";
                break;
            case "win":
                theme = "win10.black";
                $("body").css("background-color", "#000");
                break;
            default:
                theme = "generic.light";
                break;
        }

        DevExpress.ui.themes.current(theme);
    });  
</article>