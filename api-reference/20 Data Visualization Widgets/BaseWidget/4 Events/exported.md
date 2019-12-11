---
type: event
---
---
##### shortDescription
Fires after data from the widget is exported.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in Knockout and AngularJS approaches.

---
To perform a custom action after data from the widget is exported, implement a handler for this event. For example, this handler can notify the user that the exporting has been completed. Within this handler, you can use the object passed to it as the parameter.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export') - configures client-side export and printing.
- [exporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exporting.md '{basewidgetpath}/Events#exporting') - an event that fires before data from the widget is exported.
- [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/fileSaving.md '{basewidgetpath}/Events#fileSaving') - an event that fires before a file with exported data is saved on the user's local storage.