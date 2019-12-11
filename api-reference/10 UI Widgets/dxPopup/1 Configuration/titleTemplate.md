---
default: 'title'
type: template
---
---
##### shortDescription
A template to be used for rendering the widget title.

##### param(titleElement): jQuery
An HTML element containing the rendered title.

##### return: string|Node|jQuery
A template name or a template container.

---
This option enables you to render the widget title depending on field values of the bound data model.

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myTitle' }">
        <h3><span data-bind="text: title"></span> info</h3>
    </div>

[note]A binding context of a title template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a title template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

[note] The **titleTemplate** option makes sense if the [title](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title') option is undefined.