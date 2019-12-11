In the form mode, a row becomes a form with editable fields in the editing state. A form field corresponds to a row's cell.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Form Mode](/images/treelist/editing/form_mode.png)

The **TreeList** uses the DevExtreme [Form](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/') widget as the form. You can customize individual form fields using the **columns[]**.[formItem](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/formItem.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#formItem') object whose members are described in the [Simple Item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/') section. Note that this object does not allow changing or configuring the editor (see [Customize Editors](/concepts/05%20Widgets/TreeList/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/TreeList/Editing/#Customize_Editors')).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
        </dxo-editing>
        <dxi-column dataField="Full_Name">
            <dxo-form-item [colSpan]="2">
                <dxo-label location="top"></dxo-label>
            </dxo-form-item>
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
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

The form contains only the editable fields, or "simple items" (as they are called in the **Form** widget) by default. The form can also contain group, tabbed, and empty items, which help you arrange simple items in different ways. Configure the items in the **editing**.**form**.**items** array as shown in the following code. The items with the specified **dataField** are simple items. Identical **dataFields** connect a simple item with a column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form",
                form: {
                    items: [{
                        itemType: "group",
                        caption: "Personal Data",
                        items: [
                            { dataField: "Full_Name" },
                            { dataField: "Prefix" },
                            { dataField: "Position" }
                        ]
                        // or just
                        // items: ["Full_Name", "Prefix", "Position"]
                    }, {
                        itemType: "group",
                        caption: "Contacts",
                        items: ["Email", "Skype"]
                    }]
                }
            },
            columns: [ 
                { dataField: "Full_Name" }, 
                { dataField: "Prefix" },
                { dataField: "Position" },
                { dataField: "Email" },
                { dataField: "Skype" } 
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
            <dxo-form>
                <dxi-item itemType="group" caption="Personal Data">
                    <dxi-item dataField="Full_Name"></dxi-item>
                    <dxi-item dataField="Prefix"></dxi-item>
                    <dxi-item dataField="Position"></dxi-item>
                </dxi-item>
                <dxi-item itemType="group" caption="Contacts">
                    <dxi-item dataField="Email"></dxi-item>
                    <dxi-item dataField="Skype"></dxi-item>
                </dxi-item>
            </dxo-form>
        </dxo-editing>
        <dxi-column dataField="Full_Name"></dxi-column>
        <dxi-column dataField="Prefix"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column dataField="Email"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().TreeList()
        // ...
        .Editing(e => e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
            .Form(f => f
                .Items(i => {
                    i.AddGroup()
                        .Caption("Personal Data")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Full_Name");
                            groupItems.AddSimple().DataField("Prefix");
                            groupItems.AddSimple().DataField("Position");
                        });
                    i.AddGroup()
                        .Caption("Contacts")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Email");
                            groupItems.AddSimple().DataField("Skype");
                        });
                })
            )
        )
        .Columns(cols => {
            cols.Add().DataField("Full_Name");
            cols.Add().DataField("Prefix");
            cols.Add().DataField("Position");
            cols.Add().DataField("Email");
            cols.Add().DataField("Skype");
        })
    )
    
---

See the topics in the [Organize Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items '/Documentation/Guide/Widgets/Form/Organize_Simple_Items') section for more information on organizing simple items on the form. You can also specify other **Form** widget options in the **editing**.**form** object to configure the editing form. Refer to the [Form Guides](/concepts/05%20Widgets/Form '/Documentation/Guide/Widgets/Form/') for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/FormEditing/jQuery/Light/"
}
