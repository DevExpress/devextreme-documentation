Use the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemTemplate) property to specify a template for all nodes, as done in this tutorial. If you need to add a template for a specific node, use the [template](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#template) node's property. It will override the global template. 

You can also use additional fields to customize node appearance. For example, you can enable the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) field for those nodes that should be expanded on startup:

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#treeView").dxTreeView({ 
            // ...
            itemTemplate: function(item) {
                if (item.price) {
                    return `<div> ${item.name} ($${item.price}) </div>`;
                } else {
                    return `<div> ${item.name} </div>`;
                }
            },
        });
    });

    <!-- tab: products.js -->
    // ...

    const products = [
        {
            ID: "1",
            name: "Stores",
            expanded: true
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West",
            expanded: true
        }, 
        // ... 
        {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions",
            expanded: true
        }, 
        // ...
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        itemTemplate="productTemplate">
        <div *dxTemplate="let product of 'productTemplate'">
            {{ product.price ? product.name + " $(" + product.price + ")" : product.name }}
        </div>
    </dx-tree-view>

    <!-- tab: products.js -->
    // ...

    export class Product {
        ID: string;
        name: string;
        categoryId?: string;
        expanded?: boolean;
        image?: string;
        price?: number;
    }

    const products: Product[] = [
        {
            ID: "1",
            name: "Stores",
            expanded: true
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West",
            expanded: true
        }, 
        // ... 
        {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions",
            expanded: true
        }, 
        // ...
    ];

    // ...

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView ...
            item-template="product-template">
            <template #product-template="product">
                {{ product.data.price ? product.data.name + " ($" + product.data.price + ")" : product.data.name }}
            </template>
        </DxTreeView>
    </template>
    // ...

    <!-- tab: products.js -->
    // ...

    const products = [
        {
            ID: "1",
            name: "Stores",
            expanded: true
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West",
            expanded: true
        }, 
        // ... 
        {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions",
            expanded: true
        }, 
        // ...
    ];

    export default products;

##### React

    <!-- tab: App.js -->
    // ...

    const itemTemplate = (item) => {
        if (item.price) {
            return `<div> ${item.name} ($${item.price}) </div>`;
        } else {
            return `<div> ${item.name} </div>`;
        }
    }

    function App() {
        return (
            <TreeView ...
                itemRender={itemTemplate}
            />
        );
    }

    export default App;

    <!-- tab: products.js -->
    // ...

    const products = [
        {
            ID: "1",
            name: "Stores",
            expanded: true
        }, {
            ID: "1_1",
            categoryId: "1",
            name: "Super Mart of the West",
            expanded: true
        }, 
        // ... 
        {
            ID: "1_1_2",
            categoryId: "1_1",
            name: "Televisions",
            expanded: true
        }, 
        // ...
    ];

    export default products;

---
