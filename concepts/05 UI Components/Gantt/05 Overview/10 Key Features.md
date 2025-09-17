- **Task Creation**    
You can specify tasks in the Gantt [data source](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#dataSource) or enable the component's [editing](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/) tools to create tasks.

- **Task Types**    
Gantt supports tasks of multiple types:
    - **Regular Tasks**    
    Regular tasks display information such as duration ([start](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#startExpr) and [end](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#endExpr) dates), [progress](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#progressExpr), [dependencies](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/), and [resource assignments](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/). You can also specify a [task template](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate) to display custom markup.
    - **Milestone Tasks**    
    Tasks without duration are milestones. You can implement these tasks to mark important points in your project with diamond shapes.
    - **Nested Tasks**    
    Gantt highlights parent tasks and allows users to hide subtasks with drop-down buttons in the task view.

- **Selection and Editing**    
DevExtreme Gantt supports operations such as task [selection](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection), as well as task, resource, and dependency [addition/deletion](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/).

- **Configurable Task View Columns**    
The component task view displays task data in a list with configurable [columns](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/). You can integrate these columns to display task information as needed. The task view does not scroll with the timeline and allows users to view specified details without horizontal scrolling.  

- **Sorting**    
The Gantt task view supports column [sorting](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/). Users can sort tasks in single or multiple [mode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode). You can also implement [custom sorting logic](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateSortValue) for each task view column.

- **Filtering**    
Users can filter task view columns in [header filters](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/) or a [filter row](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/). Gantt allows you to specify [initial filter values](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValue), as well as [custom filtering logic](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateFilterExpression) for each task view column.

- **Zooming and Scaling**    
DevExtreme Gantt calculates an appropriate [zoom level](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType) automatically based on displayed tasks. You can also configure a zoom level manually, as well as specify [min/max zoom levels](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/).

- **Strip Lines**    
You can implement [strip lines](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/) to highlight important points of time for your project.

- **Validation**    
Gantt ships with configurable [task validation](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/validation/) capabilities.

- **Data Exporting**    
You can [export Gantt data](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions) as PDF files. For more information, refer to the following help topic: [Gantt - Export Data](/Documentation/Guide/UI_Components/Gantt/Export_Data/).

- **Timeline View Customization**    
You can specify the view's [start](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#startDateRange) and [end](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#endDateRange) dates, as well as configure task [dependency](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showDependencies), [resource](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showResources), and [title](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTitlePosition) visibility.

- **Task Templates**    
You can specify custom markup for task [content](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate) and [tooltips](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTooltipContentTemplate). Gantt also supports templates for task editing tooltips ([time](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTimeTooltipContentTemplate) and [progress](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskProgressTooltipContentTemplate)).