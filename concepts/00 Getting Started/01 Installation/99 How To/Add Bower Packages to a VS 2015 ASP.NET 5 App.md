The Visual Studio 2015 MVC 5 Web Application template supports Bower out of the box. Follow the steps below to add the DevExtreme libraries to an MVC 5 application using Bower.

1. Open the *bower.json* file located in the root folder of your application project.

2. Find the `dependencies` section in this file, put a comma after the last entry and copy-paste the following line:

        "devextreme": "~16.2" // restores DevExtreme

    Wait a few seconds for the libraries to load. DevExtreme scripts are be located in the **wwwroot/lib/devextreme** folder.

3. Link the needed libraries within your index page's `<head>` tag.

        <!--HTML-->
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        . . .
        <script type="text/javascript" src="lib/devextreme/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.viz-web.js"></script> -->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="bower-components/devextreme/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="bower-components/devextreme/css/dx.light.css" />

[note]The Knockout and AngularJS libraries are not included in the DevExtreme Bower package or its dependencies.

#####See Also#####
- [Bower Package](/concepts/00%20Getting%20Started/01%20Installation/15%20Bower%20Package.md '/Documentation/Guide/Getting_Started/Installation/Bower_Package')
- [NuGet Package](/concepts/00%20Getting%20Started/01%20Installation/10%20NuGet%20Package.md '/Documentation/Guide/Getting_Started/Installation/NuGet_Package')
- [npm Package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package')

[tags]install, bower, package, aspnet, visual studio 2015, vs 2015
