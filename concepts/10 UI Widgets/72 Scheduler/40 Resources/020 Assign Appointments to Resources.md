Each appointment in the **Scheduler** widget can be associated with one or several resources of one or several resource kinds. To associate an appointment with a resource, the object defining the corresponding resource kind must have the [fieldExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr') field. In this instance, you can refer an appointment to a resource of this resource kind by adding a data source field with the name specified by the resource kind object's **fieldExpr** field.

    <!--JavaScript-->var appointments = [
        { 
            room: 1,
            person: 5,
            text: "Meeting",
            //...
        },
        //...
    ];
    var resources = [
        { fieldExpr: 'room', dataSource: roomsDataSource },
        { fieldExpr: 'person', dataSource: personsDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        //...
    }

The following image illustrates an appointment colored to different colors, which indicates their relation to the resources with corresponding colors.

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_ColorResourceIndication.png)

In case appointments in your scheduler use several resource kinds, specify the resource kind whose color will "win". For this purpose, set the [useColorAsDefault](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/useColorAsDefault.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#useColorAsDefault') field of the "winning" resource kind to *true*.

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'room', dataSource: roomsDataSource, useColorAsDefault: true },
        { fieldExpr: 'person', dataSource: personsDataSource }
    ];

An end user can assign required resources to an appointment as well, since all the available resource kinds are provided in an appointment detail window. You can set custom names for the resource fields in the appointment detail window by using the **label** field of resource kind objects.

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'room', label: 'Room', dataSource: roomsDataSource, useColorAsDefault: true },
        { fieldExpr: 'person', label: 'Person', dataSource: personsDataSource }
    ];

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_Details.png)

By default multiple resources of a particular resource kind can be assigned to an appointment in a UI. You can prohibit this behavior by setting the [allowMultiple](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/allowMultiple.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#allowMultiple') option to *false*.

    <!--JavaScript-->
    var resources = [
        { fieldExpr: 'room', label: 'Room', allowMultiple: false, dataSource: roomsDataSource, useColorAsDefault: true },
        { fieldExpr: 'person', label: 'person', allowMultiple: false, dataSource: personsDataSource }
    ];

![Scheduler Appointment Resources](/images/UiWidgets/Scheduler_Resources_SelectBox.png)