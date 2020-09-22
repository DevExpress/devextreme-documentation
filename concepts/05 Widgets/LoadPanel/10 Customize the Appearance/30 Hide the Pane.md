The pane is the element that lies under the loading indicator and text.

![DevExtreme HTML5 JavaScript LoadPanel](/images/UiWidgets/LoadPanel/LoadPanel_Pane.png)

The pane is shown by default. To hide it, assign **false** to the [showPane](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/showPane.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showPane') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            showPane: false
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
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible"
        [showPane]="false">
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
                :close-on-outside-click="true"
                v-model:visible="isLoadPanelVisible"
                :show-pane="false"
            />
            <DxButton
                text="Show the Load Panel"
                @click="handleClick"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
                        closeOnOutsideClick={true}
                        showPane={false}
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
- [LoadPanel - Customize the Loading Indicator](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/10%20Customize%20the%20Loading%20Indicator.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Customize_the_Loading_Indicator/')
- [LoadPanel - Change the Text](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/20%20Change%20the%20Text.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Change_the_Text/')
- [LoadPanel - Color the Shading of the Background](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/40%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, load panel pane, hide pane