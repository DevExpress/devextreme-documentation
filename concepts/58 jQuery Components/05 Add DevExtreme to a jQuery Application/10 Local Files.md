You can find all required files in the <a target="_blank" onclick="trackGAEvent('Download Trial', 'Complete zip', 'jQuery article');" href="https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrialZip.aspx">DevExtreme ZIP archive</a> or in the DevExtreme folder (%ProgramFiles%\DevExpress 24.1\DevExtreme\Sources) if you used the <a target="_blank" onclick="trackGAEvent('Download Trial', 'Complete', 'jQuery article');" href="https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrial.aspx">Windows installer</a>. Copy the Lib folder into the folder with your application. Then, link jQuery and DevExtreme stylesheets and scripts in the index page's `<head>` tag in the following order:

    <!--HTML-->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="js/jquery.min.js"></script>

        <!-- DevExtreme theme -->
        <link rel="stylesheet" href="css/dx.light.css">

        <!-- DevExtreme library -->
        <script type="text/javascript" src="js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="js/dx.viz.js"></script> -->
    </head>
    <body class="dx-viewport">
        <!-- ... -->
    </body>

Stylesheets in the code above apply the Generic Light theme. The `dx-viewport` class ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme UI components). See [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for information about other available themes.

Specific functionality requires additional libraries. For instance, client-side export in the [PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/') and [DataGrid](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/') UI components requires the <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> libraries. Similarly, the [HTML Editor](/concepts/05%20UI%20Components/HtmlEditor/00%20Getting%20Started%20with%20HtmlEditor '/Documentation/Guide/UI_Components/HtmlEditor/Getting_Started_with_HtmlEditor/') UI component requires<a href="https://github.com/DevExpress/devextreme-quill/" target="_blank">DevExtreme Quill</a>.

#####See Also#####
#include common-link-configurewidget
