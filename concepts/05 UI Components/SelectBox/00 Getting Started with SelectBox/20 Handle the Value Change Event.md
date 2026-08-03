Use [onValueChanged](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#onValueChanged) to specify a function that the component executes when users change the SelectBox value. This example implements the [notify](/Documentation/ApiReference/Common/Utils/ui/#notifymessage_type_displayTime) utility method within this function:

---
##### jQuery

    <!-- tab: index.js -->
    $("#selectBox").dxSelectBox({
        onValueChanged(e) {
            DevExpress.ui.notify(
                `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
                'info',
                2000,
            );
        },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .OnValueChanged("handleValueChanged")
    )

    <script>
        function handleValueChanged(e) {
            DevExpress.ui.notify(
                `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
                'info',
                2000,
            );
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        (onValueChanged)="onValueChanged($event)"
    ></dx-select-box>

    <!-- tab: app.component.ts -->
    import { DxSelectBoxModule, type DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';

    // ...
    export class AppComponent {
        onValueChanged(e: DxSelectBoxTypes.ValueChangedEvent): void {
            notify(
                `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
                'info',
                2000,
            );
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            @value-changed="onValueChanged"
        />
    </template>

    <script setup lang="ts">
    import { DxSelectBox, type DxSelectBoxTypes } from 'devextreme-vue/select-box';

    const onValueChanged = (e: DxSelectBoxTypes.ValueChangedEvent): void => {
        notify(
            `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
            'info',
            2000,
        );
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import { SelectBox, type SelectBoxTypes } from 'devextreme-react/select-box';

    export default function App() { 
        const onValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent) => {
            notify(
                `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
                'info',
                2000,
            );
        }, []);

        return (
            <SelectBox
                onValueChanged={onValueChanged}
            />
        );
    }

---

