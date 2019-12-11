Instead of delivering DevExtreme and other required libraries with your app, you can load them from Content Delivery Network (CDN) services. Depending on the library or framework you use in your app, link the needed resources within the `<head>` tag of your index page in the given order.

- **jQuery**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz-web.js"></script> -->

- **Knockout**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <!-- The Knockout library -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz-web.js"></script> -->

- **AngularJS**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
        <!-- The AngularJS library -->
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.viz-web.js"></script> -->

[note] DevExtreme provides a wide selection of predefined themes designed specifically for each platform. For more information, see the [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') article.

<div id="GlobalizeCDN"></div>

Localized apps and apps that use custom date, number or currency formatting require the [Globalize](https://github.com/jquery/globalize) library as well.

    <!--HTML-->
    <!-- Globalize scripts -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/event.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/message.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/number.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/currency.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/date.js"></script>

[note]Globalize scripts need to go _before_ DevExtreme scripts.

If you use the [client-side export feature](/concepts/05%20Widgets/DataGrid/090%20Client-Side%20Export '/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') and [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widgets, reference the JSZip library.

    <!--HTML-->
    <!-- JSZip library -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.6.0/jszip.min.js"></script>

[note]Reference the **JSZip** script *before* the DevExtreme scripts.

[tags]getting started, install, cdn