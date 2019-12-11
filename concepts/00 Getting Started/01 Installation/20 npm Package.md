[note] If you use Angular, follow instructions given [here](https://github.com/DevExpress/devextreme-angular#add-to-existing-app).

DevExtreme is available through the [npm](https://www.npmjs.com) package manager. Run the following command to install or upgrade the [DevExtreme package](https://www.npmjs.com/package/devextreme):

    npm install devextreme@17.1 --save --save-exact

We recommend saving an exact version of DevExtreme to avoid unexpected updates due to DevExtreme not using Semantic Versioning. In our versioning system, the increment of the first or middle number means a major release, which may contain behavior changes.

[note]

npm@3 does not install peer dependencies automatically. You need to install jQuery manually with the following command:

    npm install jquery

[/note]

Use the following commands to install additional libraries.

    // Allow you to use the MVVM approach
    npm install knockout@3.4
    npm install angular@1

    // Enable you to localize your app
    npm install globalize@1
    npm install cldr-data

    // Enables you to create your own DevExtreme modules
    npm install webpack@1.13

After installation is completed, you can find all the libraries in the **node_modules** folder. Link them within your index page's `<head>` tag.

    <!--HTML-->
    <script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="node_modules/knockout/build/output/knockout-latest.js"></script>
    <script type="text/javascript" src="node_modules/angular/angular.min.js"></script>

    <!-- Reference Globalize if you need to localize app or your app uses custom date, number or currency formatting --> 
    <script type="text/javascript" src="node_modules/cldrjs/dist/cldr.js"></script>
    <script type="text/javascript" src="node_modules/cldrjs/dist/cldr/event.js"></script>
    <script type="text/javascript" src="node_modules/cldrjs/dist/cldr/supplemental.js"></script>
    <script type="text/javascript" src="node_modules/globalize/dist/globalize.js"></script>
    <script type="text/javascript" src="node_modules/globalize/dist/globalize/message.js"></script>
    <script type="text/javascript" src="node_modules/globalize/dist/globalize/number.js"></script>
    <script type="text/javascript" src="node_modules/globalize/dist/globalize/currency.js"></script>
    <script type="text/javascript" src="node_modules/globalize/dist/globalize/date.js"></script>

    <!-- Reference the JSZip script if you need client-side export -->
    <script type="text/javascript" src="node_modules/jszip/dist/jszip.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />

    <!-- A DevExtreme library -->
    <script type="text/javascript" src="node_modules/devextreme/dist/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="node_modules/devextreme/dist/js/dx.mobile.js"></script> -->
    <!-- <script type="text/javascript" src="node_modules/devextreme/dist/js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="node_modules/devextreme/dist/js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="node_modules/devextreme/dist/js/dx.viz-web.js"></script> -->
    
#####See Also#####
- [npm Documentation](https://docs.npmjs.com)
- [NuGet Package](/concepts/00%20Getting%20Started/01%20Installation/10%20NuGet%20Package.md '/Documentation/Guide/Getting_Started/Installation/NuGet_Package')
- [Bower Package](/concepts/00%20Getting%20Started/01%20Installation/15%20Bower%20Package.md '/Documentation/Guide/Getting_Started/Installation/Bower_Package')
- [DevExtreme Modularity](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/')
- [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/')

[tags]getting started, install, npm, package
