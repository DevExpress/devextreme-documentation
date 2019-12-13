The **Autocomplete** can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchMode') option to change the mode.

---
##### jQuery

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            searchMode: 'startswith'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="country"
        searchMode="startswith">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

By default, the **Autocomplete** widget starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the [minSearchLength](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#minSearchLength') option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // ...
            minSearchLength: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete ...
        [minSearchLength]="3">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

You can also specify the time interval the widget should wait before providing suggestions. Assign this time interval measured in milliseconds to the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchTimeout') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#autocompleteContainer").dxAutocomplete({
            // ...
            searchTimeout: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete ...
        [searchTimeout]="500">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

---

#####See Also#####
- [Autocomplete - Customize Item Appearance](/concepts/05%20Widgets/Autocomplete/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance/')
- [Autocomplete Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Autocomplete/Overview)
- [Autocomplete API Reference](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/')

[tags]autocomplete, search, search mode, time interval, min search length