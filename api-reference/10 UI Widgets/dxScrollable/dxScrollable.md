---
hidden: 
type: object
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A widget used to display scrollable content.

---
The **Scrollable** widget represents a scrollable field that shows the data located inside the HTML element representing the widget.

This widget, like any other DevExtreme UI widget, can be created using one of three possible approaches: [jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget'), [Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widgett) or [AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget'). The following code demonstrates how to create the **Scrollable** widget using the Knockout approach.

    <!--HTML--><div data-bind="dxScrollable:{}">
        <p>The text that should be displayed by the widget.</p>
    </div>