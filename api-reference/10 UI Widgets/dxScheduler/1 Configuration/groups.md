---
default: []
type: Array
---
---
##### shortDescription
Specifies the [resource kinds](/Documentation/Guide/UI_Widgets/Scheduler/Resources/#Resources) by which the scheduler's appointments are grouped in a timetable.

---
The array elements should be strings specifying the **field** field of the resource kind objects.

    <!--JavaScript-->var resources = [
        { field: 'room', dataSource: roomsDataSource },
        { field: 'teacher', dataSource: teachersDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        groups: ['room', 'teacher']
        //...
    }

To group appointments by resources of one kind, for instance to group appointments that use particular rooms in an office, assign an array with a single element to the **groups** option. To group appointments by several resource kinds, assign an array of elements. Each element will represent a resource by which appointments will be grouped. Each resource will be nested to the resource represented by the previous element in the **groups** array.



<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergroupedappointments" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>