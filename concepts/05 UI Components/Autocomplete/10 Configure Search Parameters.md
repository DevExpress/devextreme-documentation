The **Autocomplete** can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchMode') property to change the mode.

---
##### jQuery

    <!--JavaScript-->
    const autocompleteData = [
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

##### Vue

    <template>
        <DxAutocomplete
            :data-source="autocompleteData"
            value-expr="country"
            search-mode="startswith"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                autocompleteData: [
                    { country: 'Afghanistan', capital: 'Kabul' },
                    { country: 'Albania', capital: 'Tirana' },
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    const autocompleteData = [
        { country: 'Afghanistan', capital: 'Kabul' },
        { country: 'Albania', capital: 'Tirana' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Autocomplete
                    dataSource={autocompleteData}
                    valueExpr="country"
                    searchMode="startswith"
                />
            );
        }
    }

    export default App;

---

By default, the **Autocomplete** UI component starts providing suggestions once an end user types the first character. To increase the number of characters that triggers suggestions, use the [minSearchLength](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#minSearchLength') property. 

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

##### Vue

    <template>
        <DxAutocomplete :min-search-length="3"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    class App extends React.Component {
        render() {
            return (
                <Autocomplete minSearchLength={3}/>
            );
        }
    }

    export default App;

---

You can also specify the time interval the UI component should wait before providing suggestions. Assign this time interval measured in milliseconds to the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout') property.

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

##### Vue

    <template>
        <DxAutocomplete :search-timeout="500"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    class App extends React.Component {
        render() {
            return (
                <Autocomplete searchTimeout={500}/>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Autocomplete - Customize Item Appearance](/concepts/05%20Widgets/Autocomplete/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Autocomplete/Customize_Item_Appearance/')
- [Autocomplete Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Autocomplete/Overview)
- [Autocomplete API Reference](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Components/dxAutocomplete/')

[tags]autocomplete, search, search mode, time interval, min search length