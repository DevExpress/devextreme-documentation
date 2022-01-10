Use the [height](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width') properties to set the Popup's size. Set the [resizeEnabled](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#resizeEnabled') property to **true** to allow users to resize the Popup.

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
                    resizeEnabled={true}
                />
                {/* ... */}
            </div>
        );
    }

    export default App;


---
