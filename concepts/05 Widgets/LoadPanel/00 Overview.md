The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview/"
}

The following code adds to your page a simple **LoadPanel** and a [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') that invokes it. The [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#closeOnOutsideClick') option set to **true** instructs the **LoadPanel** to hide once a user clicks outside it.

---
##### jQuery

    <!--HTML--><div id="loadPanelContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true
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
        [(visible)]="isLoadPanelVisible">
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
#include common-link-configurewidget
- [LoadPanel - Show and Hide Using the API](/concepts/05%20Widgets/LoadPanel/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/')
- [LoadPanel - Customize the Appearance](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]dxloadpanel, loadPanel, load panel, overview, overlay