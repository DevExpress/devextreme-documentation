---
default: undefined
acceptValues: 'string' | 'number' | 'date' | 'boolean' | 'object'
type: String
---
---
##### shortDescription
Casts column values to a specified data type.

---
If your data source stores, for example, numbers as strings, specify the proper data type using the **dataType** option.
 
*Date* values have the following specifics.

- If dates are stored as strings, they should have the following format: `"yyyy-MM-dd"`, `""yyyy-MM-ddTHH:mm:ssZ"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`.
- To show both the date and time in the column editor, assign an appropriate value (including the date and time parts) to the [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') option and *"datetime"* to [editorOptions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') | **type**.

        <!--JavaScript-->
        $("#gridContainer").dxDataGrid({
            // ...
            columns: [
                // ...
                {
                    dataField: "HireDate",
                    dataType: "date",
                    format: "shortDateShortTime",
                    editorOptions: { type: "datetime" }
                }
            ]
        });

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridColumnDataType` enum. This enum accepts the following values: `String`, `Number`, `Date`, `Boolean` and `Object`.