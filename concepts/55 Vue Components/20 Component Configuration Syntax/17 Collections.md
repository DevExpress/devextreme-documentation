Use nested configuration components. The following example shows how to configure the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Vue/Light)'s [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') property:

    <!-- tab: App.vue (Options API) -->
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

    <!-- tab: App.vue (Composition API) -->
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

    <script setup>
    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';
    </script>

DevExtreme collection UI components also support the `DxItem` element. It allows you to declare collection items in the UI component markup. `DxItem` can contain custom markup and have attributes that control parts of item appearance, such as `badge` in the following code. The attributes are described in the [items](/api-reference/10%20UI%20Components/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxList/Configuration/items/') section of each collection UI component. Ensure to specify that an item's content is in the default <a href="https://v3.vuejs.org/guide/component-slots.html" target="_blank">slot</a>.

    <!-- tab: App.vue (Options API) -->
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

    <!-- tab: App.vue (Composition API) -->
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

    <script setup>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';
    </script>

`DxItem` also supports structural directives provided by Vue, such as `v-for`:

    <!-- tab: App.vue (Options API) -->
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

    <!-- tab: App.vue (Composition API) -->
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

    <script setup>
    import DxList, {
        DxItem
    } from 'devextreme-vue/list';

    const listItems = [{
        text: 'Cars',
        badge: '12'
    }, {
        text: 'Bikes',
        badge: '5'
    }];
    </script>
