The **Autocomplete** widget is a textbox that provides suggestions while a user types into it.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Autocomplete/Overview/"
}

The following code adds the **Autocomplete** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#dataSource') to be specified. In addition, you can specify the [placeholder](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#placeholder') to be displayed when the **Autocomplete** is empty.

---
##### jQuery

    <!--HTML-->
    <div id="autocompleteContainer"></div>

    <!--JavaScript-->
    var autocompleteData = [
        "Afghanistan",
        "Albania",
        // ...
    ];
    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            placeholder: 'Type country name...'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name...">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        autocompleteData = [
            "Afghanistan",
            "Albania",
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
            placeholder="Type country name..."
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                autocompleteData: [
                    'Afghanistan',
                    'Albania',
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    const autocompleteData = [
        'Afghanistan',
        'Albania',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Autocomplete
                    dataSource={autocompleteData}
                    placeholder="Type country name..."
                />
            );
        }
    }

    export default App;

---

If your data is an array of objects, use the [valueExpr](/api-reference/10%20UI%20Widgets/dxAutocomplete/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#valueExpr') option to specify the field providing suggestions.

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
            placeholder: 'Type country name...',
            valueExpr: 'country'
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name..."
        valueExpr="country">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
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
            placeholder="Type country name..."
            value-expr="country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
                    placeholder="Type country name..."
                    valueExpr="country"
                />
            );
        }
    }

    export default App;

---

Usually, the data field that provides suggestions is the same data field that is searched for the typed text. If in your case, it is two different fields: assign the field providing suggestions to the **valueExpr** option and the field to be searched - to the [searchExpr](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#searchExpr') option. Note that **searchExpr** also accepts arrays in case you need several fields to search in.

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
            placeholder: 'Type capital name',
            valueExpr: 'country',
            searchExpr: 'capital'            
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        placeholder="Type country name..."
        valueExpr="country"
        searchExpr="capital">
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from 'devextreme-angular'
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
            placeholder="Type capital name"
            value-expr="country"
            search-expr="capital"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
                    placeholder="Type capital name"
                    valueExpr="country"
                    searchExpr="capital"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [Autocomplete - Customize Item Appearance](/concepts/05%20Widgets/Autocomplete/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Autocomplete/Customize_Item_Appearance')
- [Autocomplete - Configure Search Parameters](/concepts/05%20Widgets/Autocomplete/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/Autocomplete/Configure_Search_Parameters')
- [Autocomplete API Reference](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/')

[tags]dxautocomplete, autocomplete, collection container, collection widget, editor, overview, data source