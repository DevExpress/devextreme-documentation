<article data-show="/Demos/TipCalculatorAngular/">
Open the *app.js* file in the **js** folder. It contains a declaration of the application's module. This module has the following dependencies.

- **'ngRoute'**
Used for deep-linking URLs to controllers and views (HTML partials).

- **'tipCalculator.controllers'**
The internal module that provides a controller for the application's view.

- **'dx'**
The module that includes registered directives for all DevExtreme widgets.

<!---->

    <!--JavaScript-->angular.module('tipCalculator', ['ngRoute','tipCalculator.controllers', 'dx']).
      config(['$routeProvider', function ($routeProvider) {
          $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'HomeCtrl' });
          $routeProvider.otherwise({ redirectTo: '/home' });
      }]);

As you can see in the code above, routing is set up so that the application includes a single view called "home". A controller for this view is called "HomeCtrl".

</article>