The Popup component always displays a native scrollbar when the height of the Popup's content is greater than that of the Popup.

You can also implement a scrollbar that belongs to the [ScrollView](/Documentation/ApiReference/UI_Components/dxScrollView/) component. This implementation is more flexible. For example, you can enable [right-to-left representation](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#rtlEnabled) or scroll the content to a [specific position](/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollTotargetLocation). For more information about the available options, refer to the [ScrollView API section](/Documentation/ApiReference/UI_Components/dxScrollView/).

To implement this solution, follow the steps below:

1. Wrap the content in the ScrollView component and place it in the Popup container.

2. Set the [height](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#height) and [width](/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#width) of the ScrollView to `100%` of the popup content area. To enable this functionality, wrap content into the [ScrollView](/concepts/05%20UI%20Components/ScrollView/00%20Overview.md '/Documentation/Guide/UI_Components/ScrollView/Overview/') component and set its **height** and **width** to 100% of the Popup content area:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#popup").dxPopup({
            contentTemplate: () => {
                const content = $("<div />");
                content.dxScrollView({
                    height: "100%",
                    width: "100%"
                });
                return content;
            },
            // ...
        });
    });
 
##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <div *dxTemplate="let data of 'content'">
            <dx-scroll-view 
                width="100%"
                height="100%">
                <!-- ... -->
            </dx-scroll-view>
        </div>
    </dx-popup>
    <!-- ... -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxPopup ... >
                <template #content>
                    <DxScrollView
                        height="100%"
                        width="100%">
                        <!-- ... -->
                    </DxScrollView>
                </template>            
            </DxPopup>
            <!-- ... -->
        </div>
    </template>

    <script>
    // ...
    import { DxScrollView } from "devextreme-vue/scroll-view";

    export default {
        // ...
        components: {
            // ...
            DxScrollView
        }
    }
    </script>


##### React

    <!-- tab: App.js -->
    // ...
    import ScrollView from 'devextreme-react/scroll-view';

        const renderContent = () => {
            return (
                <>
                    <ScrollView height="100%" width="100%">
                        {/* ... */}
                    </ScrollView>
                </>
            )
        };

    const App = () => {
        // ...
        return (
            <div className="App">
                <Popup
                    contentRender={renderContent}
                />
            </div>
        );
    }

    export default App;


---
