---
id: dxDiagram.Options.hasChanges
type: Boolean
default: false
---
---
##### shortDescription
Indicates whether diagram content has unsaved changes.

---
The Diagram UI component sets the **hasChanges** property to `true` after any change and never resets this value to `false`. You should set the **hasChanges** property to `false` after you save the component's data.

The [optionChanged](/api-reference/10%20UI%20Components/DOMComponent/4%20Events/optionChanged.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#optionChanged') event occurs when the **hasChanges** property value changes. Handle this event as shown below to automatically save diagram data in a storage:

    <!-- tab: index.js -->
    var autoSaveIntervalMs = 2000;
    var autoSaveTimeout = -1;

    $("#diagram").dxDiagram({
    onOptionChanged: function(e) {
        if(e.name === "hasChanges" && e.value && autoSaveTimeout === -1) {
            autoSaveTimeout = setTimeout(function() {
                var data = e.component.export();
                window.localStorage.setItem("foo", data); // saves data to a local storage
                autoSaveTimeout = -1;
                e.component.option("hasChanges", false);
            }, autoSaveIntervalMs);
        }
    }
