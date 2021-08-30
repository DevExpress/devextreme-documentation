Set the [showTitle](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle') property to **true** to display the Popup's title bar and use the [title](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#title') property to define its text: 

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
    <!-- ... -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup
                :show-title="true"
                title="Information">
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
                    showTitle={true}
                    title="Information"
                />
                {/* ... */}
            </div>
        );
    }

    export default App;


---
