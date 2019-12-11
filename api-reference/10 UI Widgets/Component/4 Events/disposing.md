---
type: event
---
---
##### shortDescription
Fires when the widget is being removed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

---
Instead, you can use the [onDisposing](/api-reference/10%20UI%20Widgets/Component/1%20Configuration/onDisposing.md '{basewidgetpath}/Configuration/#onDisposing') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')

[note]This event fires only if the widget is removed using the [remove()](https://api.jquery.com/remove), [empty()](https://api.jquery.com/empty), or [html()](https://api.jquery.com/html) jQuery methods.