---
type: dxFormSimpleItem
---
---
##### shortDescription
Configures the form item that the column produces in the editing state. Applies only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"form"* or *"popup"*.

---
In the following code, the `Full_Name` grid column in the editing state produces a form item that spans two form columns. The item's label is on top of the editor:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form"
            },
            columns: [{
                dataField: "Full_Name",
                formItem: {
                    colSpan: 2,
                    label: {
                        location: "top"
                    }
                }
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
        </dxo-editing>
        <dxi-column dataField="Full_Name">
            <dxo-form-item [colSpan]="2">
                <dxo-label location="top"></dxo-label>
            </dxo-form-item>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Editing(e => e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
        )
        .Columns(cols => {
            // ...
            cols.Add().DataField("Full_Name")
                .FormItem(item => item
                    .ColSpan(2)
                    .Label(l => l.Location(FormLabelLocation.Top)
                )
            );
        })
    )
    
---

[note]

You cannot specify the following options in the **formItem** object:

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template'); instead, use the column's [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate')        
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType'); instead, use [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '{basewidgetpath}/Configuration/#onEditorPreparing')

[/note]


#####See Also#####
- [Form Edit Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Form_Mode')