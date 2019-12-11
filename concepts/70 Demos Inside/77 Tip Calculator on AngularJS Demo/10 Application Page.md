<article data-show="/Demos/TipCalculatorAngular/">
Open the *index.html* file, which is the application page.

The application page contains links to required libraries: **jQuery**, **AngularJS** and **dx.mobile**. These libraries are contained in the **lib** folder of the application project.

    <script type="text/javascript" src="lib/jquery-2.2.3.min.js"></script>
    <script src="lib/angular.min.js"></script>
    <script src="lib/angular-sanitize.min.js"></script>
    <script src="lib/angular-route.min.js"></script>
    <script src="lib/dx.mobile.js"></script>

The application page also includes links to the stylesheets required for the application. The stylesheets are contained in the **css** folder of the application project.

    <!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.common.css" />
    <link rel="dx-theme" data-theme="ios7.default" href="css/dx.ios7.default.css" />
    <link rel="dx-theme" data-theme="android5.light" href="css/dx.android5.light.css" />
    <link rel="dx-theme" data-theme="win10.black" href="css/dx.win10.black.css" />
    <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" />

Finally, the application page contains links to the view controller and to the application's CSS and JavaScript files.

    <!--HTML-->
    <script src="js/controllers.js"></script>
  
    <script type="text/javascript" src="js/app.js"></script>
    <link rel="stylesheet" href="css/app.css"/>


  
The *app.css* file contains the style classes that are designed for this application. They are used in the view's markup.

The *app.js* file is the script that is executed when the page is loaded. See its description below.

The application page only contains the view's markup. 

    <!--HTML--><body>
        <div class="dx-viewport dx-ios-stripes" id="viewport">
            <div ng-view=""></div>
        </div>
    </body>
  
The **dx-viewport** and **dx-ios-stripes** classes are applied to the [ng-view](https://docs.angularjs.org/api/ngRoute.directive:ngView) element.
</article>