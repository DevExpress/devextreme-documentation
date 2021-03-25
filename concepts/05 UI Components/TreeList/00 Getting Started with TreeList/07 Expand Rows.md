You can use the [expandedRowKeys](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#expandedRowKeys) property to expand individual rows. Alternatively, you can enable the [autoExpandAll](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoExpandAll) property to expand all rows, as shown in the following code:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            autoExpandAll: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... 
        [autoExpandAll]="true">
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... 
                :auto-expand-all="true">
                <!-- ... -->
            </DxTreeList>
        </div>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <div className="App">
                <TreeList ... 
                    autoExpandAll={true}>
                    {/* ... */}
                </TreeList>
            </div>
        );
    }

    export default App;

---

