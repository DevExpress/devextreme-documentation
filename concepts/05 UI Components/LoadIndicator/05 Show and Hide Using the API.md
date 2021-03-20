[note] In this article, the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component is used to demonstrate how to show and hide the LoadIndicator. This choice is made for purely demonstrational purposes, and you can do the same operations using another UI component following the same guidelines.

To specify whether the LoadIndicator is shown, change the [visible](/api-reference/10%20UI%20Components/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxLoadIndicator/Configuration/#visible') property.

---

##### jQuery

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->
    $(function() {
        const loadIndicator =  $("#loadIndicatorContainer").dxLoadIndicator({
            visible: false      
        }).dxLoadIndicator("instance");
        
        $("#buttonContainer").dxButton({
            text: "Toggle the LoadIndicator", 
            onClick: function () {
                const isLoadIndicatorVisible = loadIndicator.option("visible");
                loadIndicator.option("visible", !isLoadIndicatorVisible);
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible">
    </dx-load-indicator>
    <dx-button
        text="Toggle the LoadIndicator"
        (onClick)="isLoadIndicatorVisible = !isLoadIndicatorVisible">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadIndicatorModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxLoadIndicator
                v-model:visible="isLoadIndicatorVisible"
            />
            <DxButton
                text="Toggle the LoadIndicator"
                @click="toggleLoadIndicator"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLoadIndicator } from 'devextreme-vue/load-indicator';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxLoadIndicator,
            DxButton
        },
        data() {
            return {
                isLoadIndicatorVisible: false
            };
        },
        methods: {
            toggleLoadIndicator(e) {
                this.isLoadIndicatorVisible = !this.isLoadIndicatorVisible;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { LoadIndicator } from 'devextreme-react/load-indicator';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoadIndicatorVisible: false
            };
            this.handleButtonClick = this.handleButtonClick.bind(this);
        }

        handleButtonClick() {
            const value = this.state.isLoadIndicatorVisible;

            this.setState({
                isLoadIndicatorVisible: !value
            });
        }

        render() {
            return (
                <div>
                    <LoadIndicator
                        visible={this.state.isLoadIndicatorVisible}
                    />
                    <Button
                        text="Toggle the LoadIndicator"
                        onClick={this.handleButtonClick}
                    />
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().LoadIndicator()
        .ID("loadIndicator")
        .Visible(false)
    )

    @(Html.DevExtreme().Button()
        .ID("button")
        .Text("Toggle the LoadIndicator")
        .OnClick(@<text>
            function () {
                const loadIndicator = $("#loadIndicator").dxLoadIndicator("instance");
                const isLoadIndicatorVisible = loadIndicator.option("visible");
                loadIndicator.option("visible", !isLoadIndicatorVisible);
            } 
        </text>)
    )

    <!--Razor VB-->
    @(Html.DevExtreme().LoadIndicator() _
        .ID("loadIndicator") _
        .Visible(False)
    )

    @(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Toggle the LoadIndicator") _
        .OnClick("button_click")
    )

    <script>
        function button_click() {
            const loadIndicator = $("#loadIndicator").dxLoadIndicator("instance");
            const isLoadIndicatorVisible = loadIndicator.option("visible");
            loadIndicator.option("visible", !isLoadIndicatorVisible);
        }
    </script>

---

#####See Also#####
#include common-link-handleevents
- [LoadIndicator Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadIndicator/Overview)
- [LoadIndicator API Reference](/api-reference/10%20UI%20Components/dxLoadIndicator '/Documentation/ApiReference/UI_Components/dxLoadIndicator/')

[tags]loadIndicator, load indicator, loading indicator, overlay, show, hide, open, close, showing, shown, hiding, hidden