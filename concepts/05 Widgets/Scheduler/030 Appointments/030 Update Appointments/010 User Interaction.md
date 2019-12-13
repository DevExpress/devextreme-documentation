An end user can update an appointment in one of the following ways.

- Reschedule an appointment by moving it to another cell.
- Extend or shorten an appointment by dragging its top or bottom border.
- Change the appointment details by focusing the appointment and clicking "Open Appointment" afterwards.

<div>
    <video width="640px" controls="yes">
        <source src="/Content/images/doc/19_2/UiWidgets/edit_appointment.mp4" type="video/mp4">
    </video>
</div>

When a user finishes updates, they are saved to the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/'). 

If a user updates a [recurring appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments'), the **Scheduler** displays a dialog that allows choosing between editing the current appointment and editing the entire series of recurring appointments. If you do not want this dialog to appear, choose the edit mode beforehand using the [recurrenceEditMode](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceEditMode') option.

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

To prevent a user from updating an appointment, set the **editing**.[allowUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowUpdating') option to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            editing: { allowUpdating: false }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ... >
        <dxo-editing [allowUpdating]="false"></dxo-editing>
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
