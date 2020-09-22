By default, the **Popup** allocates a part of its area to the title, regardless of whether you specified the title text or did not. To hide the title, set the [showTitle](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle') option to **false**. Besides the text, the title area also contains a button that closes the **Popup**. To hide this button alone, assign **false** to the [showCloseButton](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showCloseButton.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showCloseButton') option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            showTitle: false,
            visible: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        [showTitle]="false"
        [(visible)]="isPopupVisible">
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxPopup
            v-model:visible="isPopupVisible"
            :show-title="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup
        },
        data() {
            return {
                isPopupVisible: true
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';

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
                    showTitle={false}
                    onHiding={this.onHiding}
                />
            );
        }
    }

    export default App;

---

If you need to define the title completely, specify a template for it as shown in the following code:

---
##### jQuery

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
        <div data-options="dxTemplate: { name: 'title' }">
            <p>Title template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            titleTemplate: "title"
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        [(visible)]="isPopupVisible"
        titleTemplate="title">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
        </div>
        <div *dxTemplate="let data of 'title'">
            <p>Title template</p>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxPopup
            v-model:visible="isPopupVisible"
            titleTemplate="title">
            <template>
                <p>Popup content</p>
            </template>
            <template #title>
                <p>Title template</p>
            </template>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup
        },
        data() {
            return {
                isPopupVisible: true
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';

    const renderContent = () => {
        return (
            <p>Popup content</p>
        );
    }

    const renderTitle = () => {
        return (
            <p>Title template</p>
        );
    }

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
                    contentRender={renderContent}
                    titleRender={renderTitle}
                    onHiding={this.onHiding}
                />
            );
        }
    }

    export default App;

---

You can switch title templates on the fly just as you can do with content templates. Refer to the [Switching Templates On the Fly](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content/5%20Switching%20Templates%20On%20the%20Fly.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/#Switching_Templates_On_the_Fly') topic for more information.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [Popup - Customize the Content](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup - Specify Toolbar Items](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popup - Color the Shading of the Background](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/30%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview)
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')

[tags]popup, title, show title, title template, close button