---
id: dxTagBox.Options.onMultiTagPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the multi-tag is rendered.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel replacing ordinary tags with the multi-tag.

##### field(e.component): dxTagBox
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only when using Knockout.

##### field(e.multiTagElement): DxElement
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
- [Limit the Tag Count](/concepts/05%20UI%20Components/TagBox/12%20Limit%20the%20Tag%20Count '/Documentation/Guide/UI_Components/TagBox/Limit_the_Tag_Count/')
- [maxDisplayedTags](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/maxDisplayedTags.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#maxDisplayedTags')
- [showMultiTagOnly](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showMultiTagOnly')