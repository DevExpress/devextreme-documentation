- Task Creation

- **Task Selection and Editing**    
DevExtreme Gantt supports configurable selection and editing operations. Specify which of these operations are available to users by configuring [allowSelection](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection) and [editing](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/) properties.

- **Task Types**    
Gantt supports tasks of multiple types:
    - **Regular Tasks**    

    - **Milestone tasks**    
    The component displays milestone tasks as diamond shapes. Assign the same value to the *"start"* and *"end"* fields of a **tasks**.[dataSource](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#dataSource) item to create a milestone task.
    - **Nested tasks**    
    Gantt highlights parent tasks and allows users to hide subtasks with a button. Assign different *"parentId"* values to items in **tasks**.**dataSource** to nest tasks:

            const tasks = [{
                id: 1,
                parentId: 0,
                title: 'Software Development',
            }, {
                id: 2,
                parentId: 1,
                title: 'Sprint Planning',
            }]

- **Task Information**    
The Gantt component can display task information such as [progress](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/tasks/#progressExpr), [dependencies](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/dependencies/), and [resources](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/resources/). Specify [taskContentTemplate](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate) to display additional task data. 

- **Customizable Columns**    
You can customize the component column view in the [columns](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/) array. Gantt allows users to filter columns in [headerFilters](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/headerFilter/) and a [filterRow](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/). You can also [sort](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/) columns in single or multiple [mode](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/sorting/#mode).

- **Data Exporting**    
Gantt supports data exporting in the PDF format. Implement the [exportGantt](/Documentation/ApiReference/Common/Utils/pdfExporter/#exportGanttoptions) method in your application to export Gantt data. For more information, refer to the following help topic: [Gantt - Export Data](/Documentation/Guide/UI_Components/Gantt/Export_Data/).

- **View Customization**    
Configure the following properties to customize the component's timeline view:
    - [firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#firstDayOfWeek)    
    Specifies the first week day.
    - [endDateRange](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#endDateRange)    
    Defines the end value of the Gantt date range.
    - [startDateRange](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#startDateRange)    
    Sets the start value of the Gantt date range.
    - [scaleType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType) and [scaleTypeRange](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/)    
    Configure zoom settings.
    - [stripLines](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/)    
    Add reference lines at specified date points.

- **Component Customization**    
Specify the following properties to customize Gantt visual elements:
    - [taskContentTemplate](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskContentTemplate)
    - [taskListWidth](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskListWidth)
    - [taskTitlePosition](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTitlePosition)
    - [taskTooltipContentTemplate](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#taskTooltipContentTemplate)
    - [showResources](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showResources)
    - [showDependencies](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#showDependencies)