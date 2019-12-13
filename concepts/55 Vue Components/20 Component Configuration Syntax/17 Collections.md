Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light) widget's [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option:

    <!-- tab: App.vue -->
    <template>
        <dx-data-grid>
            <dx-column
                data-field="firstName"
                caption="Name"
            />
            <dx-column
                data-field="lastName"
                caption="Surname"
            />
        </dx-data-grid>
    </template>

    <script>
    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

DevExtreme collection widgets also support the `DxItem` component. It allows you to declare collection items in the widget markup. A `dx-item` element can contain custom markup and have attributes that control parts of item appearance, such as `badge` in the following code. The attributes are described in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') section of each collection widget. Ensure to specify that an item's content is in the default [slot](https://vuejs.org/v2/guide/components-slots.html).

    <!-- tab: App.vue -->
    <template>
        <dx-list>
            <dx-item #default>Orange</dx-item>
            <dx-item #default badge="New">White</dx-item>
            <dx-item #default>Black</dx-item>
        </dx-list>
    </template>

    <script>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxItem
        }
    }
    </script>

`dx-item` also supports structural directives provided by Vue, such as `v-for`:

    <!-- tab: App.vue -->
    <template>
        <dx-list>
            <dx-item #default><h1>Available items</h1></dx-item>
            <dx-item
                v-for="item in listItems"
                :key="item.text"
                :badge="item.badge"
                #default>
                {{ item.text }}
            </dx-item>
        </dx-list>
    </template>

    <script>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxItem
        },
        data() {
            return {
                listItems: [{
                    text: 'Cars',
                    badge: '12'
                }, {
                    text: 'Bikes',
                    badge: '5'
                }]
            }
        }
    }
    </script>
