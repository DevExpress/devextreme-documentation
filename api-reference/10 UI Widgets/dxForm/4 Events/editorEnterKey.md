---
type: eventType
---
---
##### shortDescription
Fires after a user presses the Enter key when an editor is focused.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the form instance.

##### field(e.element): jQuery
An HTML element of the form.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.dataField): string
The path to the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxForm/Configuration#formData">formData</a> object field associated with the current editor.

---
Instead, you can use the [onEditorEnterKey](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onEditorEnterKey.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onEditorEnterKey') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')