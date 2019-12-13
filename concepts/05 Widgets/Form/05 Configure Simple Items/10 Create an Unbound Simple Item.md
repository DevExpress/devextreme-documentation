If you do not need a simple item to be bound to a [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') field, create an unbound item. It can be useful if you need, for example, to hide or show some additional information. To create such an item, specify its [name](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name'), but do _not_ set its **dataField** option. You will be able to access the item by this name if you need to.

In the following example, the `order` item contains the [DataGrid](/concepts/05%20Widgets/DataGrid/00%20Overview.md '/Documentation/Guide/Widgets/DataGrid/Overview/') widget. This widget is shown only when the [CheckBox](/concepts/05%20Widgets/CheckBox '/Documentation/Guide/Widgets/CheckBox/') in the `show-order` item is checked. Both the `order` and `show-order` items are unbound items. 

---
##### jQuery

    <!--JavaScript-->$(function () {
        var isOrderShown = false;
        var form = $("#form").dxForm({
            formData: {
                firstName: "John",
                lastName: "Smith"
            },
            items: [
                "firstName", "lastName", {
                    name: "show-order",
                    label: {
                        text: "Show the order"
                    },
                    template: function (data, $itemElement) {
                        $("<div>").appendTo($itemElement).dxCheckBox({
                            value: isOrderShown,
                            onValueChanged: function(e) {
                                isOrderShown = e.value;
                                form.itemOption("order", "visible", isOrderShown);
                            }
                        });
                    }
                }, {
                    name: "order",
                    visible: isOrderShown,
                    template: function (data, $itemElement) {
                        $("<div id='dataGrid'>")
                            .appendTo($itemElement)
                            .dxDataGrid({
                                dataSource: [{
                                    productName: "DesktopLCD 19",
                                    cost: 68,
                                    salePrice: 110
                                }, {
                                    productName: "DesktopLCD 21",
                                    cost: 75,
                                    salePrice: 120
                                }]
                            });
                    }
                }
            ]
        }).dxForm("instance");
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item name="show-order">
            <dxo-label text="Show the Order"></dxo-label>
            <div *dxTemplate>
                <dx-check-box
                    [(value)]="order.visible">
                </dx-check-box>
            </div>
        </dxi-item>
        <dxi-item #order name="order"
            [visible]="false">
            <div *dxTemplate>
                <dx-data-grid
                    [dataSource]="orders">
                </dx-data-grid>
            </div>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule, DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Smith"
        }
        orders = [{
            productName: "DesktopLCD 19",
            cost: 68,
            salePrice: 110
        }, {
            productName: "DesktopLCD 21",
            cost: 75,
            salePrice: 120
        }]
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCheckBoxModule,
            DxDataGridModule
        ],
        // ...
    })

---

#####See Also#####
- [Form - Generate a Data Object from Form Items](/concepts/05%20Widgets/Form/35%20Generate%20a%20Data%20Object%20from%20Form%20Items.md '/Documentation/Guide/Widgets/Form/Generate_a_Data_Object_from_Form_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')