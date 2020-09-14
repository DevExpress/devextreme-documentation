---
id: dxScheduler.Options.onAppointmentFormOpening
type: function(e)
default: null
EventForAction: dxScheduler.appointmentFormOpening
---
---
##### shortDescription
A function that is executed before an appointment details form is opened.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The data of the appointment for which a form is opened.

##### field(e.cancel): Boolean
Set this field to **true** to prevent the appointment details form from opening.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.form): dxForm
The form's instance; created only once - when the function is executed for the first time.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
The appointment details form contains the [Form](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/') widget whose instance is passed to this function in the **form** field. Use the [widget's API](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/') to customize the appointment details form.

The following code shows how to use the **onAppointmentFormOpening** function to customize a form item (`startDate`), make hidden items visible (`startDateTimeZone` and `endDateTimeZone`), and add a new form item (`location`). Note that in the last case, the array of [form items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') should be checked to ensure that it does not already contain an item with the same data field.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "His Girl Friday",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20),
                location: "Minnesota"
            }, // ...
            ],
            currentDate: new Date(2016, 4, 24),
            onAppointmentFormOpening: function (e) {
                var form = e.form,
                    formItems = form.option("items");
                form.itemOption("startDate", {
                    helpText: "Select a date between May 11 and 27",
                    editorOptions: {
                        min: new Date(2016, 4, 11),
                        max: new Date(2016, 4, 27),
                        type: 'datetime'
                    }
                });
                form.itemOption("startDateTimeZone", { visible: true });
                form.itemOption("endDateTimeZone", { visible: true });
                if (!formItems.find(function(i) { return i.dataField === "location" })) {
                    formItems.push({
                        label: { text: "Location" },
                        editorType: "dxTextBox",
                        dataField: "location"
                    });
                    form.option("items", formItems);
                }
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "His Girl Friday",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            location: "Minnesota"
        }, // ...
        ];
        currentDate = new Date(2016, 4, 24);
        onAppointmentFormOpening (e) {
            let form = e.form
                formItems = form.option("items");
            form.itemOption("startDate", {
                helpText: "Select a date between May 11 and 27",
                editorOptions: {
                    min: new Date(2016, 4, 11),
                    max: new Date(2016, 4, 27),
                    type: 'datetime'
                }
            });
            form.itemOption("startDateTimeZone", { visible: true });
            form.itemOption("endDateTimeZone", { visible: true });
            if (!formItems.find(i => i.dataField === "location")) {
                formItems.push({
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

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        (onAppointmentFormOpening)="onAppointmentFormOpening($event)">
    </dx-scheduler>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}


#####See Also#####
- [Form - Change Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/05%20Widget%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Widget_Options/')
