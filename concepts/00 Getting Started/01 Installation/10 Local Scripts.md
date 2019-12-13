You can find all the required files in the [DevExtreme zip archive](https://js.devexpress.com/Download/#Alternative-Downloads) or DevExtreme folder (%ProgramFiles(x86)%\DevExpress 19.2\DevExtreme\Sources). Copy the Lib folder into the folder with your application. Then, link the required files in the `<head>` tag on your index page in the following order:

    <!--HTML-->
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="js/knockout-latest.js"></script>
    <script type="text/javascript" src="js/angular.min.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" href="css/dx.common.css">
    <link rel="stylesheet" href="css/dx.light.css">

    <!-- DevExtreme library -->
    <script type="text/javascript" src="js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="js/dx.viz-web.js"></script> -->

The stylesheets in the code above apply the Generic Light theme. See [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for information about the other available themes.

Specific functionality requires additional libraries. For instance, [client-side exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/') in the **DataGrid** and **PivotGrid** widgets requires the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip</a> library. Similarly, the [HtmlEditor](/concepts/05%20Widgets/HtmlEditor/00%20Overview.md '/Documentation/Guide/Widgets/HtmlEditor/Overview/') widget requires <a href="https://quilljs.com/" target="_blank">Quill</a>. Refer to the dedicated topics for details.

#####See Also#####
#include common-link-configurewidget
