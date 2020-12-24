---
id: dxContextMenu.Options.showEvent.name
type: String
default: undefined
---
---
##### shortDescription
Specifies the event names on which the UI component is shown.

---
The option takes a string value representing a <a href="https://en.wikipedia.org/wiki/DOM_events#HTML_events" target="_blank">DOM event</a> or a DevExtreme [UI Event](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/') name. You can also pass several event names separated by a space. The DevExtreme and DOM events may be combined.

    <!--JavaScript-->
    showEvent: {
        name: "dxdblclick keyup",
        delay: 70
    }