Use the [height](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width) properties to set popup's size:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            width: 500,
            height: 500,
        });
        // ...
    });
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup
        [height]="500"
        [width]="500">
        <!-- ... -->
    </dx-popup>


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                :height="500"
                :width="500">
                <!-- ... -->            
            </DxPopup>
        </div>
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
            <div className="App">
                <Popup
                    width={500}
                    height={500}            
                />
            </div>
        );
    }

    export default App;


---
