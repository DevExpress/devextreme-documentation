- **Data Binding**    
TagBox supports loading and updating data from different [data source](/Documentation/ApiReference/Data_Layer/DataSource/) types.

- **Selection Options**    
TagBox supports multiple item selection. Specify the maximum number of tags the component displays by configuring [maxDisplayedTags](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#maxDisplayedTags). Define [showSelectionControls](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls) to configure the visbility of selection checkboxes, including the "Select All" checkbox.

- **Data Entry**    
The component allows users to add new values to its dataset. Configure [acceptCustomValue](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#acceptCustomValue) and [onCustomItemCreating](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#onCustomItemCreating) to implement this functionality.

- **Searching**    
Set [searchEnabled](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchEnabled) to `true` to allow users to search TagBox values. Configure search options with the following properties:
    - [searchMode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchMode)
    - [searchExpr](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchExpr)
    - [searchTimeout](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#searchTimeout)

- **Grouping**    
You can separate TagBox items into groups. To do this, enable the [grouped](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#grouped) property and specify **DataSource**.[group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) in the TagBox [dataSource](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#dataSource).

- **Customization**    
You can customize the appearance of TagBox visual elements with the following properties:
    - [label](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#label)
    - [labelMode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#labelMode)
    - [tagTemplate](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#tagTemplate)
    - [fieldTemplate](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#fieldTemplate)
    - [stylingMode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#stylingMode)

- **Configurable Buttons**    
TagBox supports rendering buttons in its input area. Enable [showDropDownButton](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showDropDownButton) and [showClearButton](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showClearButton) to display the component's predefined buttons. Configure custom buttons in the [buttons[]](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/buttons/) array.