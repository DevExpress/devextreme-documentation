The **Popup** widget is a pop-up window overlaying the current view. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/"
}

The following code adds a simple **Popup** to your page, along with a [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') that invokes it. The simplest configuration of the **Popup** requires the content and [title](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title') to be specified. 

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title"
        });
                
        $("#buttonContainer").dxButton({
            text: "Show the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
        </div>
    </dx-popup>
    <dx-button
        text="Show the Popup"
        (onClick)="isPopupVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxPopup
                title="Popup Title"
                v-model:visible="isPopupVisible">
                <template>
                    <p>Popup content</p>
                </template>
            </DxPopup>
            <DxButton
                text="Show the Popup"
                @click="onClick"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxPopup,
            DxButton
        },
        data() {
            return {
                isPopupVisible: false
            };
        },
        methods: {
            onClick() {
                this.isPopupVisible = true;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';
    import { Button } from 'devextreme-react/button';

    const renderContent = () => {
        return (
            <p>Popup content</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isPopupVisible: false
            };

            this.onClick = this.onClick.bind(this);
            this.onHiding = this.onHiding.bind(this);
        }

        onClick() {
            this.setState({
                isPopupVisible: true
            });
        }

        onHiding() {
            this.setState({
                isPopupVisible: false
            });
        }

        render() {
            return (
                <div>
                    <Popup
                        title="Popup Title"
                        visible={this.state.isPopupVisible}
                        contentRender={renderContent}
                        onHiding={this.onHiding}
                    />
                    <Button
                        text="Show the Popup"
                        onClick={this.onClick}
                    />
                </div>
            );
        }
    }

    export default App;

---

There are several ways to specify the content of the **Popup**. Learn more in the [Customize the Content](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/') article. The **Popup** can also be displayed with a toolbar. For detailed information, see the [Specify Toolbar Items](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/') topic. 

#####See Also#####
#include common-link-configurewidget
- [Popup - Customize the Appearance](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup - Show and Hide the Popup](/concepts/05%20Widgets/Popup/10%20Show%20and%20Hide%20the%20Popup '/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/')
- [Popup - Resize and Relocate](/concepts/05%20Widgets/Popup/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/Popup/Resize_and_Relocate/')
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')

[tags]dxpopup, popup, overview, overlay
