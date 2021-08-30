Templates allow you to customize UI components. DevExtreme templates make use of the <a href="https://v3.vuejs.org/guide/component-slots.html#named-slots" target="_blank">named slots</a> functionality provided by Vue.

In the following code, an [itemTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemTemplate') called `list-item` and a [groupTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate') called `list-group` customize items and groups in the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/Vue/Light) UI component. The `data` <a href="https://v3.vuejs.org/guide/component-slots.html#scoped-slots" target="_blank">slot prop</a> exposes the item or group data object; the `index` slot prop gives access to the item index.

    <!-- tab: App.vue -->
    <template>
        <DxList
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
        </DxList>
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

[important] In Vue 2 applications, a`<template>` should not contain more than one root element. Vue 3 applications have no restriction.

Refer to the common [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') article for more information.
