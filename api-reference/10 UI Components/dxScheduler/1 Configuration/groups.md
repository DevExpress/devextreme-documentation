---
id: dxScheduler.Options.groups
type: Array<String>
default: []
---
---
##### shortDescription
Specifies the [resource kinds](/concepts/05%20UI%20Components/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/UI_Components/Scheduler/Resources/Assign_Appointments_to_Resources/') by which the scheduler's appointments are grouped in a timetable.

---
This array should contain one or more values that correspond to the [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr') values of resource kinds:

---

#####jQuery

    <!--JavaScript-->var resources = [
        { fieldExpr: "room", dataSource: roomsDataSource },
        { fieldExpr: "teacher", dataSource: teachersDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        groups: ["room", "teacher"]
        // ...
    }

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [resources]="resources"
        [groups]="['room', 'teacher']">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        // ...
        resources = [
            { fieldExpr: "room", dataSource: this.roomsDataSource },
            { fieldExpr: "teacher", dataSource: this.teachersDataSource }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            :data-source="appointments"
            :groups="groups">
            <DxResource
                :data-source="roomsDataSource"
                field-expr="room"
            />
            <DxResource
                :data-source="teachersDataSource"
                field-expr="teacher"
            />
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                dataSource: [ ... ],
                groups: ['room', 'teacher'],
                roomsDataSource: [ ... ],
                teachersDataSource: [ ... ]
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler, { Resource } from 'devextreme-react/scheduler';

    const App = () => {
        const appointments = [ ... ];
        const roomsDataSource = [ ... ];
        const teachersDataSource = [ ... ];
        const groups = ['room', 'teacher'];

        return (
            <Scheduler ...
                dataSource={appointments}
                groups={groups}>
                <Resource
                    dataSource={roomsDataSource}
                    fieldExpr="room"
                />
                <Resource
                    dataSource={teachersDataSource}
                    fieldExpr="teacher"
                />
            </Scheduler>
        );
    }

    export default App;

---

To group appointments by resources of one kind, for instance to group appointments that use particular rooms in an office, assign an array with a single element to the **groups** property. To group appointments by several resource kinds, assign an array of elements. Each element will represent a resource by which appointments will be grouped. Each resource will be nested to the resource represented by the previous element in the **groups** array.



#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/"
}
