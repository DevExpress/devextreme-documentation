The **DropDownBox** is a widget that consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/jQuery/Light/"
}

The simplest widget configuration requires specifying a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dataSource'), [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value') and [contentTemplate](/api-reference/10%20UI%20Widgets/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#contentTemplate'). The following code adds the **DropDownBox** to your page: 

---

#####**jQuery**

    <!--JavaScript-->
    $(function () {
        var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            contentTemplate: function(e) {
                var $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    } 
                });
                return $list;
            }
        });
    });

#####**Angular**

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedFruit"
        [(opened)]="isDropDownBoxOpened"
        [dataSource]="fruits">
        <div *dxTemplate="let contentData of 'content'">
            <dx-list 
                [dataSource]="fruits"
                selectionMode="single"
                (onSelectionChanged)="changeDropDownBoxValue($event)">
            </dx-list>
        </div>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        selectedFruit = this.fruits[0];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue = function (args) {
            this.selectedFruit = args.addedItems[0];
            this.isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule,
            DxListModule
        ],
        // ...
    })

---

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr')     
    The data field whose value is written into the [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value') option.
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr')     
    The data field whose value is displayed in the input field of the widget.

<!---->

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        var customers = [
            { id: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" }
            // ...
        ];
        var selectedValue = customers[0].id;
        $("#dropDownBoxContainer").dxDropDownBox({
            value: selectedValue,
            valueExpr: "id",
            displayExpr: "companyName",
            dataSource: new DevExpress.data.ArrayStore({
                data: customers,
                key: "id"
            }),
            contentTemplate: function(e){
                var $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["companyName", "city", "phone"],
                    height: 265,
                    selection: { mode: "single" },
                    selectedRowKeys: [selectedValue],
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys,
                            hasSelection = keys.length;
                        e.component.option("value", hasSelection ? keys[0] : null); 
                        e.component.close();
                    }
                });
                return $dataGrid;
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedCustomers"
        [(opened)]="isDropDownBoxOpened"
        valueExpr="id"
        displayExpr="companyName"
        [dataSource]="customerDataSource">
        <div *dxTemplate="let contentData of 'content'">
            <dx-data-grid 
                [dataSource]="customerDataSource"
                [selection]="{ mode: 'single' }"
                [columns]="['companyName', 'city', 'phone']"
                [height]="265"
                [(selectedRowKeys)]="selectedCustomers"
                (onSelectionChanged)="changeDropDownBoxValue($event)">
            </dx-data-grid>
        </div>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxDataGridModule } from 'devextreme-angular';
    import ArrayStore from 'devextreme/data/array_store';
    // ...
    export class AppComponent  {
        customers = [
            { id: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
            // ...
        ];
        customerDataSource = new ArrayStore({
            data: this.customers,
            key: "id"
        });
        selectedCustomers = [this.customers[1].id];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue = function (args) {
            this.isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule,
            DxDataGridModule
        ],
        // ...
    })

---

#####See Also#####
- [DropDownBox - Customize the Appearance](/concepts/05%20Widgets/DropDownBox/20%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/DropDownBox/Customize_the_Appearance/')
