Bind the **Lookup** to an array by passing it to the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/dataSource/') option. The array may contain primitive values...

---
#####jQuery

    <!--JavaScript-->var products = ["HD Video Player", "SuperHD Video Player", "SuperPlasma 50", "SuperLED 50"];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: products
        });
    });

#####Angular

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

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource">
    </dx-lookup>

---

... or objects.

---
#####jQuery

    <!--JavaScript-->var products = [
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

#####Angular

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

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="price"
        displayExpr="name">
    </dx-lookup>

---

You can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept') if objects in an array need to be processed (sorted, filtered, grouped, etc.). For example, in the following code, a Query sorts objects in the `products` array by the `price` field in descending order:

---
#####jQuery

    <!--JavaScript-->var products = [
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

#####Angular

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

    <!--HTML-->
    <dx-lookup
        [dataSource]="getSortedProducts()"
        valueExpr="price"
        displayExpr="name">
    </dx-lookup>

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')
- [Bind to the ArrayStore](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/05%20Simple%20Array/10%20ArrayStore.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Simple_Array/ArrayStore/')
- [Access the DataSource](/concepts/05%20Widgets/Lookup/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/Lookup/Data_Binding/Access_the_DataSource/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)

[tags]lookup, data binding, provide data, array, process data, query
