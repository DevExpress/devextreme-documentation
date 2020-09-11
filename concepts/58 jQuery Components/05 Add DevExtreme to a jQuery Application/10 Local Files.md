You can find all required files in the <a target="_blank" onclick="trackGAEvent('Download Trial', 'Complete zip', 'jQuery article');" href="https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrialZip.aspx">DevExtreme ZIP archive</a> or in the DevExtreme folder (%ProgramFiles(x86)%\DevExpress 20.1\DevExtreme\Sources) if you used the <a target="_blank" onclick="trackGAEvent('Download Trial', 'Complete', 'jQuery article');" href="https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrial.aspx">Windows installer</a>. Copy the Lib folder into the folder with your application. Then, link jQuery and DevExtreme stylesheets and scripts in the index page's `<head>` tag in the following order:

    <!--HTML-->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>

        <!-- DevExtreme themes -->
        <link rel="stylesheet" href="css/dx.common.css">
        <link rel="stylesheet" href="css/dx.light.css">

        <!-- DevExtreme library -->
        <script type="text/javascript" src="js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="js/dx.viz-web.js"></script> -->
    </head>
    <body class="dx-viewport">
        <!-- ... -->
    </body>

Stylesheets in the code above apply the Generic Light theme. The `dx-viewport` class ensures that theme colors and typography settings are applied to all page elements (and not only to DevExtreme widgets). See [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for information about other available themes.

Specific functionality requires additional libraries. For instance, client-side exporting in **PivotGrid** widget requires the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip</a> library; the [same feature](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') in the **DataGrid** widget also needs the <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> libraries. Similarly, the [HtmlEditor](/concepts/05%20Widgets/HtmlEditor/00%20Overview.md '/Documentation/Guide/Widgets/HtmlEditor/Overview/') widget requires <a href="https://quilljs.com/" target="_blank">Quill</a>.

#####See Also#####
#include common-link-configurewidget
