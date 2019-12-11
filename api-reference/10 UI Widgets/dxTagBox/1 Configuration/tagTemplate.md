---
default: 'tag'
type: template
---
---
##### shortDescription
The template to be used for rendering tags.

##### param(itemData): object
The item object associated with a tag to be rendered.

##### param(itemElement): jQuery
An HTML element of the tag to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of a tag template is the data source object that corresponds to the currently rendered item.

So, in **Knockout approach**, you can bind template elements to the item object fields directly. To access another binding context within a tag template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access item object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of an item. Without this directive, item object fields are beyond reach. To access another binding context within a tag template, use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')