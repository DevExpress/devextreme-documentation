---
id: PdfExportGanttFont
---
---
##### shortDescription
Configures a custom font used for the Gantt data export.

---

Specify the [font](/Documentation/ApiReference/Common/Object_Structures/PdfExportGanttProps/#font) property in the [exportGantt](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions) method to use a custom font in the exported Gantt data.

    function exportGantt() {
        DevExpress.pdfExporter.exportGantt({
            // ...
            font: {
                fontObject: test_font,
                name: 'test-font',
                style: 'italic',
                weight: 'bold'
            }
        })
    }
