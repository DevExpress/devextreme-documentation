### Why PDFs only support ASCII

The creators of PDF needed to make sure that different applications across different platforms can render the same PDF document with consistency. To achieve this goal, the original 1992 specification of the format intentionally limited the range of supported fonts and glyphs.

Modern PDFs still store text data as ASCII, and only support 14 common fonts out of the box. If you want to include a non-standard glyph in your PDF file, you have to embed a font with that glyph into the PDF.

The jsPDF library cannot detect the presence of Unicode content in your file, and does not come with built-in Unicode fonts. It does, however, offer methods that you can use to embed a Unicode font into your PDF. 

If you expect your users to input non-ASCII text, follow the steps outlined in this tutorial.

### How to embed a Unicode font into your PDF

The pdfExporter module/namespace includes two dedicated methods for PDF export — *exportGantt* and *exportDataGrid*.

The [exportGantt(options)](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') method includes a dedicated property that allows you to specify a custom PDF font. The [exportDataGrid(options)](/api-reference/50%20Common/utils/pdfExporter/exportDataGrid(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions') property does not include that option. Use *jsPDF* methods to embed a custom font into your Data Grid PDF.

#### Preparation

To use a font with jsPDF, convert the TTF file into a binary string. The developers of the library created an online tool that does this for you: [https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html).

The tool generates a JavaScript file with a **font** variable:

<!---JavaScript--->

    var fontFace = 'AAEAAAAWAQAABABgR0RFRivV/fMAAA <...>'

Import the variable to use it in your DevExtreme project:

<!---JavaScript--->

    import fontFace from './myNewFont';

#### Gantt

If you use the *exportGantt* method, you can take advantage of the dedicated [font](/api-reference/50%20Common/Object%20Structures/GanttExportOptions/font.md '/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/') parameter:

<!---JavaScript--->
    import myfont from './myFont';
    import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';

    exportGanttToPdf(
    {
        component: ganttInstance,
        createDocumentMethod: (args) => new jsPDF(args),
        font: {
            fontObject: myfont,
            name: 'MyFontName',
        }
    },
    ).then((doc) => doc.save('gantt.pdf'));

Warning: The **fontObject** option expects a value of the **Object** type. If you pass a **string** to the parameter, the TypeScript compiler yields an error.

#### DataGrid

You cannot pass the font directly to the **exportDataGrid** method. You need to manually add the font to the project's jsPDF configuration. 

Find the line of code where you initialize jsPDF. Add the font before you call the **exportDataGrid** method:

<!---JavaScript--->
    import myfont from './myFont';

    const doc = new jsPDF();
    doc.addFileToVFS("MyFont.ttf", myFont);
    doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.setFont("MyFont");