A **task** is a unit of work. On the Gantt chart, it displays the following information: 

* Task title.

* Duration (start and end dates).

* Task progress.

* Associated dependencies that specify relationships between tasks.

* Associated resources.

![DevExtreme Gantt Chart - Tasks](/images/Gantt/task.png)

A large task can be divided into **subtasks** that allow you to track the progress. 

![DevExtreme Gantt Chart - Subtasks](/images/Gantt/subtasks.png)

A **milestone** is a task with the same start and endpoint. Milestones can be used as checkpoints for important points in a project.

![DevExtreme Gantt Chart - Milestone](/images/Gantt/milestone.png)

The Gantt gets data for tasks from a data source ([dataSource](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/tasks/#dataSource)). Task objects from the data source are automatically bound to the widget if the task objects have the default 'title', 'start', 'end', etc. data fields in its structure. For example:

    {
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31       
    }

The following example illustrates how to bind the widget to tasks stored in the data source that contains data fields with conventional names:

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks
            },
            // your code
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
    },
    // your code
    ];

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map task title, progress, start/end points, and so on.

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            tasks: {
                dataSource: tasks,
                startExpr: "startDate",
                endExpr: "endDate"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var tasks = [{
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'startDate': new Date('2019-02-21T05:00:00.000Z'),
        'endDate': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31
    },
    // your code
    ];

The list below provides the main members that affect task appearance and functionality.

- [allowSelection](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#allowSelection) - Specifies whether users can select tasks.

        $(function() {
            $("#gantt").dxGantt({
                allowSelection: false
            });
        });

- [scaleType](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#scaleType) - Specifies the zoom level of tasks in the **Gantt** chart.

        $(function() {
            $("#gantt").dxGantt({
                scaleType: 'hours'
            });
        });  

- [showResources](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#showResources) - Specifies whether to display task resources.

        $(function() {
            $("#gantt").dxGantt({
                showResources: false
            });
        });  

- [taskTitlePosition](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#taskTitlePosition) - Specifies a task's title position.

        $(function() {
            $("#gantt").dxGantt({
                taskTitlePosition: 'none'
            });
        });
