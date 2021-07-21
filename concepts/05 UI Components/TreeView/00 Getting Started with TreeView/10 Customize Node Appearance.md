If your data objects contain additional fields, you can use them to customize node appearance. For example, you can enable the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) field for those nodes that should be expanded on startup, as shown in the code below. Similarly, you can use the [template](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#template) field to specify a template for individual nodes.

As an alternative to individual templates, you can set an [itemTemplate](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemTemplate) for all nodes. The following code demonstrates this use case:

If you use jQuery, you can apply a 3rd-party template engine. For details, see the [3rd-Party Template Engines](/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines) article.

In this tutorial, we make specific nodes [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) and specify the **itemTemplate**.

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


##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-view ...
        itemTemplate="productTemplate">
        <div *dxTemplate="let product of 'productTemplate'">
            {{ product.price ? product.name + " $(" + product.price + ")" : product.name }}
        </div>
    </dx-tree-view>

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

##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        const itemTemplate = (item) => {
            if (item.price) {
                return `<div> ${item.name} ($${item.price}) </div>`;
            } else {
                return `<div> ${item.name} </div>`;
            }
        }

        return (
            <TreeView ...
                itemTemplate={itemTemplate}
            />
        );
    }

    export default App;

---
