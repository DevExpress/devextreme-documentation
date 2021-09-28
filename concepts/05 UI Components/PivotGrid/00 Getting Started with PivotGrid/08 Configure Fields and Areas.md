To display data in the PivotGrid, specify the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array. Each object in it configures a single pivot grid field. Specify the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to populate the pivot grid field with data.

You can distribute fields between four different areas: row, column, filter, and data. Row and column fields contain values displayed in row and column headers. Filter fields has no visual representation, but they can be used to filter data. Data fields contain values for summary calculation. To specify the area, set the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) property. In the following code, we declare two row fields, two column fields, and two data fields:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                // ...
                fields: [{
                    dataField: "[Product].[Category]",
                    area: "row"
                }, {
                    dataField: "[Product].[Subcategory]",
                    area: "row"
                }, {
                    dataField: "[Ship Date].[Calendar Year]",
                    area: "column"
                }, {
                    dataField: "[Ship Date].[Month of Year]",
                    area: "column"
                }, {
                    dataField: "[Measures].[Sales Amount]",
                    area: "data",
                    format: "currency"
                }, {
                    dataField: "[Measures].[Tax Amount]",
                    area: "data",
                    format: "currency"
                }],
            },
        });
    });

---