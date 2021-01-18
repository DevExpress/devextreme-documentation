---
id: dxScrollable
type: Object
inherits: DOMComponent
hidden: 
---
---
##### shortDescription
A UI component used to display scrollable content.

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
The **Scrollable** UI component represents a scrollable field that shows the data located inside the HTML element representing the UI component.

This UI component, like any other DevExtreme UI component, can be created using one of three possible approaches: [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/01%20Create%20and%20Configure%20a%20Component.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Create_and_Configure_a_Component'), [Knockout](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') or [AngularJS](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/'). The following code demonstrates how to create the **Scrollable** UI component using the Knockout approach.

    <!--HTML--><div data-bind="dxScrollable:{}">
        <p>The text that should be displayed by the UI component.</p>
    </div>