Use nested configuration components. In the following example, we configure the [Chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview/Vue/Light)'s [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/') option:
 
    <!-- tab: App.vue -->
    <template>
        <DxChart>
            <DxTooltip
                :enabled="true"
                format="thousands"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxTooltip
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxTooltip
        }
    }
    </script>

Object type properties that depend on other options' values are not implemented as nested configuration components because they cannot be typed (**columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') in the **DataGrid**, item's [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') in the **Form**, **items[]**.[options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options') in the **Toolbar**). These properties should be specified with an object.

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                :editor-options="columnEditorOptions"
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
        },
        data() {
            return {
                columnEditorOptions: { width: 100 }
            }
        }
    }
    </script>

[important] We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering.
