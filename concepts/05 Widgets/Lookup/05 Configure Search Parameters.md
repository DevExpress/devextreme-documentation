[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

The **Lookup** widget allows a user to search through its items. Moreover, the widget offers suggestions while the user types a value into the search box. Usually, the data field that provides suggestions is the same data field that is searched for the typed value. If there are two different fields, assign the field providing suggestions to the **valueExpr** option and the field to be searched to the **searchExpr** option. Assign an array of field names to the **searchExpr** option if you need to search several fields.

---
##### jQuery

    <!--JavaScript-->
    const lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            displayExpr: 'country',
            searchExpr: 'capital',
            placeholder: 'Select country'
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="country"
        displayExpr="country"
        searchExpr="capital"
        placeholder="Select country">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="lookupData"
            value-expr="country"
            display-expr="country"
            search-expr="capital"
            placeholder="Select country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                lookupData: [
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

    import { Lookup } from 'devextreme-react/lookup';

    const lookupData = [
        { country: 'Afghanistan', capital: 'Kabul' },
        { country: 'Albania', capital: 'Tirana' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={lookupData}
                    valueExpr="country"
                    displayExpr="country"
                    searchExpr="capital"
                    placeholder="Select country"
                />
            );
        }
    }

    export default App;

---

The **Lookup** widget can provide suggestions in two different modes: *'contains'* (by default) and *'startswith'*. You can use the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchMode') option to change the mode. You can also use the [searchPlaceholder](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/searchPlaceholder.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchPlaceholder') option to specify a placeholder for an empty search box.

---
##### jQuery

    <!--JavaScript-->
    const lookupData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'country',
            displayExpr: 'country',
            searchMode: 'startswith',
            searchPlaceholder: 'Type country name'
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="country"
        displayExpr="country"
        searchMode="startswith"
        searchPlaceholder="Type country name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="lookupData"
            value-expr="country"
            display-expr="country"
            search-mode="startswith"
            search-placeholder="Type country name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                lookupData: [
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

    import { Lookup } from 'devextreme-react/lookup';

    const lookupData = [
        { country: 'Afghanistan', capital: 'Kabul' },
        { country: 'Albania', capital: 'Tirana' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={lookupData}
                    valueExpr="country"
                    displayExpr="country"
                    searchMode="startswith"
                    searchPlaceholder="Type country name"
                />
            );
        }
    }

    export default App;

---

The **Lookup** widget starts providing suggestions once an end user types the first character by default. Use the [minSearchLength](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#minSearchLength') option to increase the number of characters that triggers suggestions. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            minSearchLength: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [minSearchLength]="3">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :min-search-length="3"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        render() {
            return (
                <Lookup ...
                    minSearchLength={3}
                />
            );
        }
    }

    export default App;

---

There is a delay between the moment a user finishes typing and the moment the **Lookup** starts providing suggestions. To increase or descrease it, use the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchTimeout') option. The delay is measured in milliseconds.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // ...
            searchTimeout: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [searchTimeout]="500">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :search-timeout="500"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        render() {
            return (
                <Lookup ...
                    searchTimeout={500}
                />
            );
        }
    }

    export default App;

---

The **Lookup** widget also clears previous search results before the drop-down menu is displayed by default. Assign **false** to the [cleanSearchOnOpening](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/cleanSearchOnOpening.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#cleanSearchOnOpening') option to keep them.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // ...
            cleanSearchOnOpening: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [cleanSearchOnOpening]="false">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :clean-search-on-opening="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        render() {
            return (
                <Lookup ...
                    cleanSearchOnOpening={false}
                />
            );
        }
    }

    export default App;

---

Assign **false** to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchEnabled') option if you need to disable searching.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#lookupContainer").dxLookup({
            // ...
            searchEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        [searchEnabled]="false">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup ...
            :search-enabled="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        render() {
            return (
                <Lookup ...
                    searchEnabled={false}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup - Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, search, search mode, time interval, min search length, disable searching, placeholder, clean search parameters, searchExpr
