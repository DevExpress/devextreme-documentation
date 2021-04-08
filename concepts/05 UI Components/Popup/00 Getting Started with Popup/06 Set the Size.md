Use the [height](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width) properties to set popup's size. Set the [resizeEnabled] property to **true** to allow users resize the popup.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            width: 500,
            height: 500,
            resizeEnabled: true
        });
        // ...
    });
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup
        [height]="500"
        [width]="500"
        [resizeEnabled]="true">
        <!-- ... -->
    </dx-popup>
    <!-- ... -->


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                :height="500"
                :width="500"
                :resize-enabled="true">
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
    const App = () =>  {
        // ...
        return (
            <div className="App">
                <Popup
                    width={500}
                    height={500} 
                    resizeEnabled={true}/>
                // ...
            </div>
        );
    }

    export default App;


---
