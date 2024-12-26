Link DevExtreme scripts and stylesheets within the `<head>` tag on your index page. The order of the scripts and stylesheets is important. All CDN links are listed in the [CDN](/concepts/Common/Distribution%20Channels/05%20CDN '/Documentation/Guide/Common/Distribution_Channels/CDN/') article. Optionally, you can verify the files by adding [SRI hashes](/concepts/Common/Distribution%20Channels/05%20CDN/10%20Subresource%20Integrity%20Hashes.md '/Documentation/Guide/Common/Distribution_Channels/CDN/#Subresource_Integrity_Hashes') to the links.

    <!--HTML-->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

        <!-- DevExtreme theme -->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">

        <!-- DevExtreme libraries (reference only one of them) -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.viz.js"></script> -->
    </head>
    <body class="dx-viewport">
        <!-- ... -->
    </body>

Stylesheets in the code above apply the Generic Light theme. The `dx-viewport` class ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme UI components). See [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for information about other available themes.

Specific functionality requires additional libraries. For instance, client-side export in the [PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/') and [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/') UI components requires the <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> libraries. Similarly, the [HtmlEditor](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/') UI component requires <a href="https://github.com/DevExpress/devextreme-quill/" target="_blank">DevExtreme Quill</a>.

[tags] jquery
