<article data-show="/Demos/TipCalculator/">
Open the [home.js](https://github.com/DevExpress/DevExtreme-14.2-TipCalculator-Knockout/blob/master/views/home.js) file from the **views** folder. It contains a function that returns the 'home' view's ViewModel. This function has the same name ("home") as the view and is called when the view is displayed.

    <!--JavaScript-->TipCalculator.home = function(params) {
        //...
        return {
            billTotal: billTotal,
            tipPercent: tipPercent,
            splitNum: splitNum,

            totalTip: totalTip,
            tipPerPerson: tipPerPerson,
            totalPerPerson: totalPerPerson,
            totalToPay: totalToPay,

            roundUp: roundUp,
            roundDown: roundDown
        };
    };

The ViewModel represents an object whose fields bring values (data) for UI fields.

As you can see in the simulator's screen, there are three values that are specified by the end user. The ViewModel includes variables in which these input values are stored. 
      
- **billTotal**  
  A variable that stores the total sum from a check.
  
- **tipPercent**  
  A variable that stores the percentage value for the tips.
  
- **splitNum**  
  A variable that stores the number of people by which to divide the payment.  
    
<!-- -->
    
    <!--JavaScript-->var billTotal = ko.observable(),
        tipPercent = ko.observable(DEFAULT_TIP_PERCENT),
        splitNum = ko.observable(1);


All these variables are declared as **observables** - Knockout objects that can notify subscribers about changes and can automatically detect dependencies. So, the mentioned variables always store the actual values entered to the UI fields bound to them.

The input variables are used to calculate the output. The ViewModel includes the following variables to store the results.

- **totalTip**  
  The sum of the tips based on the arranged tip percentage.
  
- **totalToPay**  
  The sum of the total by the check and the tips.
  
- **totalPerPerson**  
  Totals for each person that takes part in the payment.
  
- **tipPerPerson**  
  Tips for each person that takes part in the payment.

All these variables are declared as **computed observables** - they depend on one of more observables and will automatically update whenever any of these dependencies change.

The algorithm of calculation of the outputs implies that there are three round modes.

    <!--JavaScript-->var ROUND_UP = 1,
        ROUND_DOWN = -1,
        ROUND_NONE = 0,
        roundMode = ko.observable(ROUND_NONE);

The **totalToPay** computed observable uses the current round mode in its calculation algorithm.

    <!--JavaScript-->var totalToPay = ko.computed(function() {
        var value = totalTip() + billTotalAsNumber();

        switch(roundMode()) {
            case ROUND_DOWN:
                if(Math.floor(value) >= billTotalAsNumber())
                    return Math.floor(value);
                return value;

            case ROUND_UP:
                return Math.ceil(value);

            default:
                return value;
        }
    });
    
The remaining computed observables are implemented in the following way.

    <!--JavaScript-->var totalTip = ko.computed(function() {
    return 0.01 * Math.round(tipPercent() * billTotalAsNumber());
    });

    var tipPerPerson = ko.computed(function() {
    return 0.01 * Math.round(100 * totalTip() / splitNum());
    });

    var totalPerPerson = ko.computed(function() {
    return 0.01 * Math.round(100 * (totalTip() + billTotalAsNumber()) / splitNum());
    });

By default, the **roundMode** variable is set to *ROUND_NONE*. To set this variable to *ROUND_UP* a or *ROUND_DOWN*, the following functions are implemented.

    <!--JavaScript-->function roundUp() {
        roundMode(ROUND_UP);
    }

    function roundDown() {
        roundMode(ROUND_DOWN);
    }

The **roundMode** variable must be set back to the *ROUND_NONE* value when one of the inputs changes so that the outputs are recalculated without rounding the results. To be notified when the values of the **billTotal**, **tipPercent** and **splitNum** observables change, use the **subscribe()** function.

    <!--JavaScript-->billTotal.subscribe(function() {
        roundMode(ROUND_NONE);
    });

    tipPercent.subscribe(function() {
        roundMode(ROUND_NONE);
    });

    splitNum.subscribe(function() {
        roundMode(ROUND_NONE);
    });

</article>