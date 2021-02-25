---
##### merge

---
#include common-dataSource-description with {
    widget_works_with: "The TreeList works with object collections that can have a plain or hierarchical structure. Depending on the structure, the objects should provide different data fields. Specify the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure') property to notify the TreeList of the used structure and refer to the property's description for information on the required fields.",

    array_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayPlainStructure)",

    create_store_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/WebAPIService)",

    remote_operations_note: "- If the TreeList UI component gets data from a server, configure [remoteOperations](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/') to notify the UI component about data operations the server performs.",

    calculated_columns_note: "- [Selection](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/selection '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/') works incorrectly with [mapped data objects](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map'). Use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#calculateCellValue') instead of mapping."

}