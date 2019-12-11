---
type: array
---
---
##### shortDescription
An array of items displayed by the widget.

---
You can use the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option instead. Unlike the **items** option, the **dataSource** option can take on the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object as well as a simple array.

[note]If you need to modify the data source specified using the **items** option at runtime, do it only with the help of the **items** option. Updating data items using the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxList/5%20Default%20Item%20Template '{basewidgetpath}/Default_Item_Template/') section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance') topic.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')