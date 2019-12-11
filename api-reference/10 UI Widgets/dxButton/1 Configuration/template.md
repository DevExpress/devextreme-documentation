---
default: 'content'
type: template
---
---
##### shortDescription
A template to be used for rendering the **Button** widget.

##### param(buttonData): object
An object holding the button text and icon.

##### param(contentElement): jQuery
The jQuery object of the button content element.

##### return: string|jQuery
A template name or a template container.

---
This option enables you to render a widget depending on the values of the field of the template context object or view model fields.

    <!--HTML-->
    <div data-bind="dxButton: { template: 'myButton'}">
        <div data-options="dxTemplate: { name:'myButton' }">
            <span data-bind="dxLoadIndicator: { visible: $parent.isLoading }"></span>
            <span>Load</span>
        </div>
    </div>

[note]A binding context of a template contains only fields listed in the [Default Template](/api-reference/10%20UI%20Widgets/dxButton/5%20Default%20Template '/Documentation/ApiReference/UI_Widgets/dxButton/Default_Template/') topic. So, you can bind template elements to these fields directly. To access another binding context within a template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.