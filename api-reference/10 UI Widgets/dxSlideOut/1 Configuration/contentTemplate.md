---
default: 'content'
type: template
---
---
##### shortDescription
A template to be used for rendering widget content.

##### param(container): jQuery
The jQuery object of the widget content element.

##### return: string|Node|jQuery
A template name or a template container.

---
If the contentTemplate is defined, the widget does not render selected items. It renders only the content template when the widget is created. You can use the [onItemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#onItemClick') option to manually update the content when a menu item is clicked.

If this option is defined, the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate') option is ignored.