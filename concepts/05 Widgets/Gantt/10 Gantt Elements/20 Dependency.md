**Dependencies** specify relationships between tasks.

![DevExtreme Gantt Chart - Dependencies](/images/Gantt/Dependency.png)

The Gantt supports the following dependency types:

<div class="simple-table">
    <table>
        <tr>
          <th style="width:20%">Dependency Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Finish to Start (FS)</td>
          <td>The predecessor task's endpoint specifies the successor task's start point. <br/> 
          ![](/images/Gantt/dependency-type-fs.png)
          </td>
        </tr>
        <tr>
          <td>Start to Start (SS)</td>
          <td>The predecessor task's start point specifies the successor task's start point. <br/> 
          ![](~/images/Gantt/dependency-type-ss.png)
          </td>
        </tr>
        <tr>
          <td>Finish to Finish (FF)</td>
          <td>The predecessor task's end point specifies the successor task's end point. <br/> 
          ![](~/images/Gantt/dependency-type-ff.png)
          </td>
        </tr>
        <tr>
          <td>Start to Finish (SF)</td>
          <td>The predecessor task's start point specifies the successor task's end point. <br/> 
          ![](~/images/Gantt/dependency-type-sf.png)
          </td>
        </tr>
    </table>
</div>

The Gantt gets data for tasks from a data source ([dataSource](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/#dataSource)). Dependency objects from the data source are automatically bound to the widget if the these objects have the default 'id', 'type', etc. data fields in its structure. For example:

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

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** properties to map dependency's id, type, and so on.

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
