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
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object fields directly. To access another binding context within an item template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')