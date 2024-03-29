To customize item appearance, use [itemTemplate](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#itemTemplate').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ...
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        itemTemplate="listItem">
        <!-- ... -->
        <div *dxTemplate="let itemData of 'listItem'">
            {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
        </div>
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            item-template="list-item">
            <template #list-item="{ data: itemData }">
                {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
            </template>
        </DxLookup>
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const renderListItem = (data) => {
        return (
            <div>{ data.disabled ? '\u274C ' + data.Subject : '\u2705 ' + data.Subject }</div>
        );
    }
    
    function App() {
        return (
            <Lookup ...
                itemRender={renderListItem}
            />
        );
    }
    export default App;

---

