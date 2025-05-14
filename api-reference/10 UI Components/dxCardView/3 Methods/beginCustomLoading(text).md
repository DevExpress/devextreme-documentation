---
id: dxCardView.beginCustomLoading(text)
---
---
##### shortDescription
Displays the [load panel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/loadPanel '{basewidgetpath}/Configuration/loadPanel/').

##### param(text): String
The text for the load panel to display.

---
The load panel opens automatically when the UI component processes or retrieves data. To open the load panel manually, call this method. Without an argument, this method displays text from the **loadPanel**.[text]({basewidgetpath}/Configuration/loadPanel/#text) property. Customize the load panel through the [loadPanel]({basewidgetpath}/Configuration/loadPanel) configuration. When opened manually, the load panel remains visible until [endCustomLoading()]({basewidgetpath}/Methods/#endCustomLoading) is called.

[note] Manually opening the load panel does not replace the automatic panel, which may cause unexpected text changes as the automatic panel overrides the manual one. Ensure text consistency when opening the load panel manually.

#####See Also#####
#include common-link-callmethods