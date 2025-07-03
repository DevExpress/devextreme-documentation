CardView displays all columns from the [columns](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/columns.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/') array. To hide a column, set its [visible](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/visible.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#visible') property to `false`. Hidden columns appear in the [columnChooser](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/columnChooser.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/'). Users can restore hidden columns from it. To enable the column chooser, set the **columnChooser**.[enabled](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/#enabled') property to `true`. If a column should not be visible in the column chooser, do not declare it in the [columns](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/columns.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/') array.

You can also specify other column chooser settings, such as [mode](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/mode.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/#mode'), [position](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/position.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/#position'), and [selection](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/selection.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/#selection'):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            // ...
            columnChooser: {
                enabled: true,
                height: 340,
                mode: "select",
                position: {
                    my: "right top",
                    at: "right bottom",
                    of: ".dx-cardview-column-chooser-button"
                },
                selection: {
                    selectByClick: true
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-column-chooser [enabled]="true" [height]="340" mode="select">
            <dxo-card-view-column-chooser-selection
                [selectByClick]="true"
            ></dxo-card-view-column-chooser-selection>
            <dxo-card-view-position
                my="right top"
                at="right bottom"
                of=".dx-cardview-column-chooser-button"
            ></dxo-card-view-position>
        </dxo-card-view-column-chooser>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumnChooser
                :enabled="true"
                :height="340"
                mode="select"
            >
                <DxPosition
                    my="right top"
                    at="right bottom"
                    of=".dx-cardview-column-chooser-button"
                />
                <DxSelection :select-by-click="true" />
            </DxColumnChooser>
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import DxCardView, { DxColumnChooser, DxPosition, DxSelection } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import CardView, { ColumnChooser, Position, Selection } from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView ... >
                <ColumnChooser
                    enabled={true}
                    height={340}
                    mode="select"
                >
                    <Position
                        my="right top"
                        at="right bottom"
                        of=".dx-cardview-column-chooser-button"
                    />
                    <Selection selectByClick={true} />
                </ColumnChooser>
            </CardView>
        );
    }

    export default App;

---