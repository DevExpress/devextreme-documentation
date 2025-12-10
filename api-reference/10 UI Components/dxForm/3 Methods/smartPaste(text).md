---
id: dxForm.smartPaste(text)
---
---
##### shortDescription
Populates the Form with AI-generated values based on supplied text.

##### param(text): String | undefined
The text that is used as the basis for field value generation.

---
[note] [aiIntegration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/aiIntegration.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#aiIntegration') must be enabled for **Smart Paste** functionality.

If `text` is `undefined`, the method populates the Form with clipboard data. If the clipboard is empty, nothing is sent.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/SmartPaste/"
}
