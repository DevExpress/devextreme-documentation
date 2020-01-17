
<note> Resources and resource assignments are optional in the Gantt control.

<note> 
Resources and resource assignments are optional in the Gantt control.
Resources and resource assignments are optional in the Gantt control.
Resources and resource assignments are optional in the Gantt control.

**Resources** specify people responsible for tasks, equipment, materials, etc.

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

Use the [showResources](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#showResources) to specify whether the **Gantt** widget hides resources or displays them as task labels

    $(function() {
        $("#gantt").dxGantt({
            showResources: false
        });
    }); 

**Resource assignments** specify which resources are assigned to tasks. You can assign multiple resources to a task.

![DevExtreme Gantt Chart - Resource Assignments(~/images/Gantt/resource-assignments.png)

The **Gantt** widget gets data for resources and resource assignments from data sources.

- Resources: [dataSource](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/#dataSource)

- Resource Assignments: [dataSource](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/#dataSource) 

Objects from the data sources are automatically bound to the widget if the these objects have the default data fields in its structure. For example:

    // Resource
    {        
        'id': 1,
        'text': 'Management'       
    }
    // Resource Assignment
    {        
        'id': 0,
        'taskId': 3,
        'resourceId': 1
    }
The following example illustrates how to bind the widget to resources and resource assignments stored in the data sources that contains data fields with conventional names:

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources
            },
            resourceAssignments: {
                dataSource: resourceAssignments
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var resources = [{
        'id': 1,
        'text': 'Management'
    },
    // your code
    ];
    var resourceAssignments = [{
        'id': 0,
        'taskId': 3,
        'resourceId': 1
    },
    // your code
    ];

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map resources and resource assignments fields.

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            resources: {
                dataSource: resources,
                textExpr: "title"
            },
            resourceAssignments: {
                dataSource: resourceAssignments,
                taskIdExpr: "taskKey"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var resources = [{
        'key': 1,
        'title': 'Management'
    },
    // your code
    ];
    var resourceAssignments = [{
        'id': 0,
        'taskKey': 3,
        'resourceId': 1
    },
    // your code
    ];
