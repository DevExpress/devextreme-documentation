---
id: dxList.Options.showScrollbar
type: Enums.ScrollbarMode
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component displays the scrollbar.

---

[note]

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNativeScrolling]({basewidgetpath}/Configuration/#useNativeScrolling)):

- *"always"*, *"onScroll"*, and *"onHover"*: scrollbar visibility depends on the platform.
- *"never"*: the component hides scrollbars and disables user scrolling.

[/note]

#####See Also#####
- [List - Scrolling - User Interaction](/concepts/05%20UI%20Components/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Scrolling/#User_Interaction')