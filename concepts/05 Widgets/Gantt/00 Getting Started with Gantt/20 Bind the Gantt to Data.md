The **Gantt** widget requires separate data sources for [tasks](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/tasks '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/tasks/'), [resources](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/'), [resource assignments](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/') and [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/'). 

[note]
The **tasks** data source is required, whereas the data sources that contain [resources](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resources/'), [dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/'), and [resource assignments](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/resourceAssignments '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/resourceAssignments/') are optional.

The example below illustrates how to bind the **Gantt** widget to the data sources that contain the same field names as the widget uses in its internal binding settings. 

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks
            },
            dependencies: {
                dataSource: dependencies
            },
            resources: {
                dataSource: resources
            },
            resourceAssignments: {
                dataSource: resourceAssignments
            }
            ...
        });
    });

    <!-- tab: data.js -->
    var tasks = [{
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
    }, {
        'id': 2,
        'parentId': 1,
        'title': 'Scope',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-02-26T09:00:00.000Z'),
        'progress': 60
    }, {
        'id': 3,
        'parentId': 2,
        'title': 'Determine project scope',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-02-21T09:00:00.000Z'),
        'progress': 100
    },        
        // ...
    ];

    var dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    }, {
        'id': 1,
        'predecessorId': 2,
        'successorId': 3,
        'type': 0
    }, {
        'id': 2,
        'predecessorId': 3,
        'successorId': 4,
        'type': 0
    },        
        // ...
    ];

    var resources = [{
        'id': 1,
        'text': 'Management'
    }, {
        'id': 2,
        'text': 'Project Manager'
    }, {
        'id': 3,
        'text': 'Analyst'
    },                
        // ...
    ];        

    var resourceAssignments = [{
        'id': 0,
        'taskId': 3,
        'resourceId': 1
    }, {
        'id': 1,
        'taskId': 4,
        'resourceId': 1
    }, {
        'id': 2,
        'taskId': 5,
        'resourceId': 2
    },                        
        // ...
    ];

If your data sources' field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties when you specify the **tasks**, **resources**, **dependencies**, and **resource assignments** configuration options.

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
        tasks: {
            dataSource: tasks,
            keyExpr: "taskId",
            parentIdExpr: "parentTaskId",
            startExpr: "startDate",
            endExpr: "endDate",
            progressExpr: "taskProgress",
            titleExpr: "taskTitle",
            colorExpr: "taskColor"
        },
        dependencies: {
            dataSource: dependencies,
            keyExpr: "depId",
            predecessorIdExpr: "preId",
            successorIdExpr: "sucId",
            typeExpr: "depType"
        },
            ...
        });
    });

    <!-- tab: data.js -->
    var tasks = [{
        'taskId': 1,
        'parentTaskId': 0,
        'taskTitle': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'taskProgress': 31,
        'taskColor': 'red'
    },        
        // ...
    ];

    var dependencies = [{
        'depId': 0,
        'preId': 1,
        'sucId': 2,
        'depType': 0
    },         
        // ...
    ];
