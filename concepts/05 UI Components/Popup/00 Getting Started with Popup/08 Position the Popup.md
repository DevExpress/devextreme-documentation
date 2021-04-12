To position the Popup within the viewport, use the [position](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#position) property. The Popup also allows users to change its position via drag and drop. To enable this functionalty, set the [dragEnabled](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#dragEnabled) property to **true**. Users drag the Popup by its title bar, so make sure that you [configured it](Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle).

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            dragEnabled: true,
            position: "center"
        });
        // ...
    });

 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup...
        [dragEnabled]="true"
        position="center">
        <!-- ... -->
    </dx-popup>
    <!-- ... -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup...
                :drag-enabled="true"
                position="center">
                <!-- ... -->
            </DxPopup>
            <!-- ... -->
        </div>
    </template>

    <script>
        // ...
    </script>


##### React

    <!-- tab: App.js -->
    // ...
    const App = () => {
        // ...
        return (
            <div className="App">
                <Popup
                    dragEnabled={true}
                    position="center"
                />
                {/* ... */}
            </div>
        );
    }

    export default App;


---
