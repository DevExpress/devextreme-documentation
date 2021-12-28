To customize item and group titles appearance, use [itemTemplate](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#itemTemplate) and [groupTemplate](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#groupTemplate).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject;
            }, 
            groupTemplate: function (data, index, element) {
                return data.key + " - " + data.items.length;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
        <div *dxTemplate="let itemData of 'listItem'">
            {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
        </div>
        <div *dxTemplate="let data of 'listGroup'">
            {{ data.key + " - " + data.items.length }}
        </div>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            item-template="list-item"
            group-template="group-list"
        >
            <template #list-item="{ data: itemData }">
                {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
            </template>
            <template #group-list="{ data }">
                {{ data.key + " - " + data.items.length }}
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

    const renderListGroup = (data) => {
        return (
            <div>{ data.key + " - " + data.items.length }</div>
        );
    }
    
    function App() {
        return (
            <{WidgetName} ...
                itemRender={renderListItem}
                groupRender={renderListGroup}
            />
        );
    }
    export default App;

---

You have configured basic Lookup features. To take a more detailed look at this UI component, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)
* [API Reference](/api-reference/10%20UI%20Components/dxLookup '/Documentation/ApiReference/UI_Components/dxLookup/')