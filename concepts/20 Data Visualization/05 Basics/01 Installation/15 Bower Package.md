Whatever IDE you develop apps in, you can always add the DevExtreme libraries to your project using the [devextreme](https://github.com/devexpress/bower-devextreme) Bower package. To install this package, open the console, navigate to your app folder and run one of the following commands depending on the [DevExtreme package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/') you need.

    bower install devextreme-web#~16.1 --save // installs the DevExtreme Web package
    bower install devextreme#~16.1 --save // installs the DevExtreme Complete package

The jQuery and Globalize packages, upon which DevExtreme depends, will be installed as well, but the Knockout and AngularJS packages will not. If you need them, install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    bower install knockout

<!-------->

    bower install angular-sanitize

After installation is completed, you can find all the libraries in the **bower_components** folder. Link them within the `<head>` tag of your index page.

    <!--HTML-->
    <script type="text/javascript" src="/bower-components/jquery/dist/jquery.min.js"></script>
    . . .
    <script type="text/javascript" src="/bower-components/devextreme/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="/bower-components/devextreme-web/js/dx.viz-web.js"></script> -->
    <!-- <script type="text/javascript" src="/bower-components/devextreme-web/js/dx.viz.js"></script> -->

#####See Also#####
- [Install Bower](https://bower.io/#install-bower) - shows how to install a Bower client.

###Add Bower Packages to a Visual Studio 2015 ASP.NET 5 Application###

The Visual Studio 2015 MVC 5 Web Application template supports Bower out of the box. Follow the steps below to add the DevExtreme libraries to an MVC 5 application using Bower.

1. Open the *bower.json* file located in the root folder of your application project.

2. Find the `dependencies` section in this file, put a comma after the last entry and copy-paste one of the following lines depending on the [DevExtreme package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/') you need.

        "devextreme-web": "~16.1", // for restoring the DevExtreme Web package
        "devextreme": "~16.1" // for restoring the DevExtreme Complete package

    Wait a few seconds until the libraries are loaded. DevExtreme scripts will be located in the **wwwroot/lib/devextreme-web** or **wwwroot/lib/devextreme** folder.

3. Link the needed libraries within the `<head>` tag of your index page.

        <!--HTML-->
        <script type="text/javascript" src="/lib/jquery/dist/jquery.min.js"></script>
        . . .
        <script type="text/javascript" src="/lib/devextreme/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="/lib/devextreme-web/js/dx.viz-web.js"></script> -->
        <!-- <script type="text/javascript" src="/lib/devextreme-web/js/dx.viz.js"></script> -->

[note]The Knockout and AngularJS libraries are not included in the DevExtreme Bower package or its dependencies.