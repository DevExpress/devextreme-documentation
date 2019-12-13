After a user clicks an appointment, the **Scheduler** displays a tooltip with two buttons. To delete an appointment, a user clicks the button with a bucket icon. Note that the appointment will be deleted from the [data source](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/').

<div>
    <video width="640px" controls="yes">
        <source src="/Content/images/doc/19_2/UiWidgets/delete_appointment.mp4" type="video/mp4">
    </video>
</div>

If a user deletes a [recurring appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments'), the **Scheduler** displays a dialog that allows choosing between deleting the current appointment and deleting the entire series of recurring appointments. If you do not want this dialog to appear, choose the edit mode beforehand using the [recurrenceEditMode](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceEditMode') option.

---

##### jQuery

    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            recurrenceEditMode: 'occurrence' // or 'series' | 'dialog'
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        recurrenceEditMode="occurrence"> <!-- or 'series' | 'dialog' -->
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

To prevent a user from deleting an appointment, set the **editing**.[allowDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowDeleting') option to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            editing: { allowDeleting: false }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ... >
        <dxo-editing [allowDeleting]="false"></dxo-editing>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---
