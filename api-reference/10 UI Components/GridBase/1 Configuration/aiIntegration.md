---
id: GridBase.Options.aiIntegration
type: AIIntegration | undefined
default: undefined
---
---
##### shortDescription
Binds the {WidgetName} to an AI service.

---
To activate AI functionality in {WidgetName}, configure this object and assign *"ai"* to a column's [type]({basewidgetpath}/Configuration/columns/#type) property.

This object configures options for all AI columns within the component. To configure AI options specific to a column, define **columns[]**.**ai**.[aiIntegration]({basewidgetpath}/Configuration/columns/ai/#aiIntegration).