To enable the filtering feature globally, set the **PivotGrid**.[allowFiltering](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering') option to **true**. This option can also be set for each separate field (**fields**&nbsp;|&nbsp;[allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering')).

When the filtering feature is enabled for a field (enabled globally and not disabled for the field or enabled in the field configuration) and the field belongs to an area, the filter icon (![](/Content/images/doc/19_2/DataGrid/filterIcon.png)) appears at the right part of the field in the [Field Chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser') or the [Field Panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel'). Click this icon to select the fields to be **included** in the data set displayed by the pivot grid. 

When filtering by the [fields group](/concepts/05%20Widgets/PivotGrid/050%20Grouping/030%20Fields%20Grouping.md '/Documentation/Guide/Widgets/PivotGrid/Grouping/#Fields_Grouping'), the filter becomes hierarchical and field values are arranged in a tree. In this case, you can configure your filter more precisely in comparison with filtering by a set of independent fields.

![](/Content/images/doc/19_2/DataGrid/PivotGrid_Filtering.png)

[note] If all fields are selected for filtering or if no fields are selected, data is displayed as if filtering was disabled (therefore, all fields are displayed).

