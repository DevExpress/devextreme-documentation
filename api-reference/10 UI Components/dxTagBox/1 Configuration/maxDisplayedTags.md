---
id: dxTagBox.Options.maxDisplayedTags
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies the limit on displayed tags. On exceeding it, the UI component replaces all tags with a single multi-tag that displays the number of selected items.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/"
}

[note] You need to set [showMultiTagOnly](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showMultiTagOnly') to `false` when **maxDisplayedTags** is `0` to avoid unexpected behavior.

#####See Also#####
- [showMultiTagOnly](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showMultiTagOnly')
- [onMultiTagPreparing](/api-reference/10%20UI%20Components/dxTagBox/1%20Configuration/onMultiTagPreparing.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#onMultiTagPreparing')