A user can select existing values and add new values to the **SelectBox**. To enable this feature, assign **true** to the [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#acceptCustomValue') option. Note that you should implement the [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onCustomItemCreating') handler to create a new data source entry.

---
#####jQuery

    <!--HTML-->
    <div id="selectBoxContainer"></div>

    <!--JavaScript-->var selectBoxData = new DevExpress.data.DataSource({
        store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'firstName',
            acceptCustomValue: true,
            onCustomItemCreating: function(e) {
                // Generates a new 'id'
                var nextId = Math.max.apply(Math, selectBoxData.items().map(function(c) { return c.id; })) + 1;
                // Creates a new entry
                e.customItem = { id: nextId, firstName: e.text };
                // Adds the entry to the data source
                selectBoxData.store().insert(e.customItem);
                // Reloads the data source
                selectBoxData.reload();
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = new DataSource({
            store: [
                { id: 1, firstName: "Andrew" },
                { id: 2, firstName: "Nancy" },
                { id: 3, firstName: "Steven" }
            ]
        });
        onCustomItemCreating (e) {
            // Generates a new 'id'
            let nextId = Math.max.apply(Math, this.selectBoxData.items().map(function(c) { return c.id; })) + 1;
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            this.selectBoxData.store().insert(e.customItem);
            // Reloads the data source
            this.selectBoxData.reload();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="firstName"
        [acceptCustomValue]="true"
        (onCustomItemCreating)="onCustomItemCreating($event)">
    </dx-select-box>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/"
}

#####See Also#####
- [SelectBox - Configure Search Parameters](/concepts/05%20Widgets/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20Widgets/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value
