Users can scroll popup's content. To enable this functionality, configure the [scrollView](/Documentation/Guide/UI_Components/ScrollView/Overview/) and set its **height** and **width**. 

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
        // ...
    });

    // ...
 
##### Angular

    <!-- tab: app.component.html -->
    // ...
    <dx-popup...>
        <div *dxTemplate="let data of 'content'">
            <dx-scroll-view 
                width="100%"
                height="100%"
            >
                // ...
            </dx-scroll-view>
        </div>
    </dx-popup>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            // ...
            <DxPopup...>
                <template #content>
                <DxScrollView
                    height="100%"
                    width="100%"
                >
                    // ...
                </DxScrollView>
                </template>            
            </DxPopup>
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    // ...
    import ScrollView from 'devextreme-react/scroll-view';

    function App() {
        // ...
        return (
            <div className="App">
                // ...
                <Popup
                    width={500}
                    height={500}            
                >
                    <ScrollView 
                        height="100%"
                        width="100%"
                    >
                        // ...
                    <ScrollView />
                </Popup>
            </div>
        );
    }

    export default App;


---