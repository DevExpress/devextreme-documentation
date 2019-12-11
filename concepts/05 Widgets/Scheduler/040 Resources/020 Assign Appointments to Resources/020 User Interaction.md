The **Scheduler** shows all available resource kinds in the appointment details form. By default, the widget allows a user to assign only a single resource of one kind. 

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_SelectBox.png)

To allow multiple resources, assign **true** to the [allowMultiple](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/allowMultiple.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#allowMultiple') option of the corresponding resource kind. 

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource, allowMultiple: true }
    ];

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_Details.png)

#####See Also#####
- [Scheduler - Group Appointments by Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/')
- [Scheduler - Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')