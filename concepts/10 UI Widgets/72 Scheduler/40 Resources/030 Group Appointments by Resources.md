You can configure the scheduler area so that all appointments are grouped by their resources. For this purpose, specify the widget's [groups](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/groups.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups') option. This option takes on an array to allow you to define grouping with several levels. This is appropriate when appointment use several kinds of resources.

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
        { fieldExpr: 'person', dataSource: teachersDataSource }
    ];
    var schedulerOptions = {
        dataSource: appointments,
        resources: resources,
        groups: ['room','person'],
        //...
    }

![Scheduler Grouping by Resources](/images/UiWidgets/Scheduler_ResourceGroups.png)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergroupedappointments" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>