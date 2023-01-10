If you specify a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) for a drop-down editor, the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/).[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) value and the drop-down editor's [valueExpr](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#valueExpr) should be the same. In the examples below, the `ID` is used as both `key` and `valueExpr`. This rule applies to standalone editors and DataGrid/TreeList lookup column editors.

---
##### jQuery

    $('#select-box').dxSelectBox({
        dataSource: new DevExpress.data.DataSource({
            store: {
                type: 'array',
                data: sampleData,
                key: 'ID',
            },
        }),
        valueExpr: 'ID'
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="dataSource"
        valueExpr="ID"
    ></dx-select-box>

    <!-- tab: app.component.ts -->
    import DataSource from 'devextreme/data/data_source';
    import ArrayStore from 'devextreme/data/array_store';

    // ...
    export class AppComponent {
        dataSource: DataSource;
        constructor(service: Service) {
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    data: sampleData,
                    key: 'ID',
                })
            });
        }
    }

##### Vue

    <!-- tab: App.vue-->
    <template>
        <DxSelectBox
            :data-source="dataSource"
            value-expr="ID"
        />
    </template>

    <script>
        import { DxSelectBox } from 'devextreme-vue/select-box';
        import DataSource from 'devextreme/data/data_source';
        // ...

        export default {
            components: {
                DxSelectBox
            },
        data() {
            return {
                dataSource: new DataSource({
                    store: {
                        type: 'array',
                        data: sampleData,
                        key: 'ID'
                    }
                })
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { SelectBox } from 'devextreme-react/select-box';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: {
            type: 'array',
            data: sampleData,
            key: 'ID',
        },
    });

    function App() {
        render (
            <SelectBox
                dataSource={dataSource}
                valueExpr="ID"
            />
        );
    }

    export default App;

---