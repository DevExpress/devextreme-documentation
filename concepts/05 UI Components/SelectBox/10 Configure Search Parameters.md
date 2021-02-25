[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property.

The SelectBox UI component allows an end user to search through its items. This feature is disabled by default. To enable it, assign **true** to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchEnabled') property. Use the [searchExpr](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchExpr') property to specify which data fields should be searched. Assign an _array_ of field names to this property if you need to search several fields.

---
##### jQuery

    <!--JavaScript-->
    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: ['country', 'capital']
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :search-enabled="true"
            :search-expr="['country', 'capital']"
            display-expr="country"
            value-expr="id"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = [
                { id: 1, country: "Afghanistan", capital: "Kabul" },
                { id: 2, country: "Albania", capital: "Tirana" },
                // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    searchEnabled={true}
                    searchExpr={['country', 'capital']}
                    displayExpr="country"
                    valueExpr="id"
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/"
}

When a user types a string in the input field, the SelectBox suggests all items that _contain_ this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchMode') property if you want the SelectBox to suggest only those items that _start_ with the input string.

---
##### jQuery

    <!--JavaScript-->
    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith'
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        searchMode="startswith">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :search-enabled="true"
            search-expr="country"
            display-expr="country"
            value-expr="id"
            search-mode="startswith"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = [
                { id: 1, country: "Afghanistan", capital: "Kabul" },
                { id: 2, country: "Albania", capital: "Tirana" },
                // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    searchEnabled={true}
                    searchExpr="country"
                    displayExpr="country"
                    valueExpr="id"
                    searchMode="startswith"
                />
            );
        }
    }
    export default App;

---

There is a delay between the moment a user finishes typing and the moment the search is executed. To increase or descrease it, use the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchTimeout') property. The delay is measured in milliseconds.

---
##### jQuery

    <!--JavaScript-->
    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchTimeout: 1000
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [searchTimeout]="1000">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :search-enabled="true"
            :search-timeout="1000"
            search-expr="country"
            display-expr="country"
            value-expr="id"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = [
                { id: 1, country: "Afghanistan", capital: "Kabul" },
                { id: 2, country: "Albania", capital: "Tirana" },
                // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    searchEnabled={true}
                    searchTimeout={1000}
                    searchExpr="country"
                    displayExpr="country"
                    valueExpr="id"
                />
            );
        }
    }
    export default App;

---

The SelectBox UI component starts searching after a user has typed at least one character by default. Use the **minSearchLength** property to increase the number of characters that triggers the search. 

---
##### jQuery

    <!--JavaScript-->
    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: "country",
            minSearchLength: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [minSearchLength]="3">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :search-enabled="true"
            :min-search-length="3"
            search-expr="country"
            display-expr="country"
            value-expr="id"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = [
                { id: 1, country: "Afghanistan", capital: "Kabul" },
                // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const selectBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    searchEnabled={true}
                    minSearchLength={3}
                    searchExpr="country"
                    displayExpr="country"
                    valueExpr="id"
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [SelectBox - Create a User-Defined Item](/concepts/05%20Widgets/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/UI_Components/SelectBox/Create_a_User-Defined_Item/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20Widgets/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')

[tags]selectBox, select box, editor, search, search mode, search expression, time interval, delay, search timeout, min search length
