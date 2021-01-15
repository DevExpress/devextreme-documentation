The **Scheduler** shows all available resource kinds in the appointment details form. By default, the UI component allows a user to assign only a single resource of one kind. 

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_SelectBox.png)

To allow multiple resources, assign **true** to the [allowMultiple](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/allowMultiple.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#allowMultiple') property of the corresponding resource kind. 

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource, allowMultiple: true }
    ];

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_Details.png)

#####See Also#####
- [Scheduler - Group Appointments by Resources](/concepts/05%20UI%20Components/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/')
- [Scheduler - Customize Resource Headers](/concepts/05%20UI%20Components/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')