To change the text displayed by the LoadPanel, use the [message](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/message.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#message') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            hideOnOutsideClick: true,
            message: "Please, wait..."
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [hideOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible"
        message="Please, wait...">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxLoadPanel
                :hide-on-outside-click="true"
                v-model:visible="isLoadPanelVisible"
                message="Please, wait..."
            />
            <DxButton
                text="Show the Load Panel"
                @click="handleClick"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxLoadPanel } from 'devextreme-vue/load-panel';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxLoadPanel,
            DxButton
        },
        data() {
            return {
                isLoadPanelVisible: false
            }
        },
        methods: {
            handleClick() {
                this.isLoadPanelVisible = true;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { LoadPanel } from 'devextreme-react/load-panel';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isLoadPanelVisible: false
            };

            this.handleClick = this.handleClick.bind(this);
            this.handleHide = this.handleHide.bind(this);
        }

        handleClick() {
            this.setState({
                isLoadPanelVisible: true
            });
        }

        handleHide() {
            this.setState({
                isLoadPanelVisible: false
            });
        }

        render() {
            return (
                <div>
                    <LoadPanel
                        hideOnOutsideClick={true}
                        message="Please, wait..."
                        visible={this.state.isLoadPanelVisible}
                        onHidden={this.handleHide}
                    />
                    <Button
                        text="Show the Load Panel"
                        onClick={this.handleClick}
                    />
                </div>
            );
        }
    }

    export default App;

---

#####See Also#####
- [LoadPanel - Customize the Loading Indicator](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/10%20Customize%20the%20Loading%20Indicator.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Customize_the_Loading_Indicator/')
- [LoadPanel - Hide the Pane](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/30%20Hide%20the%20Pane.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Hide_the_Pane/')
- [LoadPanel - Color the Shading of the Background](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/40%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [LoadPanel - Resize and Relocate](/concepts/05%20UI%20Components/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/UI_Components/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Components/dxLoadPanel '/Documentation/ApiReference/UI_Components/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, load panel text