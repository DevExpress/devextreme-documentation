DevExtreme files are available through a Content Delivery Network (CDN). Link the files within the `<head>` tag on your index page in the order given below. Optionally, you can verify the files by adding [SRI hashes](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services/10%20Subresource%20Integrity%20Hashes.md '/Documentation/Guide/Getting_Started/Installation/CDN_Services/#Subresource_Integrity_Hashes') to the links.

    <!--HTML-->
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_2/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_2/css/dx.light.css" />

    <!-- DevExtreme library -->
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.mobile.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.viz-web.js"></script> -->

The stylesheets in the code above apply the Generic Light theme. See [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') for information about the other available themes.

Specific functionality requires additional libraries. For instance, [localization](/concepts/Common/33%20Localization '/Documentation/Guide/Common/Localization/') uses the [Globalize](https://github.com/globalizejs/globalize/blob/master/README.md) library or [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). Similarly, [client-side exporting](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/') in the **DataGrid** and **PivotGrid** widgets requires the [JSZip](https://stuk.github.io/jszip) library. Refer to the dedicated topics for details.
