[note]
Resources and resource assignments are optional in the Gantt UI component.

**Resources** specify people responsible for tasks, equipment, materials, etc.

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

Use the [showResources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/showResources.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showResources') property to specify whether the Gantt UI component hides resources or displays them as task labels.

---
##### jQuery

    $(function() {
        $("#gantt").dxGantt({
            showResources: false
        });
    }); 

---

**Resource assignments** specify which resources are assigned to tasks. You can assign multiple resources to a task.

![DevExtreme Gantt Chart - Resource Assignments](/images/Gantt/resource-assignments.png)

The Gantt UI component gets data for resources and resource assignments from the following data sources:

- Resources: [dataSource](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/#dataSource')

- Resource Assignments: [dataSource](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resourceAssignments/dataSource.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resourceAssignments/#dataSource') 

The objects from the data sources are automatically bound to the UI component if these objects have the default data fields in its structure. For example:

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

---
##### jQuery

The following example illustrates how to bind the UI component to resources and resource assignment objects stored in the data sources that contain data fields with conventional names:

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

---

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map resources and resource assignments fields.

---
##### jQuery

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

---