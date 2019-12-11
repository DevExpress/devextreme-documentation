Appointments can be modified by end users in the UI and programmatically in code.

####Modify Appointments in UI####

You can modify an appointment using one of the following techniques.

- To change an appointment's start and end date/time, move the appointment by dragging it to another place within the scheduler view. 

- To change an appointment's start or end time, stretch or tighten the appointment by dragging its top/bottom border within the scheduler timetable column. 

- To change appointment details, click the appointment and then click the **Open appointment** button. In the invoked popup window, apply the required modifications.

All the modifications are saved to the [bound data source](/concepts/05%20Widgets/Scheduler/20%20Appointments/010%20Provide%20a%20Data%20Source.md '/Documentation/Guide/Widgets/Scheduler/Appointments/#Provide_a_Data_Source').

<div>
    <video width="640px" controls="yes">
        <source src="/Content/images/doc/16_2/UiWidgets/EditAppointment.mp4" type="video/mp4">
    </video>
</div>

[note]By default, when you are working with an appointment using a UI, the fields displaying start date and end date timezones are not available. To show them, you can add the following code to the scheduler's options.

    <!--JavaScript-->
    var schedulerOptions = {
        . . .
        onAppointmentFormCreated: function(arg) {
            var form = arg.form;
            form.itemOption("startDateTimeZone", { visible: true });
            form.itemOption("endDateTimeZone", { visible: true });
        }
    }

[note]When you are modifying a recurring appointment using a UI, the Scheduler prompts you to edit only the active appointment or the entire series.

By default, if you are modifying a recurring appointment using a UI, the widget displays a dialog that prompts you to edit only the active appointment or the entire series. To change this behavior, assign the required value to the [recurrenceEditMode](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/recurrenceEditMode.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceEditMode') option. The option accepts the following values.

- **dialog**  
Displays a dialog that suggests to a user to choose between editing an entire series or only the current appointment.
- **series**  
Enables an end-user to edit only the entire appointment series.
- **occurrence**  
Enables an end-user to edit only the current appointment.

####Modify Appointments in Code####

To modify an appointment in code, use the widget's [updateAppointment(target, appointment)](/api-reference/10%20UI%20Widgets/dxScheduler/3%20Methods/updateAppointment(target_appointment).md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#updateAppointmenttarget_appointment') method passing the appointment object to be updated and an updated appointment object as parameters. This method updates the appointment in the bound [data source](/concepts/05%20Widgets/Scheduler/20%20Appointments/010%20Provide%20a%20Data%20Source.md '/Documentation/Guide/Widgets/Scheduler/Appointments/#Provide_a_Data_Source').

In addition, you can handle the [appointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdating') and [appointmnetUpdated](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdated') events raised before and after you insert an updated appointment to the data source.