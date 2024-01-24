Exposes the [DevExpress.pdfExporter](/api-reference/50%20Common/utils/pdfExporter '/Documentation/ApiReference/Common/Utils/pdfExporter/') object's methods.

Exports:

- *exportDataGrid* - The [exportDataGrid(options)](/api-reference/50%20Common/utils/pdfExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions') method

        require("pdf_exporter").exportDataGrid;
        // ===== or =====
        import { exportDataGrid } from "devextreme/pdf_exporter";

- *exportGantt* - The [exportGantt(options)](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') method

        require("pdf_exporter").exportGantt;
        // ===== or =====
        import { exportGantt } from "devextreme/pdf_exporter";

Warning: You need to perform *extra steps* to generate PDFs with non-ASCII characters. See the [PDF Export guide](/concepts/80%20Troubleshooting/15%20PDF%20Export/00%20PDF%20Export.md '/Documentation/Concepts/Troubleshooting/PDF_Export') for more information.