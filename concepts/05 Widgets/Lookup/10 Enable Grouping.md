The **Lookup** can organize items in groups. If you use a simple array as a data source, its objects must have the **key** and **items** fields.

---
##### jQuery

    <!--JavaScript-->
    const lookupData = [{
        key: "Mr. John Heart",
        items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
    }, {
        key: "Mrs. Olivia Peyton",
        items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
    }, // ... 
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            grouped: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        [grouped]="true">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [{
            key: "Mr. John Heart",
            items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
        }, {
            key: "Mrs. Olivia Peyton",
            items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
        }, // ... 
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
            :grouped="true"
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
                lookupData: [{
                    key: 'Mr. John Heart',
                    items: ['Google AdWords Strategy', 'New Brochures', 'Update NDA Agreement']
                }, {
                    key: 'Mrs. Olivia Peyton',
                    items: ['Update Personnel Files', 'Non-Compete Agreements', 'Give Final Approval for Refunds']
                }, // ... 
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

    const lookupData = [{
        key: 'Mr. John Heart',
        items: ['Google AdWords Strategy', 'New Brochures', 'Update NDA Agreement']
    }, {
        key: 'Mrs. Olivia Peyton',
        items: ['Update Personnel Files', 'Non-Compete Agreements', 'Give Final Approval for Refunds']
    }, // ... 
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={lookupData}
                    grouped={true}
                />
            );
        }
    }

    export default App;

---

[note]Only one-level grouping is supported.

If you use the [DevExtreme DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'), specify its [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option. In both cases, you need to make the **Lookup** know that its data source is grouped by assigning **true** to the [grouped](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#grouped') option.

---
##### jQuery

    <!--JavaScript-->
    const lookupData = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Andrew", birthYear: 1991, gender: "male" },
        { name: "Daniela", birthYear: 1983, gender: "female" },
        { name: "Lee", birthYear: 1983, gender: "male" },
        { name: "Betty", birthYear: 1983, gender: "female" }
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({ 
                store: lookupData, 
                group: "gender"
            }),
            grouped: true,
            displayExpr: "name",
            valueExpr: "name"
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        [grouped]="true"
        displayExpr="name"
        valueExpr="name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        data = [
            { name: "Amelia", birthYear: 1991, gender: "female" },
            { name: "Benjamin", birthYear: 1983, gender: "male" },
            { name: "Andrew", birthYear: 1991, gender: "male" },
            { name: "Daniela", birthYear: 1983, gender: "female" },
            { name: "Lee", birthYear: 1983, gender: "male" },
            { name: "Betty", birthYear: 1983, gender: "female" }
        ];
        lookupDataSource = new DataSource({
            store: data, 
            group: "gender"
        });
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
            :data-source="dataSource"
            :grouped="true"
            display-expr="name"
            value-expr="name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import DataSource from "devextreme/data/data_source";

    const lookupData = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Andrew', birthYear: 1991, gender: 'male' },
        { name: 'Daniela', birthYear: 1983, gender: 'female' },
        { name: 'Lee', birthYear: 1983, gender: 'male' },
        { name: 'Betty', birthYear: 1983, gender: 'female' }
    ];

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                dataSource: new DataSource({
                    store: lookupData,
                    group: 'gender'
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import DataSource from "devextreme/data/data_source";

    const lookupData = [
        { name: 'Amelia', birthYear: 1991, gender: 'female' },
        { name: 'Benjamin', birthYear: 1983, gender: 'male' },
        { name: 'Andrew', birthYear: 1991, gender: 'male' },
        { name: 'Daniela', birthYear: 1983, gender: 'female' },
        { name: 'Lee', birthYear: 1983, gender: 'male' },
        { name: 'Betty', birthYear: 1983, gender: 'female' }
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataSource = new DataSource({
                store: lookupData,
                group: 'gender'
            });
        }

        render() {
            return (
                <Lookup
                    dataSource={this.dataSource}
                    grouped={true}
                    displayExpr="name"
                    valueExpr="name"
                />
            );
        }
    }

    export default App;

---

To customize group headers, specify a [groupTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#groupTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        [grouped]="true"
        groupTemplate="groupTemplate">
        <div *dxTemplate="let group of 'groupTemplate'; let i = index">
            <div>[{{i + 1}}] Assigned: {{group.key}}</div>
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        lookupDataSource = [{
            key: "Mr. John Heart",
            items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
        }, {
            key: "Mrs. Olivia Peyton",
            items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
        }, // ... 
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
            :data-source="dataSource"
            :grouped="true"
            group-template="group">
            <template #group="{ data, index }">
                <div>[{{index + 1}}] Assigned: {{data.key}}</div>
            </template>
        </DxLookup>
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
                dataSource: [{
                    key: "Mr. John Heart",
                    items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
                }, {
                    key: "Mrs. Olivia Peyton",
                    items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
                }, // ... 
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
    import DataSource from "devextreme/data/data_source";

    const renderGroup = (data, index) => {
        return (
            <div>[{index + 1}] Assigned: {data.key}</div>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataSource = [{
                key: "Mr. John Heart",
                items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
            }, {
                key: "Mrs. Olivia Peyton",
                items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
            }, // ... 
            ];
        }

        render() {
            return (
                <Lookup
                    dataSource={this.dataSource}
                    grouped={true}
                    groupRender={renderGroup}
                />
            );
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    const lookupData = [{
        key: "Mr. John Heart",
        items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
    }, {
        key: "Mrs. Olivia Peyton",
        items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
    }, // ... 
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            grouped: true,
            groupTemplate: function (data) {
                return $("<div>Assigned: " + data.key + "</div>");
            }
        });
    });

#####See Also#####
- [Lookup - Customize the Appearance](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/')
- [Lookup - Enable Paging](/concepts/05%20Widgets/Lookup/15%20Enable%20Paging.md '/Documentation/Guide/Widgets/Lookup/Enable_Paging/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, group, group template, customize