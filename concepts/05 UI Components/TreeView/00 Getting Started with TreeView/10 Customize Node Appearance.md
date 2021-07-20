To customize all nodes, specify the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemTemplate) property. If you need to customize individual nodes, specify the [template](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#template) and other [items[] properties](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/).

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
