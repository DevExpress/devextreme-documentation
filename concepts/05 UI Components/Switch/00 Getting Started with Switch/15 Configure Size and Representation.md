The component allows you to configure its size and representation. To specify a width, assign the needed value to the [width](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#width) property. Use the [rtlEnabled](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#rtlEnabled) property to switch the widget to a right-to-left representation. If you set this property to `true`, the Switch label flows from right to left, and the layout of elements is reversed.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switch").dxSwitch({
            // ...
            width: 80,
            rtlEnabled: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch ...
        [width]="80"
        [rtlEnabled]="true"
    >
    </dx-switch>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch ...
            :width="80"
            :rtlEnabled="true"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    
    function App() {
        // ...
        return (
            <Switch ...
                width="80"
                rtlEnabled={true}
            />
        );
    }

    export default App;

---