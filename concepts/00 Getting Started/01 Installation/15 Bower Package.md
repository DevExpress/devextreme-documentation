Whatever IDE you develop apps in, you can always add the DevExtreme libraries to your project using the [devextreme](https://github.com/devexpress/bower-devextreme) Bower package. To install it, open the console, navigate to your app folder and run the following command.

    bower install devextreme#~17.1 --save

The jQuery and Globalize packages, upon which DevExtreme depends, will be installed as well, but the Knockout and AngularJS packages will not. If you need them, install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    bower install knockout

<!-------->

    bower install angular

If you use the [client-side export](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/'), also install the JSZip library.

    bower install Stuk/jszip

After installation is completed, you can find all the libraries in the **bower_components** folder. Link them within the `<head>` tag of your index page.

    <!--HTML-->
    <script type="text/javascript" src="/bower-components/jquery/dist/jquery.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="bower_components/knockout/dist/knockout.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>

    <!-- Reference Globalize if you need to localize app or your app uses custom date, number or currency formatting --> 
    <script type="text/javascript" src="bower_components/cldrjs/dist/cldr.js"></script>
    <script type="text/javascript" src="bower_components/cldrjs/dist/cldr/event.js"></script>
    <script type="text/javascript" src="bower_components/cldrjs/dist/cldr/supplemental.js"></script>
    <script type="text/javascript" src="bower_components/globalize/dist/globalize.js"></script>
    <script type="text/javascript" src="bower_components/globalize/dist/globalize/message.js"></script>
    <script type="text/javascript" src="bower_components/globalize/dist/globalize/number.js"></script>
    <script type="text/javascript" src="bower_components/globalize/dist/globalize/currency.js"></script>
    <script type="text/javascript" src="bower_components/globalize/dist/globalize/date.js"></script>

    <!-- Reference JSZip script if you need client-side export -->
    <script type="text/javascript" src="bower_components/jszip/dist/jszip.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" type="text/css" href="bower_components/devextreme/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="bower_components/devextreme/css/dx.light.css" />

    <!-- A DevExtreme library -->
    <script type="text/javascript" src="bower-components/devextreme/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="bower_components/devextreme/js/dx.mobile.js"></script> -->
    <!-- <script type="text/javascript" src="bower_components/devextreme/js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="bower_components/devextreme/js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="bower_components/devextreme/js/dx.viz-web.js"></script> -->
    
#####See Also#####
- [Install Bower](https://bower.io/#install-bower)
- [Add Bower Packages to a VS ASP.NET MVC and ASP.NET Core MVC App](/concepts/00%20Getting%20Started/01%20Installation/99%20How%20To/Add%20Bower%20Packages%20to%20a%20VS%20ASP.NET%20MVC%20and%20ASP.NET%20Core%20MVC%20App.md '/Documentation/Guide/Getting_Started/Installation/How_To/Add_Bower_Packages_to_a_VS_ASP.NET_MVC_and_ASP.NET_Core_MVC_App/')
- [NuGet Package](/concepts/00%20Getting%20Started/01%20Installation/10%20NuGet%20Package.md '/Documentation/Guide/Getting_Started/Installation/NuGet_Package')
- [npm Package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package')
- [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/')

[tags]getting started, install, bower, package