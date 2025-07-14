You can also add a font to your PDF exports by implementing the [GanttExportOptions](/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/).[font](/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/) property. Assign a Base64 encoded font file to **font**.[fontObject](/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/#fontObject) and specify **font**.[name](/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/#name):

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        DevExpress.pdfExporter.exportGantt({
            jsPDFDocument: doc,
            component: ganttComponent,
            font: {
                fontObject: robotoRegular,
                name: 'Roboto',
            },
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
            font: {
                fontObject: robotoRegular,
                name: 'Roboto',
            },
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
        font: {
            fontObject: robotoRegular,
            name: 'Roboto',
        },
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
            font: {
                fontObject: robotoRegular,
                name: 'Roboto',
            },
        }).then(() => {
            doc.save('Tasks.pdf');
        });
    }

---

#####See Also#####
- [Export Data](/Documentation/Guide/UI_Components/Gantt/Export_Data/)