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

The Gantt UI component gets data for tasks from a data source ([dataSource](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks/dataSource.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#dataSource')). Task objects from the data source are automatically bound to the UI component if these objects have the default 'title', 'start', 'end', etc., data fields in their structure. For example:

    {
        'id': 1,
        'parentId': 0,
        'title': 'Software Development',
        'start': new Date('2019-02-21T05:00:00.000Z'),
        'end': new Date('2019-07-04T12:00:00.000Z'),
        'progress': 31       
    }

---
##### jQuery

The following example illustrates how to bind the UI component to tasks stored in the data source, which contains data fields with conventional names:

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

---

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map task title, progress, start/end points, etc.

---
##### jQuery

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

---

The list below provides the main members that affect task appearance and functionality.

- [allowSelection](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/allowSelection.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection') - Specifies whether users can select tasks.

    ---
    ##### jQuery

        $(function() {
            $("#gantt").dxGantt({
                allowSelection: false
            });
        });

    ---

- [scaleType](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleType.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType') - Specifies the zoom level of tasks in the Gantt chart.

    ---
    ##### jQuery

        $(function() {
            $("#gantt").dxGantt({
                scaleType: 'hours'
            });
        });  

    ---

- [showResources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/showResources.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showResources') - Specifies whether to display task resources.

    ---
    ##### jQuery

        $(function() {
            $("#gantt").dxGantt({
                showResources: false
            });
        });  

    ---

- [taskTitlePosition](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskTitlePosition.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTitlePosition') - Specifies a task's title position.

    ---
    ##### jQuery

        $(function() {
            $("#gantt").dxGantt({
                taskTitlePosition: 'none'
            });
        });

    ---