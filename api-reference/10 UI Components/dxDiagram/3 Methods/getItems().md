---
id: dxDiagram.getItems()
---
---
##### shortDescription
Returns an array of diagram items.

##### return: Array<dxDiagramItem>
An array of items (shapes and connectors).

---
The code sample below demonstrates how to get the full collection of diagram items and filter the items that are directly connected to the clicked item.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#diagram').dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: 'ID',
                    data: employees,
                }),
                keyExpr: 'ID',
                textExpr: 'Full_Name',
                parentKeyExpr: 'Head_ID',
            },
            onItemClick(e) {
                var itemKey = e.item.key;
                var connectors = e.component.getItems().filter(function (item) {
                    return item.itemType === "connector" && (item.fromKey === itemKey || item.toKey === itemKey);
                });
                var relativeShapes = [];
                connectors.forEach(element => {
                    if (element.fromKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.toKey)); // all child shapes 
                    if (element.toKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.fromKey)); // all parent shapes
                });
            },
        }).dxDiagram('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram" (onItemClick)="itemClickHandler($event)">
        <dxo-nodes [dataSource]="dataSource" keyExpr="ID" textExpr="Full_Name" parentKeyExpr="Head_ID" />
    </dx-diagram>

    <!-- tab: app.component.ts -->
    // ...
    itemClickHandler(e) {
        var itemKey = e.item.key;
        var connectors = e.component.getItems().filter(function (item) {
            return item.itemType === "connector" && (item.fromKey === itemKey || item.toKey === itemKey);
        });
        var relativeShapes = [];
        connectors.forEach(element => {
            if (element.fromKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.toKey)); // all subsequent shapes 
            if (element.toKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.fromKey)); // all previous shapes
        });
    }
    // ...

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
            @item-click="onItemClick"
        >
            <DxNodes
            :data-source="dataSource"
            :key-expr="'ID'"
            :text-expr="'Full_Name'"
            :parent-key-expr="'Head_ID'"
            >
            <DxAutoLayout
                :type="'tree'"
            />
            </DxNodes>
        </DxDiagram>
    </template>
    <script>
        // ...
        onItemClick(e) {
            var itemKey = e.item.key;
            var connectors = e.component.getItems().filter(function (item) {
                return item.itemType === "connector" && (item.fromKey === itemKey || item.toKey === itemKey);
            });
            var relativeShapes = [];
            connectors.forEach(element => {
                if (element.fromKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.toKey)); // all subsequent shapes 
                if (element.toKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.fromKey)); // all previous shapes
            });
            console.log(relativeShapes);
        },
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    class App extends React.Component {
        constructor(props) {
            // ...
            onItemClick(e) {
            var itemKey = e.item.key;
            var connectors = e.component.getItems().filter(function (item) {
                return item.itemType === "connector" && (item.fromKey === itemKey || item.toKey === itemKey);
            });
            var relativeShapes = [];
            connectors.forEach(element => {
                if (element.fromKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.toKey)); // all subsequent shapes 
                if (element.toKey === itemKey) relativeShapes.push(e.component.getItemByKey(element.fromKey)); // all previous shapes
            });
            },
            // ...
        }

        render() {
            return (
                <Diagram id="diagram" onItemClick={this.onItemClick}>
                    <Nodes dataSource={this.dataSource} keyExpr="ID" textExpr="Full_Name" parentKeyExpr="Head_ID" />
                </Diagram>
            );
        }
    }

---
