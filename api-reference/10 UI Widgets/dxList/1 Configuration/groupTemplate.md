---
default: 'group'
type: template
---
---
##### shortDescription
The template to be used for rendering item groups.
Specifies a custom template for a group caption.

##### param(groupData): object
The group object to be rendered.

##### param(groupIndex): number
The index of the group to be rendered.

##### param(groupElement): object
An HTML element of the group to be rendered.

##### return: string|Node|jQuery
A template name or container.

---
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. This template's binding context depends on the library you use.

In Angular apps, a group's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

In AngularJS apps, a group's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

In Knockout apps, you can bind template elements directly to a group object's fields. Use the `$index` variable to get the item's index. Use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables if you need to access another binding context from the template. 

#####See Also#####
- [List - Customize Group Headers](/concepts/05%20Widgets/List/14%20Grouping/05%20Customize%20Group%20Headers.md '/Documentation/Guide/Widgets/List/Grouping/Customize_Group_Headers/')
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Angular - Custom Templates](https://github.com/DevExpress/devextreme-angular#custom-templates)
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslistlistgroupedlist/"
}