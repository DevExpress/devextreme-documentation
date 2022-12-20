The component allows you to change its [width](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#width). 

You can also use [rtlEnabled](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#rtlEnabled) property to enable Right-to-Left layout. 


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
                width={80}
                rtlEnabled={true}
            />
        );
    }

    export default App;

---