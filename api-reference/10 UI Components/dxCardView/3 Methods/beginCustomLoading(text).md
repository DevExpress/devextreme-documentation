---
id: dxCardView.beginCustomLoading(text)
---
---
##### shortDescription
Displays the [load panel](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/loadPanel.md '{basewidgetpath}/Configuration/loadPanel/').

##### param(text): String
The text for the load panel to display.

---
The load panel opens automatically when the UI component processes or retrieves data. To open the load panel manually, call this method. Without an argument, this method displays text from the [loadPanel](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/loadPanel.md '{basewidgetpath}/Configuration/loadPanel').**text** property. Customize the load panel through the **loadPanel** configuration. When opened manually, the load panel remains visible until [endCustomLoading()](/api-reference/10%20UI%20Components/dxCardView/3%20Methods/endCustomLoading().md '{basewidgetpath}/Methods/#endCustomLoading') is called.

[note] Manually opening the load panel does not replace the automatic panel, which may cause unexpected text changes as the automatic panel overrides the manual panel. Ensure text consistency when manually opening the load panel.

#####See Also#####
#include common-link-callmethods