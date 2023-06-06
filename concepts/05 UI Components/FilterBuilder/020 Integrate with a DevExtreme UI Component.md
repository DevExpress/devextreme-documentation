The FilterBuilder's [fields](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#fields') array should 
contain data fields from a UI component's data source. For example, the following code passes the [List's](/concepts/05%20UI%20Components/List/00%20Getting%20Started%20with%20List '/Documentation/Guide/UI_Components/List/Getting_Started_with_List') `Name` and `Price` fields to the FilterBuilder:

---
#####jQuery

    <!--JavaScript-->
    const products = [{
        ID: 1,
        Name: "HD Video Player",
        Price: 330,
        Category: "Video Players"
    }, {
        ID: 2,
        Name: "SuperPlasma 50",
        Price: 2400,
        Category: "Televisions"
    }, 
    // ...
    ];
    const fields = [{
        dataField: "ID",
        dataType: "number"
    }, {
        dataField: "Name"
    }, {
        dataField: "Price",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#list").dxList({
            dataSource: products, 
            itemTemplate: function (data) {
                return $("<div>").text(data.Category ": " data.Name);
            }
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: fields
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder>
        <dxi-field
            dataField="ID"
            dataType="number">
        </dxi-field>
        <dxi-field dataField="Name"></dxi-field>
        <dxi-field
            dataField="Price"
            dataType="number"
            format="currency">
        </dxi-field>
    </dx-filter-builder>
    <dx-list 
        [dataSource]="products">
        <div *dxTemplate="let item of 'item'">
            <div>{{item.Category}}: {{item.Name}}</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule, DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [{
            ID: 1,
            Name: "HD Video Player",
            Price: 330,
            Category: "Video Players"
        }, {
            ID: 2,
            Name: "SuperPlasma 50",
            Price: 2400,
            Category: "Televisions"
        }, 
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder>
            <DxField
                data-field="ID"
                data-type="number"
            />
            <DxField data-field="Name" />
            <DxField
                data-field="Price"
                data-type="number"
                format="currency"
            />
        </DxFilterBuilder>
        <DxList :data-source="products">
            <template #item="{ data }">
                <div>{{ data.Category }}: {{ data.Name }}</div>
            </template>
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, { DxField } from 'devextreme-vue/filter-builder';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxFilterBuilder,
            DxField,
            DxList
        },
        data() {
            return {
                products: [{
                    ID: 1,
                    Name: "HD Video Player",
                    Price: 330,
                    Category: "Video Players"
                }, {
                    ID: 2,
                    Name: "SuperPlasma 50",
                    Price: 2400,
                    Category: "Televisions"
                }, 
                // ...
                ]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, { Field } from 'devextreme-react/filter-builder';
    import List from 'devextreme-react/list';

    const products = [{
        ID: 1,
        Name: "HD Video Player",
        Price: 330,
        Category: "Video Players"
    }, {
        ID: 2,
        Name: "SuperPlasma 50",
        Price: 2400,
        Category: "Televisions"
    }, 
    // ...
    ];

    const ListItem = (data) => {
        return (
            <div>{ data.Category }: { data.Name }</div>
        );
    }

    export default function App() {
        return (
            <React.Fragment>
                <FilterBuilder>
                    <Field
                        dataField="ID"
                        dataType="number"
                    />
                    <Field dataField="Name" />
                    <Field
                        dataField="Price"
                        dataType="number"
                        format="currency"
                    />
                </FilterBuilder>
                <List
                    dataSource={products}
                    itemRender={ListItem}
                />
            </React.Fragment>
        );
    }

---

To filter data, update the data source's [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') according to the built filter expression. The following code does this on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                const filterExpr = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                const listDataSource = $("#list").dxList("instance").getDataSource();
                listDataSource.filter(filterExpr);
                listDataSource.load();
            },
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxListModule, 
        DxFilterBuilderModule, 
        DxButtonModule,
        DxListComponent, 
        DxFilterBuilderComponent 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        @ViewChild(DxFilterBuilderComponent, { static: false }) filterBuilder: DxFilterBuilderComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        // @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        applyFilter() {
            const listDataSource = this.list.getDataSource();
            listDataSource.filter(this.filterBuilder.getFilterExpression());
            listDataSource.load();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule,
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <!-- ... -->
    <dx-button 
        text="Apply Filter"
        (onClick)="applyFilter()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder :ref="filterBuilderRefKey">
            <!-- ... -->
        </DxFilterBuilder>
        <DxList :ref="listRefKey" ... >
            <!-- ... -->
        </DxList>
        <DxButton 
            text="Apply Filter"
            @click="applyFilter"
        />
    </template>

    <script>
    // ...
    import DxButton from 'devextreme-vue/button';

    const filterBuilderRefKey = "my-filter-builder";
    const listRefKey = "my-list";

    export default {
        components: {
            // ...
            DxButton
        },
        data() {
            return {
                // ...
                filterBuilderRefKey,
                listRefKey
            };
        },
        method: {
            applyFilter() {
                const listDataSource = this.list.getDataSource();
                listDataSource.filter(this.filterBuilder.getFilterExpression());
                listDataSource.load();
            }
        },
        computed: {
            filterBuilder: function() {
                return this.$refs[filterBuilderRefKey].instance;
            },
            list: function() {
                return this.$refs[listRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    // ...
    import Button 'devextreme-react/button';

    export default function App() {
        const filterBuilder = useRef(null);
        const list = useRef(null);

        const applyFilter = () => {
            const listDataSource = list.getDataSource();
            listDataSource.filter(filterBuilder.getFilterExpression());
            listDataSource.load();
        };

        return (
            <React.Fragment>
                <FilterBuilder ref={filterBuilder}>
                    {/* ... */}
                </FilterBuilder>
                <List ref={list}>
                    {/* ... */}
                </List>
                <Button 
                    text="Apply Filter"
                    onClick={applyFilter}
                />
            </React.Fragment>
        );
    }

---

#include common-demobutton-named with {
    name: "Filter Builder with Data Grid",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/"
}
#include common-demobutton-named with {
    name: "Filter Builder with List",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/"
}

#####See Also#####
- [Predefine Filter Values](/concepts/05%20UI%20Components/FilterBuilder/040%20Predefine%20Filter%20Values.md '/Documentation/Guide/UI_Components/FilterBuilder/Predefine_Filter_Values/')
