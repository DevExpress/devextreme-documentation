The Popup has two toolbars: top and bottom. Items on these toolbars can be plain text or UI components. To configure the items, populate the [toolbarItems](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/') array with objects. Each object configures an individual toolbar item. For example, the following code adds two toolbar items to the Popup: one is plain text, another is the [Button](/concepts/05%20UI%20Components/Button/00%20Getting%20Started%20with%20Button/02%20Create%20a%20Button.md '/Documentation/Guide/UI_Components/Button/') UI component. They both occupy the top toolbar, because their [toolbar](/api-reference/_hidden/dxPopupToolbarItem/toolbar.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/#toolbar') property assumes its default value.

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            toolbarItems: [{
                text: "Title",
                location: "before"
            }, {
                widget: "dxButton",
                location: "after",
                options: { 
                    text: "Refresh", 
                    onClick: function() {
                        // ...
                    }
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <dxi-popup-toolbar-item
            text="Title"
            location="before">
        </dxi-popup-toolbar-item>
        <dxi-popup-toolbar-item
            widget="dxButton"
            location="after"
            [options]="{
                text: 'Refresh',
                onClick: refresh
            }">
        </dxi-popup-toolbar-item>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
        refresh () {
            // ...
        }
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
        <DxPopup
            :visible="isPopupVisible"
            title="Popup Title">
            <template>
                <p>Popup content</p>
            </template>
            <DxToolbarItem
                text="Title"
                location="before"
            />
            <DxToolbarItem
                :options="buttonOptions"
                widget="dxButton"
                location="after"
            />
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxPopup,
        DxToolbarItem
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxToolbarItem
        },
        data() {
            return {
                isPopupVisible: true,
                buttonOptions: {
                    text: 'Refresh',
                    onClick: function() {
                        // ...
                    }
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup, ToolbarItem } from 'devextreme-react/popup';

    const buttonOptions = {
        text: 'Refresh',
        onClick: function() {
            // ...
        }
    };

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isPopupVisible: true
            };

            this.onHiding = this.onHiding.bind(this);
        }

        onHiding() {
            this.setState({
                isPopupVisible: false
            });
        }

        render() {
            return (
                <Popup
                    visible={this.state.isPopupVisible}
                    title="Popup Title"
                    onHiding={this.onHiding}>
                    <ToolbarItem
                        text="Title"
                        location="before"
                    />
                    <ToolbarItem
                        options={buttonOptions}
                        widget="dxButton"
                        location="after"
                    />
                </Popup>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Popup - Customize the Content](/concepts/05%20UI%20Components/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/UI_Components/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup - Customize the Title](/concepts/05%20UI%20Components/Popup/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/UI_Components/Popup/Customize_the_Appearance/Customize_the_Title/')
- [Popup - Color the Shading of the Background](/concepts/05%20UI%20Components/Popup/05%20Customize%20the%20Appearance/30%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/UI_Components/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview)
- [Popup API Reference](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')

[tags]popup, overlay, customize, toolbar items, top toolbar, bottom toolbar