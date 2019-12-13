The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview/"
}

The following code adds the **SelectBox** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/dataSource/') to be specified. In addition, you can specify the [placeholder](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#placeholder') to be displayed when the **SelectBox** is empty.

---
#####jQuery

    <!--HTML-->
    <div id="selectBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            placeholder: "Select a product..."
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="products"
        placeholder="Select a product...">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr')     
    The data field whose value will be written into the [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#value') option.
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr')     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

---
#####jQuery

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

#####See Also#####
#include common-link-configurewidget
- [SelectBox - Customize Item Appearance](/concepts/05%20Widgets/SelectBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/SelectBox/Customize_Item_Appearance/')
- [SelectBox - Configure Search Parameters](/concepts/05%20Widgets/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/')
- [SelectBox - Create a User-Defined Item](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20Widgets/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox - Keyboard Support](/concepts/05%20Widgets/SelectBox/25%20Keyboard%20Support.md '/Documentation/Guide/Widgets/SelectBox/Keyboard_Support/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')

[tags]selectBox, select box, editor, collection widget, overview, data source, value, display expression