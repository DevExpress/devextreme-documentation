Use the [columns](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#columns/') property to specify columns that the Gantt UI component should display in the task list. The UI component gets columns from the [tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/') data source.

[note] The Gantt UI component does not support data sorting.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            columns: [{
                dataField: "title",
                caption: "Subject",
                width: 300
            }, {
                dataField: "start",
                caption: "Start Date"
            }, {
                dataField: "end",
                caption: "End Date"
            }],        
            ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxi-column dataField="title" caption="Subject" [width]="300"></dxi-column>
        <dxi-column dataField="start" caption="Start Date" dataType="date"></dxi-column>
        <dxi-column dataField="end" caption="End Date" dataType="date"></dxi-column>
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxGantt ... >
        <DxColumn
            :width="300"
            data-field="title"
            caption="Subject"
        />
        <DxColumn
            data-field="start"
            caption="Start Date"
        />
        <DxColumn
            data-field="end"
            caption="End Date"
        />
    </DxGantt>
    </template>
    <script>
    // ...
    import {
        DxGantt,
        // ...
        DxColumn,
    } from 'devextreme-vue/gantt';

    export default {
        components: {
            DxGantt,
            // ...
            DxColumn,
        },
        // ...
    };
    </script>

##### React

    <!-- tab: App.js -->
    import Gantt, {
        // ... 
        Column,
    } from 'devextreme-react/gantt';

    function App() {
        return (
            <Gantt ... >
                <Column dataField="title" caption="Subject" width={300} />
                <Column dataField="start" caption="Start Date" />
                <Column dataField="end" caption="End Date" />
            </Gantt>
        );
    }

    export default App;

---