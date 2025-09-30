- **Task Creation**    
You can specify tasks in the Gantt [data source](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks/dataSource.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#dataSource') or enable the component's [editing](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/') tools to create tasks.

- **Task Types**    
Gantt supports multiple [task](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/10%20Task.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/#Task') types:
    - **Regular Tasks**    
    Regular tasks display information such as duration ([start](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks/startExpr.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#startExpr') and [end](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks/endExpr.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#endExpr') dates), [progress](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks/progressExpr.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#progressExpr'), [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/'), and [resource assignments](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/'). You can also specify a [task template](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskContentTemplate.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate') to display custom markup.
    - **Milestone Tasks**    
    Tasks without duration are milestones. You can implement these tasks to mark important points in your project with diamond shapes.
    - **Nested Tasks**    
    Gantt highlights parent tasks and allows users to hide subtasks with drop-down buttons in the task view.

- **Selection and Editing**    
DevExtreme Gantt supports operations such as task [selection](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/allowSelection.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection'), as well as task, resource, and dependency [addition/deletion](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/').

- **Configurable Task View Columns**    
The component task view displays task data in a list with configurable [columns](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/'). You can integrate these columns to display task information. The task view does not scroll with the timeline and allows users to view details without horizontal scrolling.  

- **Sorting**    
The Gantt task view supports column [sorting](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/sorting.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/'). Users can sort tasks in single or multiple [mode](/api-reference/_hidden/dxGanttSorting/mode.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode'). You can also implement [custom sorting logic](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateSortValue') for each task view column.

- **Filtering**    
Users can filter task view columns in [header filters](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/headerFilter.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/') or a [filter row](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/filterRow.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/'). Gantt allows you to specify [initial filter values](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/columns/filterValue.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValue'), as well as [custom filtering logic](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateFilterExpression') for each task view column.

- **Zooming and Scaling**    
DevExtreme Gantt calculates an appropriate [zoom level](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleType.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType') automatically based on displayed tasks. You can also configure a zoom level, as well as specify [min/max zoom levels](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleTypeRange '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/').

- **Strip Lines**    
You can implement [strip lines](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/stripLines.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/') to highlight important points of time for your project.

- **Validation**    
Gantt ships with configurable [task validation](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/validation '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/validation/') capabilities.

- **Data Exporting**    
You can [export Gantt data](/api-reference/50%20Common/utils/pdfExporter/exportGantt(options).md '/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions') as PDF files. For more information, refer to the following help topic: [Gantt - Export Data](/concepts/05%20UI%20Components/Gantt/50%20Export%20Data.md '/Documentation/Guide/UI_Components/Gantt/Export_Data/').

- **Timeline View Customization**    
You can specify the view's [start](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/startDateRange.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#startDateRange') and [end](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/endDateRange.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#endDateRange') dates, as well as configure task [dependency](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/showDependencies.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showDependencies'), [resource](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/showResources.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showResources'), and [title](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskTitlePosition.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTitlePosition') visibility.

- **Task Templates**    
You can specify custom markup for task [content](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskContentTemplate.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate') and [tooltips](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskTooltipContentTemplate.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTooltipContentTemplate'). Gantt also supports templates for task editing tooltips ([time](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskTimeTooltipContentTemplate.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTimeTooltipContentTemplate') and [progress](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/taskProgressTooltipContentTemplate.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskProgressTooltipContentTemplate')).