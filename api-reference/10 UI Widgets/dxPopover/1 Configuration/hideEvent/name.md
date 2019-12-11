---
default: undefined
type: String
---
---
##### shortDescription
Specifies the event names on which the widget is hidden.

---
The option takes a string value representing a [DOM event](https://en.wikipedia.org/wiki/DOM_events#HTML_events) or a DevExtreme [UI Event](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/') name. You can also pass several event names separated by a space. The DevExtreme and DOM events may be combined.

    <!--JavaScript-->
    hideEvent: {
        name: "dxdblclick mouseout",
        delay: 70
    }