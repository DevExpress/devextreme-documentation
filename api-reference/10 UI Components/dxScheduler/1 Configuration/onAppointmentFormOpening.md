---
id: dxScheduler.Options.onAppointmentFormOpening
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an appointment details form appears. Use this function to customize the form.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
The data of the appointment for which a form is opened.

##### field(e.cancel): Boolean
If **true**, prevents the user from opening the appointment details form.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.form): dxForm
The form's instance; created only once - when the function is executed for the first time.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.popup): dxPopup
The instance of the popup that contains the form.

---
The Scheduler displays the appointment details form inside a popup. The elements inside the form are the [Form](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/') and [Popup](/concepts/05%20UI%20Components/Popup/00%20Getting%20Started%20with%20Popup '/Documentation/Guide/UI_Components/Popup/Getting_Started_with_popup/') UI components. Use the **onAppointmentFormOpening** function's **form** and **popup** fields and the [Form](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') and [Popup API](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/') to access and customize the corresponding UI component.

The form organizes its items into two groups:

<table class="dx-table">
    <tr>
        <th>Group name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>mainGroup</td>
        <td>Contains form fields that define main appointment parameters (for example, subject, and description).</td>
    </tr>
    <tr>
        <td>recurrenceGroup</td>
        <td>Contains form fields that define appointment recurrence parameters.</td>
    </tr> 
</table>

The table below lists 'mainGroup' editor names:

<table class="dx-table">
    <tr>
        <th>Editor Caption on a Form</th>
        <th>Editor Name</th>
    </tr>
    <tr>
        <td>Subject</td>
        <td>'text'. Corresponds to the <a href="https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#text" target="_blank">SchedulerAppointment.text</a> property.</td>
    </tr>
    <tr>
        <td>Start Date</td>
        <td>'startDate'. Corresponds to the <a href="https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate" target="_blank">SchedulerAppointment.startDate</a> property.</td>
    </tr>
    <tr>
        <td>End Date</td>
        <td>'endDate'. Corresponds to the <a href="https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate" target="_blank">SchedulerAppointment.endDate</a> property.</td>
    </tr>
    <tr>
        <td>All Day</td>
        <td>'allDay'. Corresponds to the <a href="https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay" target="_blank">SchedulerAppointment.allDay</a> property.</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>'description'. Corresponds to the <a href="https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#description" target="_blank">SchedulerAppointment.description</a> property.</td>
    </tr>
</table>

You can add a custom item to any group or create an ungrouped item and display it under the groups. If you use the **[fieldName]Expr** properties to map custom items to data fields, use these property values to access the items on the appointment form.

![DevExtreme Scheduler onAppointmentFormOpening](/images/UiWidgets/Scheduler_onAppointmentFormOpening.png)

The code below adds a new form item (`phone`) to the `mainGroup` and creates an ungrouped item (`location`). Check the array of [form items](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') to ensure that it does not contain an item with the same data field. 

The `mainGroup` consists of two columns. A custom item's [colSpan](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/colSpan.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#colSpan') property value is 2. This means that the custom item spans two columns. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Attend the conference",
                startDate: new Date(2020, 4, 24, 9, 10),
                endDate: new Date(2020, 4, 24, 11, 20),
            }],
            currentDate: new Date(2020, 4, 24),

            onAppointmentFormOpening: function(e) {
                e.popup.option('showTitle', true);
                e.popup.option('title', e.appointmentData.text ? 
                    e.appointmentData.text : 
                    'Create a new appointment');

                const form = e.form;
                let mainGroupItems = form.itemOption('mainGroup').items; 
                if (!mainGroupItems.find(function(i) { return i.dataField === "phone" })) {
                    mainGroupItems.push({
                        colSpan: 2, 
                        label: { text: "Phone Number" },
                        editorType: "dxTextBox",
                        dataField: "phone"
                    });
                    form.itemOption('mainGroup', 'items', mainGroupItems);
                }
        
                let formItems = form.option("items"); 
                if (!formItems.find(function(i) { return i.dataField === "location" })) {
                    formItems.push({
                        colSpan: 2,
                        label: { text: "Location" },
                        editorType: "dxTextBox",
                        dataField: "location"
                    });
                    form.option("items", formItems);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        (onAppointmentFormOpening)="onAppointmentFormOpening($event)">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "Attend the conference",
            startDate: new Date(2020, 4, 24, 9, 10),
            endDate: new Date(2020, 4, 24, 11, 20),
        }];
        currentDate = new Date(2020, 4, 24);
        
        onAppointmentFormOpening(e) {
            e.popup.option('showTitle', true);
            e.popup.option('title', e.appointmentData.text ? 
                e.appointmentData.text : 
                'Create a new appointment');

            const form = e.form;
            let mainGroupItems = form.itemOption('mainGroup').items; 
            if (!mainGroupItems.find(function(i) { return i.dataField === "phone" })) {
                mainGroupItems.push({
                    colSpan: 2, 
                    label: { text: "Phone Number" },
                    editorType: "dxTextBox",
                    dataField: "phone"
                });
                form.itemOption('mainGroup', 'items', mainGroupItems);
            }
    
            let formItems = form.option("items"); 
            if (!formItems.find(function(i) { return i.dataField === "location" })) {
                formItems.push({
                    colSpan: 2,
                    label: { text: "Location" },
                    editorType: "dxTextBox",
                    dataField: "location"
                });
                form.option("items", formItems);
            }
        }
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
        <DxScheduler
            :data-source="schedulerData"
            :current-date="currentDate"
            @appointment-form-opening="onAppointmentFormOpening"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                schedulerData: [{
                    text: "Attend the conference",
                    startDate: new Date(2020, 4, 24, 9, 10),
                    endDate: new Date(2020, 4, 24, 11, 20),
                }],
                currentDate: new Date(2020, 4, 24)
            }
        },
        methods: {
            onAppointmentFormOpening(e) {
                e.popup.option('showTitle', true);
                e.popup.option('title', e.appointmentData.text ? 
                    e.appointmentData.text : 
                    'Create a new appointment');

                const form = e.form;
                let mainGroupItems = form.itemOption('mainGroup').items; 
                if (!mainGroupItems.find(function(i) { return i.dataField === "phone" })) {
                    mainGroupItems.push({
                        colSpan: 2, 
                        label: { text: "Phone Number" },
                        editorType: "dxTextBox",
                        dataField: "phone"
                    });
                    form.itemOption('mainGroup', 'items', mainGroupItems);
                }
        
                let formItems = form.option("items"); 
                if (!formItems.find(function(i) { return i.dataField === "location" })) {
                    formItems.push({
                        colSpan: 2,
                        label: { text: "Location" },
                        editorType: "dxTextBox",
                        dataField: "location"
                    });
                    form.option("items", formItems);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import Scheduler from 'devextreme-react/scheduler';

    const dataSource = [{
        text: "Attend the conference",
        startDate: new Date(2020, 4, 24, 9, 10),
        endDate: new Date(2020, 4, 24, 11, 20),
    }];

    class App extends React.Component {
        currentDate = new Date(2020, 4, 24);
        
        onAppointmentFormOpening(e) {
            e.popup.option('showTitle', true);
            e.popup.option('title', e.appointmentData.text ? 
                e.appointmentData.text : 
                'Create a new appointment');
            
            const form = e.form;
            let mainGroupItems = form.itemOption('mainGroup').items;
            if (!mainGroupItems.find(function(i) { return i.dataField === "phone" })) {
                mainGroupItems.push({
                    colSpan: 2, 
                    label: { text: "Phone Number" },
                    editorType: "dxTextBox",
                    dataField: "phone"
                });
                form.itemOption('mainGroup', 'items', mainGroupItems);
            }
    
            let formItems = form.option("items"); 
            if (!formItems.find(function(i) { return i.dataField === "location" })) {
                formItems.push({
                    colSpan: 2,
                    label: { text: "Location" },
                    editorType: "dxTextBox",
                    dataField: "location"
                });
                form.option("items", formItems);
            }
        }

        render() {
            return (
                <Scheduler 
                    dataSource={dataSource}
                    defaultCurrentDate={this.currentDate}
                    onAppointmentFormOpening={this.onAppointmentFormOpening}
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}

#####See Also#####
- [Form - Change Properties at Runtime](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/05%20Form%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Form_Properties/')
