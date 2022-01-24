---
id: PdfExportGanttProps.font
type: PdfExportGanttFont
inheritsType: PdfExportGanttFont
---
---
##### shortDescription
Specifies the font.

---

Specify the **font** property in the [exportGantt](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') method to use a custom font in the exported Gantt data. The [fontObject](/api-reference/_hidden/PdfExportGanttFont/fontObject.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportGanttProps/font/fontObject') and [name](/api-reference/_hidden/PdfExportGanttFont/name.md '/Documentation/ApiReference/Common/Object_Structures/PdfExportGanttProps/font/name') properties are required.

    <!-- tab: JavaScript -->
    DevExpress.pdfExporter.exportGantt(
      {
        component: ganttInstance,
        createDocumentMethod: (args) => new jsPDF(args),
        font: {
            fontObject: myfont,
            name: 'Roboto-BoldItalic',
        }
      },
    ).then((doc) => {
      doc.save('gantt.pdf');
    });
    // ===== or when using modules =====
    import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
    exportGanttToPdf(
      {
        component: ganttInstance,
        createDocumentMethod: (args) => new jsPDF(args),
        font: {
            fontObject: myfont,
            name: 'Roboto-BoldItalic',
        }
      },
    ).then((doc) => doc.save('gantt.pdf'));
    <!-- tab: Roboto-BoldItalic.js -->
    var myfont = 'AAEAAAAS...';
