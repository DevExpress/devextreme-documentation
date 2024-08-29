The Popup component always displays a native scrollbar when the height of the Popup's content is greater than that of the Popup.

You can also implement a scrollbar that belongs to the [ScrollView](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/') component. This implementation is more flexible. For example, you can enable [right-to-left representation](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#rtlEnabled') or scroll the content to a [specific position](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollTo(targetLocation).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollTotargetLocation'). For more information about the available options, refer to the [ScrollView API section](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/').

To implement this solution, follow the steps below:

1. Wrap the content in the ScrollView component and place it in the Popup container.

2. Set the [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#height') and [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#width') of the ScrollView to `100%` of the popup content area.

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