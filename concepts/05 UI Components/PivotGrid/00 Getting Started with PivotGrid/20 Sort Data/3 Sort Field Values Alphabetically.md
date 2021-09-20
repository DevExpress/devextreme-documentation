To sort field values in alphabetical order, users should click a field in the [field panel](/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Display_the_Field_Panel) or [field chooser](/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Configure_the_Field_Chooser). An arrow icon indicates the sort order. Subsequent clicks change the sort order between ascending and descending.

![DevExtreme PivotGrid: Sort field values by summary values](/images/pivotgrid/sorting-by-field-values.png)

Set the [allowSorting](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowSorting) property to **true** to enable this functionality for all fields. You can also set the same property for an individual field if you want to override the common setting.

Use a field's [sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder) property to specify the alphabetical sort order programmatically. In the following code, this property is used to sort the Category and Subcategory row field values alphabetically in descending order:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                // ...
                fields: [{
                    dataField: "[Product].[Category]",
                    area: "row",
                    sortOrder: "desc"
                }, {
                    dataField: "[Product].[Subcategory]",
                    area: "row",
                    sortOrder: "desc"
                },
                // ...
                ],
            },
            allowSorting: true,
        });
    });

---