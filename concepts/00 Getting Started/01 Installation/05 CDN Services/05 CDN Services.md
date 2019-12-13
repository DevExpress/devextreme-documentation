DevExtreme files are available through a Content Delivery Network (CDN). Link the files within the `<head>` tag on your index page in the order given below. Optionally, you can verify the files by adding [SRI hashes](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services/10%20Subresource%20Integrity%20Hashes.md '/Documentation/Guide/Getting_Started/Installation/CDN_Services/#Subresource_Integrity_Hashes') to the links.

    <!--HTML-->
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.4.1.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">

    <!-- DevExtreme library -->
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.viz-web.js"></script> -->

The stylesheets in the code above apply the Generic Light theme. See [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for information about the other available themes.

Specific functionality requires additional libraries. For instance, [client-side exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/') in the **DataGrid** and **PivotGrid** widgets requires the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip</a> library. Similarly, the [HtmlEditor](/concepts/05%20Widgets/HtmlEditor/00%20Overview.md '/Documentation/Guide/Widgets/HtmlEditor/Overview/') widget requires <a href="https://quilljs.com/" target="_blank">Quill</a>. Refer to the dedicated topics for details.
