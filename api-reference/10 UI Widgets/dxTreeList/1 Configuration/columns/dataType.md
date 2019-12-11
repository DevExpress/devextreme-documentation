If your data source stores, for example, numbers as strings, specify the proper data type using the **dataType** option.
 
Date-time values have the following specifics.

- If date-time values are stored as strings, they should have one of the following formats: `"yyyy-MM-dd"`, `"yyyy-MM-dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`.
- To show both date and time in a column editor, set the [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '{basewidgetpath}/Configuration/columns/#format') option to a value that includes date and time parts, and assign *"datetime"* to the [editorOptions](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions').**type** option as shown in the following code.

    ---
    #####jQuery 

        <!--JavaScript-->$(function() {
            $("#treeListContainer").dxTreeList({
                // ...
                columns: [{
                    dataField: "HireDate",
                    dataType: "date",
                    format: "shortDateShortTime",
                    editorOptions: { type: "datetime" }
                }]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-tree-list>
            <dxi-column
                dataField="HireDate"
                dataType="date"
                format="shortDateShortTime"
                editorOptions="{ type: 'datetime' }">
            </dxi-column>
        </dx-tree-list>

        <!--TypeScript-->
        import { DxTreeListModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxTreeListModule
            ],
            // ...
        })

    ---

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridColumnDataType` enum. This enum accepts the following values: `String`, `Number`, `Date`, `Boolean` and `Object`.