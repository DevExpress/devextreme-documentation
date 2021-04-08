Set the [showTitle](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle) property to **true** to display popup's title bar and use the [title](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#title) property to define its text: 

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            // ...
            showTitle: true,
            title: "Information",
        });
        // ...
    });
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup
        [showTitle]="true"
        title="Information">
        <!-- ... -->
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                :show-title="true"
                title="Information">
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
                    showTitle={true}
                    title="Information"              
                />
            </div>
        );
    }

    export default App;


---
