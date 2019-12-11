---
default: 'group'
type: template
---
---
##### shortDescription
Specifies a custom template for group captions.

##### param(itemData): object
The data of the group.

##### param(itemIndex): number
The index of the group.

##### param(itemElement): jQuery
The element of the group.

##### return: string|Node|jQuery
A template's name or container.

---
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. This template's binding context depends on the library you use.

In Angular apps, a group's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

In AngularJS apps, a group's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

In Knockout apps, you can bind template elements directly to a group object's fields. Use the `$index` variable to get the item's index. Use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables if you need to access another binding context from the template. 


#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Angular - Custom Templates](https://github.com/DevExpress/devextreme-angular#custom-templates)
- [SelectBox - Grouped Items Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light)
- [TagBox - Grouped Items Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light)