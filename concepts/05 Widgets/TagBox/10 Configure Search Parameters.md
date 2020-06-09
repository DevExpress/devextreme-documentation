[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

The **TagBox** widget allows an end user to search through its items. This feature is disabled by default. To enable it, assign **true** to the [searchEnabled](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchEnabled') option. Use the [searchExpr](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchExpr') option to specify which data fields should be searched. Assign an _array_ of field names to this option if you need to search several fields.

---
##### jQuery

    <!--JavaScript-->
    const tagBoxData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: ['capital', 'country']
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            :search-enabled="true"
            :search-expr="searchExpr"
            value-expr="id"
            display-expr="country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: [
                    { id: 1, country: 'Afghanistan', capital: 'Kabul' },
                    { id: 2, country: 'Albania', capital: 'Tirana' },
                    // ...
                ],
                searchExpr: ['capital', 'country']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const tagBoxData = [
        { id: 1, country: 'Afghanistan', capital: 'Kabul' },
        { id: 2, country: 'Albania', capital: 'Tirana' },
        // ...
    ];
    const searchExpr = ['capital', 'country'];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    searchEnabled={true}
                    searchExpr={searchExpr}
                    valueExpr="id"
                    displayExpr="country"
                />
            );
        }
    }

    export default App;

---

When a user types a string in the input field, the **TagBox** suggests all items that *contain* this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchMode') option if you want the **TagBox** to suggest only those items that _start_ with the input string.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchMode: 'startswith'
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        searchMode="startswith">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            :search-enabled="true"
            value-expr="id"
            display-expr="country"
            search-expr="country"
            search-mode="startswith"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: [
                    { id: 1, country: 'Afghanistan', capital: 'Kabul' },
                    { id: 2, country: 'Albania', capital: 'Tirana' },
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

    import { TagBox } from 'devextreme-react/tag-box';

    const tagBoxData = [
        { id: 1, country: 'Afghanistan', capital: 'Kabul' },
        { id: 2, country: 'Albania', capital: 'Tirana' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    searchEnabled={true}
                    valueExpr="id"
                    displayExpr="country"
                    searchExpr="country"
                    searchMode="startswith"
                />
            );
        }
    }

    export default App;

---

There is a delay between the moment a user finishes typing and the moment the search is executed. To increase or descrease it, use the [searchTimeout](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#searchTimeout') option. The delay is measured in milliseconds.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: 'country',
            searchTimeout: 1000
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [searchTimeout]="1000">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            :search-enabled="true"
            :search-timeout="1000"
            value-expr="id"
            display-expr="country"
            search-expr="country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: [
                    { id: 1, country: 'Afghanistan', capital: 'Kabul' },
                    { id: 2, country: 'Albania', capital: 'Tirana' },
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

    import { TagBox } from 'devextreme-react/tag-box';

    const tagBoxData = [
        { id: 1, country: 'Afghanistan', capital: 'Kabul' },
        { id: 2, country: 'Albania', capital: 'Tirana' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    searchEnabled={true}
                    searchTimeout={1000}
                    valueExpr="id"
                    displayExpr="country"
                    searchExpr="country"
                />
            );
        }
    }

    export default App;

---

The **TagBox** widget starts searching after a user has typed at least one character by default. Use the **minSearchLength** option to increase the number of characters that triggers the search. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            searchEnabled: true,
            searchExpr: "country",
            minSearchLength: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country"
        [searchEnabled]="true"
        searchExpr="country"
        [minSearchLength]="3">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            :search-enabled="true"
            :min-search-length="3"
            value-expr="id"
            display-expr="country"
            search-expr="country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: [
                    { id: 1, country: 'Afghanistan', capital: 'Kabul' },
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

    import { TagBox } from 'devextreme-react/tag-box';

    const tagBoxData = [
        { id: 1, country: 'Afghanistan', capital: 'Kabul' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    searchEnabled={true}
                    minSearchLength={3}
                    valueExpr="id"
                    displayExpr="country"
                    searchExpr="country"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox - Control the Behavior](/concepts/05%20Widgets/TagBox/03%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/')
- [TagBox - Handle the Value Change Event](/concepts/05%20Widgets/TagBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)

[tags]tagBox, tag box, editor, search, search mode, search expression, time interval, delay, search timeout, min search length
