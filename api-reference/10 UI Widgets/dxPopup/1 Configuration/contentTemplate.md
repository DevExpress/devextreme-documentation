---
default: 'content'
type: template
---
---
##### shortDescription
A template to be used for rendering widget content.

##### param(contentElement): jQuery
The jQuery object of the widget content element.

##### return: string|jQuery
A template name or a template container.

---
This option enables you to render widget contents depending on field values of the bound data model.

    <!--HTML-->
    <div data-options="dxTemplate: { name:'myContent' }">
        <h1 data-bind="text: title"></h1>
        <p>Full name: <span data-bind="text: fullName"></span></p>
    </div>

[note]A binding context of a content template is the bound view model. So, you can bind template elements to the view model's fields directly (see the code above). To access another binding context within a content template, use the [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Popup - Customize the Content](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')