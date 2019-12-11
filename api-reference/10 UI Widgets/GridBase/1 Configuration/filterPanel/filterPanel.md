---
id: GridBase.Options.filterPanel
type: Object
default: {}
---
---
##### shortDescription
Configures the filter panel.

---
The filter panel displays the applied filter expression.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} Filter Panel](/images/{WidgetName}/visual_elements/filter_panel.png)

Clicking on the filter expression opens the [filter builder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder').

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} Filter Panel](/images/{WidgetName}/visual_elements/integrated_filter_builder.png)

If you change the filter expression in the filter panel or filter builder, the changes are reflected in the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row') and [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter'), and vice versa. You can disable this synchronization by setting the [filterSyncEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterSyncEnabled.md '{basewidgetpath}/Configuration/#filterSyncEnabled') option to **false**. In this case, the filter panel remains synchronized with the filter builder.

#####See Also#####
- [Filter Panel with Filter Builder](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder')
- [filterBuilderPopup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilderPopup.md '{basewidgetpath}/Configuration/#filterBuilderPopup')