Specify the **height** and **width** properties to change the LoadPanel's size:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#loadPanelContainer").dxLoadPanel({
            hideOnOutsideClick: true,
            height: 300,
            width: 500
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
        [height]="300"
        [width]="500">
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
                :height="300"
                :width="500"
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
                        visible={this.state.isLoadPanelVisible}
                        onHidden={this.handleHide}
                        height={300}
                        width={500}
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

The [container](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/container.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#container') property specifies the LoadPanel's container. The container is shaded when the LoadPanel is visible; the LoadPanel inherits styles from the container and is scrolled with. To position the UI component relative to a specific element, use the [position](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/position.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#position') property:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#loadPanelContainer").dxLoadPanel({
            hideOnOutsideClick: true,
            container: "#container",
            position: { my: "left", at: "left", of: "#targetElement" }
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
        container="#container"
        [(visible)]="isLoadPanelVisible">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
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
                container="#container">
                <DxPosition
                    my="left"
                    at="left"
                    of="#targetElement"/>
            </DxLoadPanel>
            <DxButton
                text="Show the Load Panel"
                @click="handleClick"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxLoadPanel, DxPosition } from 'devextreme-vue/load-panel';
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

    import { LoadPanel, Position } from 'devextreme-react/load-panel';
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
                        visible={this.state.isLoadPanelVisible}
                        inHidden={this.handleHide}
                        container="#container">
                        <Position
                            my="left"
                            at="left"
                            of="#targetElement"/>
                    </LoadPanel>
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

This configuration of the **position** property reads as follows: "place **my** _left_ side **at** the _left_ **of** the *"#targetElement"*.

#####See Also#####
- [Customize the Appearance](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/10%20Customize%20the%20Loading%20Indicator.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)

[tags]loadPanel, load panel, overlay, size, height, width, position
