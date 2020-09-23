Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light) widget's [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option:

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                data-field="firstName"
                caption="Name"
            />
            <DxColumn
                data-field="lastName"
                caption="Surname"
            />
        </DxDataGrid>
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

DevExtreme collection widgets also support the `DxItem` component. It allows you to declare collection items in the widget markup. A `DxItem` element can contain custom markup and have attributes that control parts of item appearance, such as `badge` in the following code. The attributes are described in the [items](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') section of each collection widget. Ensure to specify that an item's content is in the default [slot](https://vuejs.org/v2/guide/components-slots.html).

    <!-- tab: App.vue -->
    <template>
        <DxList>
            <DxItem>
                <template #default>
                    Orange
                </template>
            </DxItem>
            <DxItem badge="New">
                <template #default>
                    White
                </template>
            </DxItem>
            <DxItem>
                <template #default>
                    Black
                </template>
            </DxItem>
        </DxList>
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

`DxItem` also supports structural directives provided by Vue, such as `v-for`:

    <!-- tab: App.vue -->
    <template>
        <DxList>
            <DxItem>
                <template #default>
                    <h1>Available items</h1>
                </template>
            </DxItem>
            <DxItem
                v-for="item in listItems"
                :key="item.text"
                :badge="item.badge">
                <template #default>
                    {{ item.text }}
                </template>
            </DxItem>
        </DxList>
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
