**Dependencies** specify relationships between tasks.

![DevExtreme Gantt Chart - Dependencies](/images/Gantt/Dependency.png)

The **Gantt** widget supports the following dependency types:

- Finish to Start (FS) - The predecessor task's endpoint specifies the successor task's start point. 

    ![DevExtreme Gantt Chart - Finish-To-Start Dependency](/images/Gantt/dependency-type-fs.png)

- Start to Start (SS) - The predecessor task's start point specifies the successor task's start point. 

    ![DevExtreme Gantt Chart - Start-To-Start Dependency](/images/Gantt/dependency-type-ss.png)

- Finish to Finish (FF) - The predecessor task's end point specifies the successor task's end point.

    ![DevExtreme Gantt Chart - Finish-To-Finish Dependency](/images/Gantt/dependency-type-ff.png)

- Start to Finish (SF) - The predecessor task's start point specifies the successor task's end point. 

    ![DevExtreme Gantt Chart - Finish-To-Finish Dependency](/images/Gantt/dependency-type-sf.png)

The **Gantt** widget gets data for dependencies from a data source ([dataSource](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/#dataSource')). Dependency objects from the data source are automatically bound to the widget if these objects have the default 'id', 'type', etc., data fields in their structure. For example:

    {
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    }

The following example illustrates how to bind the widget to dependencies stored in the data source that contains data fields with conventional names:

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'id': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // your code
    ];

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map dependency's id, type, etc.

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                keyExpr: "key",
                type: "dependencyType"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'dependencyType': 0
    },
    // your code
    ];
