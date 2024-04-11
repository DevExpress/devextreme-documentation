---
##### jQuery
Use the [height](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width') properties to set the Popup's size. Set the [resizeEnabled](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#resizeEnabled') property to `true` to allow users to resize the Popup.

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
Use the [height](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width') properties to set the Popup's size. Set the [resizeEnabled](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#resizeEnabled') property to `true` to allow users to resize the Popup.

    <!-- tab: app.component.html -->
    <dx-popup
        [height]="500"
        [width]="500"
        [resizeEnabled]="true">
        <!-- ... -->
    </dx-popup>
    <!-- ... -->


##### Vue
Use the [height](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width') properties to set the Popup's size. Set the [resizeEnabled](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#resizeEnabled') property to `true` to allow users to resize the Popup.

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
Set the [resizeEnabled](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#resizeEnabled') property to `true` to allow users to resize the Popup. If you want to specify the initial Popup size, use the [height](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#width') properties in [uncontrolled mode](/concepts/50%20React%20Components/20%20State%20Management/7%20Uncontrolled%20Mode.md '/Documentation/Guide/React_Components/State_Management/#Uncontrolled_Mode'):

    <!-- tab: App.js -->
    // ...
    const App = () =>  {
        // ...
        return (
            <div className="App">
                <Popup
                    defaultWidth={500}
                    defaultHeight={500} 
                    resizeEnabled={true}
                />
                {/* ... */}
            </div>
        );
    }

    export default App;

---
