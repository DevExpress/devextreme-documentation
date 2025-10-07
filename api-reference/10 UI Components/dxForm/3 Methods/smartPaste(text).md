---
id: dxForm.smartPaste(text)
---
---
##### shortDescription
Populates the Form with AI-generated values based on supplied text.

##### param(text): String | undefined
The text that is used as the basis for field value generation.

---
[note] [aiIntegration](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#aiIntegration) must be enabled for **Smart Paste** functionality.

If `text` is `undefined`, the method populates the Form with clipboard data. If the clipboard is empty, nothing is sent to AI.