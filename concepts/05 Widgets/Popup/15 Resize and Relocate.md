To change the size of the **Popup**, specify the [height](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#width') options.

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
            height: 300,
            width: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [height]="300"
        [width]="500">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
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
            :height="300"
            :width="500"
            title="Popup Title">
            <template>
                <p>Popup content</p>
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
                    height={300}
                    width={500}
                    title="Popup Title"
                    contentRender={renderContent}
                    onHiding={this.onHiding}
                />
            );
        }
    }

    export default App;

---

To allow an end user to resize the **Popup**, assign **true** to the [resizeEnabled](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/resizeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#resizeEnabled') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            resizeEnabled: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [resizeEnabled]="true">
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
            :resize-enabled="true"
            title="Popup Title"
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
                    resizeEnabled={true}
                    title="Popup Title"
                />
            );
        }
    }

    export default App;

---

If you need to position the **Popup** against a specific element on your page, set the [position](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#position') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
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
            title="Popup Title">
            <DxPosition
                my="left"
                at="left"
                of="#targetElement">
            />
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup, DxPosition } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition
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

    import { Popup, Position } from 'devextreme-react/popup';

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
                    <Position
                        my="left"
                        at="left"
                        of="#targetElement"
                    />
                </Popup>
            );
        }
    }

    export default App;

---

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

By default, an end user is allowed to change the **Popup** position only on desktops. To enable this feature on other devices too, set the [dragEnabled](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/dragEnabled.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#dragEnabled') option to **true**. Note that the user drags the **Popup** by its title, so the title should _not_ be hidden.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            dragEnabled: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [dragEnabled]="true">
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
            :drag-enabled="true"
            title="Popup Title"
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
                    dragEnabled={true}
                    title="Popup Title"
                />
            );
        }
    }

    export default App;

---

[note]Dragging is possible only if the *"height: 100%"* style is applied to the `<html>` element and *"min-height: 100%"* - to the `<body>` element.

#####See Also#####
- [Popup - Show and Hide the Popup](/concepts/05%20Widgets/Popup/10%20Show%20and%20Hide%20the%20Popup '/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/')
- [Popup - Customize the Appearance](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/')
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview)
- [Popup API Reference](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')

[tags]popup, overlay, size, height, width, resize, position, drag