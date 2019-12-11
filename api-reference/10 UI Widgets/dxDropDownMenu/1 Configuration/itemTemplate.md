---
default: 'item'
type: template
---
---
##### shortDescription
The template to be used for rendering items.

##### param(itemData): object
The item object to be rendered.

##### param(itemIndex): number
The index of the item to be rendered.

##### param(itemElement): object
An HTML element of the item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object fields directly. To access another binding context within an item template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')