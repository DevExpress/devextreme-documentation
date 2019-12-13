Templates allow you to customize widget elements. DevExtreme templates make use of the <a href="https://vuejs.org/v2/guide/components-slots.html#Named-Slots" target="_blank">named slots</a> functionality provided by Vue.

In the following code, an [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate') called `list-item` and a [groupTemplate](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#groupTemplate') called `list-group` customize items and groups in the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/Vue/Light) widget. The `data` <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots" target="_blank">slot prop</a> exposes the item or group data object; the `index` slot prop gives access to the item index.

    <!-- tab: App.vue -->
    <template>
        <dx-list
            :items="groupedItems"
            :grouped="true"
            item-template="list-item"
            group-template="list-group">
            <template #list-item="{ data, index }">
                {{ index }} - {{ data.itemProperty }}
            </template>
            <template #list-group="{ data }">
                {{ data.groupProperty }}
            </template>
        </dx-list>
    </template>

    <script>
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        data() {
            return {
                groupedItems: [ /* ... */ ]
            }
        }
    }
    </script>

[important] A `<template>` should not contain more than one root element.

Refer to the common [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates') article for more information.