Users can select Tabs component items in two different modes: `'single'` (default) or `'multiple'`. You can use the [selectionMode](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectionMode') property to change the mode. To preselect or to select an item programmatically, pass its index in the data source array to the [selectedIndex](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectedIndex') property. As an alternative, you can use the [selectedItem](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectedItem') (for `'single'` selection mode) or [selectedItems](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectedItems') (for `'multiple'` selection mode) properties.

The following code sets the [selectionMode](/api-reference/10%20UI%20Components/dxTabs/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectionMode') to `'multiple'` and preselects the third tab:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tabs").dxTabs({
            // ...
            selectedIndex: 2,
            selectionMode: 'multiple'
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tabs ...
        [selectedIndex]="2"
        selectionMode="multiple"
    >
        <!-- ... -->
    </dx-tabs>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dxTabs
            :selected-index="2"
            selection-mode="multiple"
        >
            <!-- ... -->
        </dxTabs>
    </template>

    <script>
    // ...
    </script>

    <style>
    /* ... */
    </style>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Tabs
                selectedIndex={2}
                selectionMode="multiple"
            >
                <!-- ... -->
            </Tabs>
        );
    }

    export default App;

---

