To add a font file to a jsPDF instance, implement the following jsPDF methods:

- [addFileToVFS(fileName, contents)](https://raw.githack.com/MrRio/jsPDF/master/docs/module-vFS.html#~addFileToVFS)
- [addFont(fileName, fontName, fontStyle)](https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#addFont)
- [setFont(fontName)](https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#setFont)

Set the **contents** parameter of **addFileToVFS()** to the Base64 encoded font:

    <!-- tab: JavaScript -->
    const doc = new jsPDF();

    doc.addFileToVFS("Roboto-Regular.ttf", robotoRegular);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

Assign this jsPDF instance to the **jsPDFDocument** property of [exportGantt](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions):

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        DevExpress.pdfExporter.exportGantt({
            jsPDFDocument: doc,
            component: ganttComponent,
        }).then(() => {
            doc.save('Tasks.pdf');
        });
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { exportGantt } from 'devextreme-angular/common/export/pdf';

    export class AppComponent {

        // ...
        exportGantt({
            jsPDFDocument: doc,
            component: ganttComponent,
        }).then(() => {
            doc.save('Tasks.pdf');
        });
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { exportGantt } from 'devextreme-vue/common/export/pdf';

    // ...
    exportGantt({
        jsPDFDocument: doc,
        component: ganttComponent,
    }).then(() => {
        doc.save('Tasks.pdf');
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { exportGantt } from 'devextreme-react/common/export/pdf';

    function App() {
        exportGantt({
            jsPDFDocument: doc,
            component: ganttComponent,
        }).then(() => {
            doc.save('Tasks.pdf');
        });
    }

---
