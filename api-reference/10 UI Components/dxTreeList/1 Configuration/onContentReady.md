If you use a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance to specify data for UI component, the **contentReady** event fires in the following cases:

- The component is rendered for the first time
- Data from the **DataSource** is fully loaded
- Each time when the **DataSource**.[load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method is called
- When users perform sort and filter operations, or divide data into pages
- When users expand or collapse adaptive row 
- When the [refresh()](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#refresh) method is called