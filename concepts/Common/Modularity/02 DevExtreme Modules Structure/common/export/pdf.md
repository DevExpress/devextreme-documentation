Exposes the [DevExpress.pdfExporter](/api-reference/50%20Common/utils/pdfExporter '/Documentation/ApiReference/Common/Utils/pdfExporter/') object's methods.

Exports:

- *exportDataGrid* - The [exportDataGrid(options)](/api-reference/50%20Common/utils/pdfExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions') method

        require("devextreme/common/export/pdf").exportDataGrid;
        // ===== or =====
        import { exportDataGrid } from "devextreme/common/export/pdf;

- *exportGantt* - The [exportGantt(options)](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') method

        require("devextreme/common/export/pdf").exportGantt;
        // ===== or =====
        import { exportGantt } from "devextreme/common/export/pdf";

[note] You need to perform *extra steps* to generate PDFs with non-ASCII characters. See the [PDF Export guide](/Documentation/Guide/Troubleshooting/PDF_Export_Issues/Export_Unicode_Characters/DataGrid/) for more information.