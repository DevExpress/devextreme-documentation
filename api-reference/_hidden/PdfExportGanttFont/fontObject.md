---
id: PdfExportGanttFont.fontObject
type: Object
default: undefined
---
---
##### shortDescription
A custom font object.

---

Use the <a href="https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html" target="_blank">jsPDF font converter</a> to generate a custom font object. Specify font settings and load your font file (.ttf). The converter generates a .js file with the content of your font file.

![DevExtreme Gantt - Custom Font for PDF Export](/images/Gantt/font-object-converter.png)

Add the generated .js file or only a base64-encoded string from this file to your project to export data with your font.

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
