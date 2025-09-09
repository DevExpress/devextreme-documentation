- **Data Binding**    
TagBox supports loading and updating data from different [data source](/Documentation/ApiReference/Data_Layer/DataSource/) types.

- **Tag Creation**    
TagBox supports [custom values](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#acceptCustomValue). You can configure TagBox to update its data source on [custom item creation](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#onCustomItemCreating) or save changes temporarily.

- **Selection Options**    
TagBox supports configurable selection functionality. You can specify the [maximum number of tags](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#maxDisplayedTags) the component displays and [enable selection checkboxes](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls) (including a "Select All" checkbox).

- **Searching and Filtering**    
The TagBox component supports [configurable search functionality](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchEnabled). You can specify a [search mode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchMode), change the component [search delay](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchTimeout), and configure which [item fields to search](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchExpr). TagBox also supports minimum and maximum search query definitions.

- **Grouping**    
You can group items within the TagBox dropdown list. To enable grouping, set [grouped](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#grouped) to `true` and specify **DataSource**.[group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) in the component [dataSource](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#dataSource).

- **Paging**    
DevExtreme TagBox supports paging within the component dropdown list. You can implement this feature to load large data sets in chunks. To enable paging, specify a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance as the TagBox **dataSource** and configure the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) properties.

- **Form Support**    
TagBox is a supported editor type in the DevExtreme [Form](/Documentation/Guide/UI_Components/Form/Overview/) component. To integrate TagBox within a Form, set a Form item's [editorType](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType) property to *"dxTagBox"*.

- **Accessibility and RTL**    
TagBox [conforms](/Documentation/Guide/UI_Components/TagBox/Accessibility/) to WCAG 2.x, European Accessibility Act (EAA), and Americans with Disabilities Act (ADA) standards. The component supports keyboard navigation and custom key handlers. TagBox also ships with right-to-left (RTL) representation support.

- **Customization Settings**    
You can customize TagBox visual elements as your needs dictate, including the component [label](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#label) and [styling mode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#stylingMode). TagBox also supports input area [buttons](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/buttons/) and includes two predefined options: a [clear button](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showClearButton) and a [dropdown button](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showDropDownButton).

- **Customization with Templates**    
DevExtreme TagBox supports extended visual element customization with templates. You can specify custom HTML markup for the following component elements: <a href="/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#tagTemplate">tags</a>, [dropdown items](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#itemTemplate), the TagBox [input field](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#fieldTemplate), and [dropdown group headers](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#groupTemplate).
