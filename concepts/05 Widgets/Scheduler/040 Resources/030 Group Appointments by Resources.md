To group appointments by resources, assign an array to the [groups](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/groups.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups') option. Each element of this array is **fieldExpr** of a resource kind. Note that the resource headers' order depends on the resources' order in the [resources](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/') array. 

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{ 
        roomId: 1,   
        teacherId: 2,    
        text: "Meeting",
        // ...
    }, 
    // ...
    ];

    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource }
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            resources: resources,
            // Groups appointments by rooms and by teachers
            groups: ['roomId', 'teacherId']
            //...
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="appointments"
        [groups]="['roomId', 'teacherId']"> <!-- Groups appointments by rooms and by teachers -->
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="roomResources">
        </dxi-resource>
        <dxi-resource
            fieldExpr="teacherId"
            [dataSource]="teacherResources">
        </dxi-resource>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  { 
        // ...
        appointments = [{ 
            roomId: 1,   
            teacherId: 2,    
            text: "Meeting",
            // ...
        }, 
        // ...
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

![Scheduler Grouping by Resources](/images/UiWidgets/Scheduler_ResourceGroups.png)

You can change resource headers' orientation in an individual view using the **views**.[groupOrientation](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/groupOrientation.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#groupOrientation') option. In the following code, the orientation in the **day** view is *"vertical"*, so that resource headers are arranged in a column:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ["month", {
                type: "day",
                groupOrientation: "vertical"
            }]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        views = ["month", {
            type: "day",
            groupOrientation: "vertical"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler ... 
        [views]="views">
    </dx-scheduler>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/"
}

#####See Also#####
- [Assign Appointments to Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/')
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, resources, group by resources
