---
default: 'dropDownButton'
type: template
---
---
##### shortDescription
Specifies a custom template for the drop-down button.

##### param(buttonData): object
An object holding the button data.

##### field(buttonData.text): string
The button's text.

##### field(buttonData.icon): string
The button's icon.

##### param(contentElement): jQuery
The button's element.

##### return: string|jQuery
A template's name or container.

---
If you use the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library, you can implement this template with the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The template is in the binding context of the view model. Therefore, you can bind template elements directly to the properties of the view model. To access another binding context from the template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html) or [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [SelectBox - Customize Drop-Down Button Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/CustomizeDropDownButton/jQuery/Light)