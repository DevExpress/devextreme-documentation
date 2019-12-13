---
id: dxScheduler.Options.groups
type: Array<String>
default: []
---
---
##### shortDescription
Specifies the [resource kinds](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/') by which the scheduler's appointments are grouped in a timetable.

---
This array should contain one or more values that correspond to the [fieldExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr') values of resource kinds:

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
    
---

To group appointments by resources of one kind, for instance to group appointments that use particular rooms in an office, assign an array with a single element to the **groups** option. To group appointments by several resource kinds, assign an array of elements. Each element will represent a resource by which appointments will be grouped. Each resource will be nested to the resource represented by the previous element in the **groups** array.



#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/"
}