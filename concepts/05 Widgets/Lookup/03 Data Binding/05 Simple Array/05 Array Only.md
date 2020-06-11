Bind the **Lookup** to an array by passing it to the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dataSource') option. The array may contain primitive values...

---
##### jQuery

    <!--JavaScript-->const products = ["HD Video Player", "SuperHD Video Player", "SuperPlasma 50", "SuperLED 50"];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: products
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = ["HD Video Player", "SuperHD Video Player", "SuperPlasma 50", "SuperLED 50"];
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
        <DxLookup :data-source="products"/>
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
                products: ['HD Video Player', 'SuperHD Video Player', 'SuperPlasma 50', 'SuperLED 50']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    const products = ['HD Video Player', 'SuperHD Video Player', 'SuperPlasma 50', 'SuperLED 50'];

    class App extends React.Component {
        render() {
            return (
                <Lookup dataSource={products}/>
            );
        }
    }

    export default App;

---

... or objects.

---
##### jQuery

    <!--JavaScript-->const products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: products,
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="price"
        displayExpr="name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [
            { name: "HD Video Player", price: 100 },
            { name: "SuperHD Video Player", price: 420 },
            { name: "SuperPlasma 50", price: 1500 },
            { name: "SuperLED 50", price: 200 }
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
            :data-source="products"
            value-expr="price"
            display-expr="name"
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
                products: [
                    { name: 'HD Video Player', price: 100 },
                    { name: 'SuperHD Video Player', price: 420 },
                    { name: 'SuperPlasma 50', price: 1500 },
                    { name: 'SuperLED 50', price: 200 }
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

    const products = [
        { name: 'HD Video Player', price: 100 },
        { name: 'SuperHD Video Player', price: 420 },
        { name: 'SuperPlasma 50', price: 1500 },
        { name: 'SuperLED 50', price: 200 }
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={products}
                    valueExpr="price"
                    displayExpr="name"
                />
            );
        }
    }

    export default App;

---

You can create a [Query](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept') if objects in an array need to be processed (sorted, filtered, grouped, etc.). For example, in the following code, a Query sorts objects in the `products` array by the `price` field in descending order:

---
##### jQuery

        <!--JavaScript-->const products = [
            { name: "HD Video Player", price: 100 },
            // ...
        ];

        $(function() {
            $("#lookupContainer").dxLookup({
                dataSource: DevExpress.data.query(products)
                                .sortBy("price", true)
                                .toArray(),
                valueExpr: 'price',
                displayExpr: 'name'
            });
        });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="getSortedProducts()"
        valueExpr="price"
        displayExpr="name">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        products = [
            { name: "HD Video Player", price: 100 },
            // ...
        ];
        getSortedProducts () {
            return query(this.products)
                    .sortBy("price", true)
                    .toArray();
        }
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
            :data-source="getSortedProducts()"
            value-expr="price"
            display-expr="name"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';
    import query from "devextreme/data/query";

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                products: [
                    { name: 'HD Video Player', price: 100 },
                    // ...
                ]
            };
        },
        methods: {
            getSortedProducts () {
                return query(this.products)
                    .sortBy("price", true)
                    .toArray();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';
    import query from "devextreme/data/query";

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.products = [
                { name: 'HD Video Player', price: 100 },
                // ...
            ];

            this.getSortedProducts = this.getSortedProducts.bind(this);
        }

        getSortedProducts() {
            return query(this.products)
                .sortBy("price", true)
                .toArray();
        }

        render() {
            return (
                <Lookup
                    dataSource={this.getSortedProducts()}
                    valueExpr="price"
                    displayExpr="name"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/70%20Data%20Binding/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Binding/Data_Layer/#Query_Concept')
- [Bind to the ArrayStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')
- [Access the DataSource](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, data binding, provide data, array, process data, query
