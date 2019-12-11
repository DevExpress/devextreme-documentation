Whatever IDE you develop apps in, you can always add the DevExtreme libraries to your project using the [devextreme](https://github.com/devexpress/bower-devextreme) Bower package. To install this package, open the console, navigate to your app folder and run the following command.

    bower install devextreme-web#~16.1 --save // installs the DevExtreme Web package
    bower install devextreme#~16.1 --save // installs the DevExtreme Complete package

The jQuery and Globalize packages, upon which DevExtreme depends, will be installed as well, but the Knockout and AngularJS packages will not. If you need them, install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    bower install knockout

<!-------->

    bower install angular-sanitize

If you use the [client-side export](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/'), also install the JSZip library.

    bower install Stuk/jszip

After installation is completed, you can find all the libraries in the **bower_components** folder. Link them within the `<head>` tag of your index page.

    <!--HTML-->
    <script type="text/javascript" src="/bower-components/jquery/dist/jquery.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="/bower_components/knockout/dist/knockout.js"></script>
    <script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>

    <!-- Reference Globalize if you need to localize app or your app uses custom date, number or currency formatting --> 
    <script type="text/javascript" src="/bower_components/cldrjs/dist/cldr.js"></script>
    <script type="text/javascript" src="/bower_components/cldrjs/dist/cldr/event.js"></script>
    <script type="text/javascript" src="/bower_components/cldrjs/dist/cldr/supplemental.js"></script>
    <script type="text/javascript" src="/bower_components/globalize/dist/globalize.js"></script>
    <script type="text/javascript" src="/bower_components/globalize/dist/globalize/message.js"></script>
    <script type="text/javascript" src="/bower_components/globalize/dist/globalize/number.js"></script>
    <script type="text/javascript" src="/bower_components/globalize/dist/globalize/currency.js"></script>
    <script type="text/javascript" src="/bower_components/globalize/dist/globalize/date.js"></script>

    <!-- Reference JSZip scripts if you need client-side export -->
    <script type="text/javascript" src="/bower_components/jszip/dist/jszip.js"></script>

    <script type="text/javascript" src="/bower-components/devextreme/js/dx.all.js"></script>
    <!--<script type="text/javascript" src="/bower-components/devextreme/js/dx.mobile.js"></script>-->
    <!--<script type="text/javascript" src="/bower-components/devextreme/js/dx.web.js"></script>-->
    <!--<script type="text/javascript" src="/bower-components/devextreme/js/dx.viz.js"></script>-->
    <!--<script type="text/javascript" src="/bower-components/devextreme/js/dx.viz-web.js"></script>-->
    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="/bower-components/devextreme/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="/bower-components/devextreme/css/dx.light.css" />

#####See Also#####
- [Install Bower](https://bower.io/#install-bower) - shows how to install a Bower client.

###Add Bower Packages to a Visual Studio 2015 ASP.NET 5 Application###

The Visual Studio 2015 MVC 5 Web Application template supports Bower out of the box. Follow the steps below to add the DevExtreme libraries to an MVC 5 application using Bower.

1. Open the *bower.json* file located in the root folder of your application project.

    ![Bower - .json file](/images/UiWidgets/BowerJSONFile.png) 

2. Find the `dependencies` section in this file, put a comma after the last entry and copy-paste the following line.

        "devextreme-web": "~16.1", // for restoring the DevExtreme Web package
        "devextreme": "~16.1" // for restoring the DevExtreme Complete package

    Wait a few seconds until the libraries are loaded. DevExtreme scripts will be located in the **wwwroot/lib/devextreme** folder.

3. Link the needed libraries within the `<head>` tag of your index page.

        <!--HTML-->
        <script type="text/javascript" src="/lib/jquery/dist/jquery.min.js"></script>
        . . .
        <script type="text/javascript" src="/lib/devextreme/js/dx.all.js"></script>
        <!--<script type="text/javascript" src="/lib/devextreme/js/dx.mobile.js"></script>-->
        <!--<script type="text/javascript" src="/lib/devextreme/js/dx.web.js"></script>-->
        <!--<script type="text/javascript" src="/lib/devextreme/js/dx.viz.js"></script>-->
        <!--<script type="text/javascript" src="/lib/devextreme/js/dx.viz-web.js"></script>-->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="/lib/devextreme/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/lib/devextreme/css/dx.light.css" />


[note]The Knockout and AngularJS libraries are not included in the DevExtreme Bower package or its dependencies.