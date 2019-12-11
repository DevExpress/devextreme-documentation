---
type: event
---
---
##### shortDescription
Fires when an error occurs in the data source.

##### param(e): object
Information on the occurred error.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.error): JavaScript Error object
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.

---
Instead, you can use the [onDataErrorOccurred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onDataErrorOccurred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onDataErrorOccurred') option to handle the event.

To handle errors that might occur in the data source, implement a handling function and attach it to the **dataErrorOccurred** event. To obtain a human-readable representation of the occurred error, use the **message** field of the **error** object passed to the handling function as the parameter's field.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')