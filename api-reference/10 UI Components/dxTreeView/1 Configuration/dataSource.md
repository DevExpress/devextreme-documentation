---
id: dxTreeView.Options.dataSource
type: String | Array<dxTreeViewItem> | Store | DataSource | DataSource_Options | null
default: null
---
#include common-dataSource-description with {
    widget_works_with: "The TreeView works with object collections that can have a plain or hierarchical structure. Depending on the structure, the objects should provide different data fields. Specify the [dataStructure](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure') property to notify the TreeView of the used structure and refer to the property's description for information on the required fields.",

    dataSource_items_note: "- Do not specify the [items](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/items '{basewidgetpath}/Configuration/items/') property if you specified the **dataSource**, and vice versa."

}

#####See Also#####
- [Enhance Performance on Large Datasets](/concepts/05%20UI%20Components/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/UI_Components/TreeView/Enhance_Performance_on_Large_Datasets/')