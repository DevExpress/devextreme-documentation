---
id: PdfExportGanttFont
---
---
##### shortDescription
Configures a custom font used for the Gantt data export.

---

Specify the [font](/Documentation/ApiReference/Common/Object_Structures/PdfExportGanttProps/#font) property in the [exportGantt](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions) method to use a custom font in the exported Gantt data.

    <!-- tab: index.js -->
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
    <!-- tab: Roboto-BoldItalic-bolditalic.js -->
    var myfont = 'AAEAAAAS...';
