In the **Scheduler** widget, a resource must be defined using the following set of fields.

- **id**  
A unique resource identifier - a number or GUID.
- **text**  
A resource name.
- **color**  
A color for indicating the appointments using this resource.

Here is an example.

    <!--JavaScript-->var rooms = [
        { id: 1, text: 'Room1', color: 'red' },
        { id: 2, text: 'Room2', color: 'blue' },
        { id: 3, text: 'Room3', color: 'green' }
    ]

The resources belonging to one kind of resources (e.g. all the rooms) must be specified as a data source of this resource kind. For this purpose, use the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource') option of the object defining a resource kind. This option takes on an array of resource objects, as well as a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object or its configuration.

    <!--JavaScript-->var roomResource = {
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: "array",
                key: "id",
                data: rooms
            }
        }),
        //...
    }

To specify the resource kinds that must be available in your **Scheduler** widget, assign as array of resource kind objects to the widget's [resources](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/') option.

    <!--JavaScript-->var schedulerOptions = {
        //...
        resources: [ roomResource, teacherResource ]
        //...
    }

