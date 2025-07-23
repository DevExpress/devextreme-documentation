To add a font file to a jsPDF instance, implement the following jsPDF methods:

- [addFileToVFS(fileName, contents)](https://raw.githack.com/MrRio/jsPDF/master/docs/module-vFS.html#~addFileToVFS)
- [addFont(fileName, fontName, fontStyle)](https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#addFont)
- [setFont(fontName)](https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#setFont)

Set the **addFileToVFS()** method's **contents** parameter to the Base64-encoded font:

    <!-- tab: JavaScript -->
    const doc = new jsPDF();

    doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

Assign this jsPDF instance to the [jsPDFDocument](/Documentation/ApiReference/Common/Object_Structures/PdfExportDataGridProps/#jsPDFDocument) property of [exportDataGrid](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportDataGridoptions):

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        DevExpress.pdfExporter.exportDataGrid({
            jsPDFDocument: doc,
            component: gridComponent,
        }).then(() => {
            doc.save('Companies.pdf');
        });
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { exportDataGrid } from 'devextreme-angular/common/export/pdf';

    export class AppComponent {

        // ...
        exportDataGrid({
            jsPDFDocument: doc,
            component: gridComponent,
        }).then(() => {
            doc.save('Companies.pdf');
        });
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { exportDataGrid } from 'devextreme-vue/common/export/pdf';

    // ...
    exportDataGrid({
        jsPDFDocument: doc,
        component: gridComponent,
    }).then(() => {
        doc.save('Companies.pdf');
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { exportDataGrid } from 'devextreme-react/common/export/pdf';

    function App() {
        exportDataGrid({
            jsPDFDocument: doc,
            component: gridComponent,
        }).then(() => {
            doc.save('Companies.pdf');
        });
    }

---

#####See Also#####
- [Export Data](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/#Export_Data)