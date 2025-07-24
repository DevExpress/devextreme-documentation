As an alternative, you can use the [GanttExportOptions](/api-reference/50%20Common/Object%20Structures/GanttExportOptions '/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/').[font](/api-reference/50%20Common/Object%20Structures/GanttExportOptions/font.md '/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/') property to add a font to your PDF exports. Assign a Base64-encoded font file to **font**.[fontObject](/api-reference/_hidden/GanttExportFont/fontObject.md '/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/#fontObject') and specify **font**.[name](/api-reference/_hidden/GanttExportFont/name.md '/Documentation/ApiReference/Common/Object_Structures/GanttExportOptions/font/#name'):

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
- [Export Data](/concepts/05%20UI%20Components/Gantt/50%20Export%20Data.md '/Documentation/Guide/UI_Components/Gantt/Export_Data/')