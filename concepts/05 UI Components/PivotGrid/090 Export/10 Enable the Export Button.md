PivotGrid has a built-in "Export" button. To enable this button, set the [export](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/').[enabled](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/#enabled') property to `true`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            export: {
                enabled: true
            }
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ... >
            <DxExport :enabled="true" />
        </DxPivotGrid>
    </template>

    <script>
    //...
    </script>

##### React

    <!-- tab: App.tsx -->
    //...

    function App() {
        // ...
        return (
            <PivotGrid ... >
                <Export enabled={true} />
            </PivotGrid>
        );
    }

    export default App;

---

[note] When users click the "Export" button in PivotGrid, the [onExporting](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#onExporting') event handler is executed.