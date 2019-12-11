---
default: undefined
type: template
---
---
##### shortDescription
The template to be used for rendering the tab content.

##### param(tabData): object
A data object associated with the tab.

##### param(tabIndex): number
The index of the tab in the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/">tabs</a> array.

##### param(tabElement): object
The HTML element of the tab's content.

---
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly. To access another binding context within an item template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')