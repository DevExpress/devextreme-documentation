---
default: 'group'
type: template
---
---
##### shortDescription
The [name](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/Configuration/#name') of the [template](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') used to display a group header.

##### param(itemData): object
The group object to be rendered.

##### param(itemIndex): number
The index of the group to be rendered.

##### param(itemElement): jQuery
An HTML element of the group to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
[note]A binding context of a group template is the data source object that corresponds to the currently rendered group. So, you can bind template elements to the group object fields directly. To access another binding context within a group template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.