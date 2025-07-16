---

##### jQuery

To customize an individual view, specify a configuration object in the [views[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/) array. Assign a [view type](/Documentation/ApiReference/UI_Components/dxScheduler/Types/#ViewType) value to the **views**.[type](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type) property to define which view is customized. Specify  **views[]** properties to implement your changes.

The following code snippet customizes the *"day"* and *"workWeek"* views. This example groups appointments by a [resource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/) in the *"workWeek"* view. For more information about appointment grouping, refer to the following topic: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/).

    <!-- tab: index.js -->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            views: [{
                type: "day",
                cellDuration: 60,
                timeCellTemplate: function(data, index, element) {
                    element.text(data.text)
                        .css('color', 'green')
                        .css('font-style', 'italic');
                }
            }, {
                type: "workWeek",
                groups: ["ownerId"]
            }],
            resources: [{ fieldExpr: "ownerId", dataSource: resources }]
        });
    });

To add a view without customizations, you can specify **ViewType** values in the **views** array:

    <!-- tab: index.js -->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            views: ["day", "workWeek"],
        });
    });

##### Angular

To customize an individual view, specify a `<dxi-view>` configuration component. Assign a [view type](/Documentation/ApiReference/UI_Components/dxScheduler/Types/#ViewType) value to the [views](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/).[type](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type) property to define which view is customized. Specify  **views[]** properties to implement your changes.

The following code snippet customizes the *"day"* and *"workWeek"* views. This example groups appointments by a [resource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/) in the *"workWeek"* view. For more information about appointment grouping, refer to the following topic: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/).

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxi-resource
            fieldExpr="ownerId"
            [dataSource]="employees">
        </dxi-resource>
        <dxi-view type="day"
            [cellDuration]="60"
            timeCellTemplate="timeCellTemplate">
        </dxi-view>
        <dxi-view type="workWeek" [groups]="['ownerId']"></dxi-view>
        <div *dxTemplate="let data of 'timeCellTemplate'">
            <i style="color: green">{{data.text}}</i>
        </div>
    </dx-scheduler>

To add a view without customizations, specify only the **views**.**type** property:

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxi-view type="day"></dxi-view>
        <dxi-view type="workWeek"></dxi-view>
    </dx-scheduler>

##### Vue

To customize an individual view, specify a `<DxView>` configuration component. Assign a [view type](/Documentation/ApiReference/UI_Components/dxScheduler/Types/#ViewType) value to the [views](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/).[type](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type) property to define which view is customized. Specify  **views[]** properties to implement your changes.

The following code snippet customizes the *"day"* and *"workWeek"* views. This example groups appointments by a [resource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/) in the *"workWeek"* view. For more information about appointment grouping, refer to the following topic: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/).

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxResource
                field-expr="ownerId"
                :data-source="employees"
            />
            <DxView type="day"
                :cell-duration="60"
                time-cell-template="time-cell"
            />
            <DxView type="workWeek" :groups="['ownerId']" />
            <template #time-cell="{ data }">
                <i style="color: green">{{data.text}}</i>
            </template>
        </DxScheduler>
    </template>

    <script>
    import { DxScheduler, DxResource, DxView } from 'devextreme-vue/scheduler';
    import 'devextreme/dist/css/dx.light.css';

    </script>

To add a view without customizations, specify only the **views**.**type** property:

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxView type="day" />
            <DxView type="workWeek" />
        </DxScheduler>
    </template>

##### React

To customize an individual view, specify a `<View>` configuration component. Assign a [view type](/Documentation/ApiReference/UI_Components/dxScheduler/Types/#ViewType) value to the [views](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/).[type](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type) property to define which view is customized. Specify  **views[]** properties to implement your changes.

The following code snippet customizes the *"day"* and *"workWeek"* views. This example groups appointments by a [resource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/) in the *"workWeek"* view. For more information about appointment grouping, refer to the following topic: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/).

    <!-- tab: App.tsx -->
    import { Scheduler, Resource, View } from 'devextreme-react/scheduler';
    import 'devextreme/dist/css/dx.light.css';

    function renderTimeCell(data: {text: string}): JSX.Element {
        return (
            <i style="color: green">{data.text}</i>
        );
    }

    function App() {
        return (
            <Scheduler ... >
                <Resource
                    fieldExpr="ownerId"
                    dataSource={employees}
                />
                <View type="day"
                    cellDuration={60}
                    timeCellRender={renderTimeCell}
                />
                <View type="workWeek" groups={['ownerId']} />
            </Scheduler>
        );
    }

To add a view without customizations, specify only the **views**.**type** property:

    <!-- tab: App.tsx -->
    function App() {
        return (
            <Scheduler ... >
                <View type="day" />
                <View type="workWeek" />
            </Scheduler>
        );
    }

---

[note] Properties defined in the **views[]** array override their corresponding properties specified in the component configuration. For instance, **views**.[firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#firstDayOfWeek) overrides the [firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#firstDayOfWeek) property.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/",
    name: "Customize Individual Views"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/IncreaseViewDuration/",
    name: "Increase View Duration"
}

#####See Also#####
- [Scheduler - View Types](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/')
- [Scheduler - Customize Appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, customize individual view
