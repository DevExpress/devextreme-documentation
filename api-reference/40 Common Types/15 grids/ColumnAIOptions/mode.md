---
id: ColumnAI.Options.mode
type: Enums.AIColumnMode
default: 'auto'
---
---
##### shortDescription
Configures whether the column sends AI requests automatically or on demand.

---
When this property is set to *"auto"*, the AI column sends requests to update values each time visible data is updated. To enable users to update AI column values manually, set **mode** to *"manual"*.

[note]

- If this property is set to *"auto"*, the component sends AI requests to update data each time users update the AI column prompt.
- If this property is set to *"manual"* and the component hides the AI column (when [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled') is `true`), users cannot access the [AI header menu](/api-reference/40%20Common%20Types/15%20grids/ColumnAIOptions/showHeaderMenu.md '{currentpath}/#showHeaderMenu') to generate data.

[/note]