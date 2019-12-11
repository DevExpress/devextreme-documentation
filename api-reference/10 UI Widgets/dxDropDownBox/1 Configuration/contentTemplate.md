---
default: null
type: template
---
---
##### shortDescription
Specifies a custom template for the drop-down content.

##### param(templateData): object
Data associated with the widget.

##### param(contentElement): jQuery
The content element.

##### return: string|Node|jQuery
A template's name or container.

---
Below is the list of fields passed in the **templateData** object.

- **value**: <font size="-1">Any</font>    
    The currently selected value.  
- **component**: <font size="-1">jQuery</font>  
    The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

If you use the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library, you can implement this template with the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The template is in the binding context of the view model. Therefore, you can bind template elements directly to the properties of the view model. To access another binding context from the template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html) or [AngularJS](https://docs.angularjs.org/guide/scope) binding variables.