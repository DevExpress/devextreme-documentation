---
id: dxTagBox.Options.onMultiTagPreparing
type: function(e)
default: null
EventForAction: dxTagBox.multiTagPreparing
---
---
##### shortDescription
A function that is executed before the multi-tag is rendered.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel replacing ordinary tags with the multi-tag.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only when using Knockout.

##### field(e.multiTagElement): dxElement
#include common-ref-elementparam with { element: "multi-tag" }

##### field(e.selectedItems): Array<String, Number, Object>
The currently selected items.

##### field(e.text): String
Allows you to change the multi-tag's text.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/"
}

#####See Also#####
- [Limit the Tag Count](/concepts/05%20Widgets/TagBox/12%20Limit%20the%20Tag%20Count '/Documentation/Guide/Widgets/TagBox/Limit_the_Tag_Count/')
- [maxDisplayedTags](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/maxDisplayedTags.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags')
- [showMultiTagOnly](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly')