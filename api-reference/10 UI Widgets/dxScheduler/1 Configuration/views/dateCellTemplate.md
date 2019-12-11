---
default: null
type: template
---
---
##### shortDescription
Specifies a custom template for date scale items.

##### param(itemData): Object
The data of the current date scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
[note] There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')