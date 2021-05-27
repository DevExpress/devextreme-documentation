Specify the following properties to configure navigation between tabs:

- [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)      
Specifies whether users can switch between views with the swipe gesture.

- [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop)      
Specifies whether to loop views.

- [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled)      
Specifies whether to animate the change of the current view.

- [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#selectedIndex)     
Specifies the index of the currently selected tab. Use this property to switch between tabs programmatically. In this tutorial, this property initially selects the first tab.

---
##### jQuery  

    <!-- tab: index.js -->
    $(function(){   
        $("#tabPanel").dxTabPanel({
            loop: true,
            animationEnabled: true,
            swipeEnabled: true,
            selectedIndex: 0
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel
        [loop]="true"
        [animationEnabled]="true"
        [swipeEnabled]="true"
        [selectedIndex]="0">   
        <!-- ... -->
    </dx-tab-panel>


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabPanel
            :loop="true"
            :animation-enabled="true" 
            :swipe-enabled="true"
            :selected-index="0">
            <!-- ... -->
        </DxTabPanel>
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    const App = () => {
        return (
            <TabPanel
                loop={true}
                animationEnabled={true} 
                swipeEnabled={true}
                selectedIndex={0}>
                {/* ... */}
            </TabPanel>
        );
    }

    export default App;

---

For further information on the TabPanel UI component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxTabPanel/)
