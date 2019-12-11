<article data-show="/Demos/TipCalculatorAngular/">
The demos that come with the DevExtreme framework include two TipCalculator apps. [One of these apps](https://js.devexpress.com/Demos/Simulator/?url=/Demos/TipCalculator&sm=3) demonstrates how to build a simple application using the DevExtreme widgets and the DevExtreme SPA framework. You can read an overview on this demo in the [Tip Calculator Demo](/concepts/70%20Demos%20Inside/70%20Tip%20Calculator%20Demo '/Documentation/Guide/Demos_Inside/Tip_Calculator_Demo/') article. The other TipCalculator app (download it from [GitHub](https://github.com/DevExpress/DevExtreme-14.2-TipCalculator-AngularJS)) is intended to illustrate how to use DevExtreme widgets in an application built using the [AngularJS](https://angularjs.org) framework. In this article, you will learn the details of the TipCalculator application built on AngularJS.

As a base, the [angular-seed](https://github.com/angular/angular-seed) application project is used. Its structure is changed in the following way.

- **lib**  
    Contains the necessary libraries for using DevExtreme widgets.
      - *jquery-3.1.0.js*
      - *angular.min.js*
      - *angular-route.min.js*
      - *dx.mobile.js*  
- **css**  
    Contains the CSS files that are required to make the application native on any platform.
- **js**  
    Contains the *controllers.js* file with a controller's declaration, and the *app.js* file with the application's module declaration.
- **partials**  
    Contains the *home.html* file that represents an HTML template for the single view in the application.
- *index.html*  
    The application's page.        

</article>