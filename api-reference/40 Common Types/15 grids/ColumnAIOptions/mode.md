---
id: ColumnAI.Options.mode
type: Enums.AIColumnMode
default: 'auto'
---
---
##### shortDescription
Configures whether the column sends AI requests automatically or manually.

---
When this property is set to *"auto"*, the AI column sends requests to update values each time visible data is updated. To enable users to update AI column values manually, set **mode** to *"manual"*.

[note]

- If this property is set to *"auto"*, the component sends AI requests to update data each time users update the AI column prompt.
- If this property is set to *"manual"* and the component hides the AI column (when [columnHidingEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled) is `true`), users cannot access the [AI header menu]({currentpath}/#showHeaderMenu) to generate data.

[/note]