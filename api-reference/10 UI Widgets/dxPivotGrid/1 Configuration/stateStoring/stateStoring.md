---
id: dxPivotGrid.Options.stateStoring
type: Object
---
---
##### shortDescription
A configuration object specifying options related to state storing.

---
State storing enables the widget to save applied settings and restore them the next time the widget is loaded. Assign **true** to the **stateStoring**.[enabled](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/enabled.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#enabled') option to enable this functionality.

The state is saved with a specified [storage key](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/storageKey.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#storageKey'). 

State storing saves the following options:

<table class="multicolumn-list">
    <tr>
        <td>
            <ul>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area">area</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#areaIndex">areaIndex</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType">filterType</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues">filterValues</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBy">sortBy</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder">sortOrder</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField">sortBySummaryField</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath">sortBySummaryPath</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#expanded">expanded</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType">summaryType</a></li>
                <li><a href="/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode">summaryDisplayMode</a></li>
            </ul>
        </td>
    </tr>
</table>  

To specify the time in milliseconds between automatic state saves, set the [savingTimeout](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/savingTimeout.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#savingTimeout') option. To specify the lifetime of the saved state, set the storage [type](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type').

Use the **PivotGridDataSource**'s [state](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/state().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#state') method to manage the **PivotGrid**'s state at runtime. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StatePersistence/"
}
