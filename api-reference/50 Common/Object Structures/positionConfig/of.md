---
id: positionConfig.of
type: String | Element | jQuery | Window
---
---
##### shortDescription
The target element relative to which the overlay element should be positioned.

---
This option accepts the following value types:

- <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors" target="_blank">CSS selector</a> (or <a href="https://api.jquery.com/category/selectors/" target="_blank">jQuery selector</a> if jQuery is used)

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#popupContainer").dxPopup({
                // ...
                position: {
                    of: "#target"
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-popup ... >
            <dxo-position
                of="#target">
            </dxo-position>
        </dx-popup>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxPopup ... >
                <DxPosition
                    of="#target"
                />
            </DxPopup>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxPopup, {
            DxPosition
        } from 'devextreme-vue/popup';

        export default {
            components: {
                DxPopup,
                DxPosition
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';

        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import Popup, {
            Position
        } from 'devextreme-react/popup';

        class App extends React.Component {
            render() {
                return (
                    <Popup ... >
                        <Position
                            of="#target"
                        />
                    </Popup>
                );
            }
        }
        export default App;

    ---

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window" target="_blank">Window</a>

    ---
    ##### jQuery
    
        <!-- tab: index.js -->
        $(function() {
            $("#popupContainer").dxPopup({
                // ...
                position: {
                    of: window
                }
            });
        });
    
    ##### Angular

        <!-- tab: app.component.html -->
        <dx-popup>
            <dxo-position
                [of]="getWindow()">
            </dxo-position>
        </dx-popup>
    
        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
    
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            getWindow() {
                return window;
            }
        }
    
    ##### Vue
    
        <!-- tab: App.vue -->
        <template>
            <DxPopup>
                <DxPosition :of="target" />
            </DxPopup>
        </template>
    
        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
    
        import DxPopup, {
            DxPosition
        } from 'devextreme-vue/popup';
    
        export default {
            components: {
                DxPopup,
                DxPosition
            },
            data() {
                return {
                    target: window
                }
            }
        }
        </script>
    
    ##### React
    
        <!-- tab: App.js -->
        import React from 'react';
    
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
    
        import Popup, {
            Position
        } from 'devextreme-react/popup';
    
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.target = window;
            }
            render() {
                return (
                    <Popup>
                        <Position
                            of={this.target}
                        />
                    </Popup>
                );
            }
        }
        export default App;
    
    ---

- [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') (or <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> if jQuery is used)

 The overlay element is positioned at the **event.pageX** and **event.pageY** coordinates. In the following example, the [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/') widget is positioned at the point where the user has clicked.

    ---
    ##### jQuery
    
        <!-- tab: index.js -->
        $("#target").click(function (event) {
            $("#popover").dxPopover("option", "position.of", event);
        }
    
    ##### Angular
    
        <!-- tab: app.component.html -->
        <a id="target" (click)="eventHandler($event, item)">Details</a>
        <dx-popover>
            <dxo-position
                [of]="target">
            </dxo-position>
        </dx-popover>
    
        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
    
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            eventHandler($event, item) {
                this.target = $event;
            }
        }
    
    ##### Vue
    
        <!-- tab: App.vue -->
        <template>
            <div>
                <a id="target" @click="setPosition">Details</a>
                <DxPopover>
                    <DxPosition
                        :of="target"
                    />
                </DxPopover>
            </div>
        </template>
    
        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
    
        import DxPopover, {
            DxPosition
        } from 'devextreme-vue/popover';
    
        export default {
            components: {
                DxPopover,
                DxPosition
            },
            methods: {
                setPosition: function(event) {
                    this.target = event;
                }
            }
        }
        </script>
    
    ##### React
    
        <!-- tab: App.js -->
        import React from 'react';
    
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';
    
        import Popover, {
            Position
        } from 'devextreme-react/popover';
    
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    target: undefined
                }
                this.setPosition = this.setPosition.bind(this);
            }
            setPosition(e) {
                e.persist();
                this.setState({
                    target: e
                });
            }
            render() {
                return (
                    <React.Fragment>
                        <a id="target" onClick={this.setPosition}>Details</a>
                        <Popover>
                             <Position
                                of={this.state.target}
                            />
                        </Popover>
                    </React.Fragment>
                );
            }
        }
        export default App;
    
    ---

The following value types are more suitable for jQuery:

- <a href="https://api.jquery.com/Types/#jQuery" target="_blank">jQuery element</a>

        <!-- tab: index.js -->
        $(function() {
            $("#popupContainer").dxPopup({
                // ...
                position: {
                    of: $("#target")
                }
            });
        });

- <a href="https://www.w3schools.com/js/js_htmldom_nodes.asp" target="_blank">DOM node</a>

        <!-- tab: index.js -->
        $(function() {
            $("#popupContainer").dxPopup({
                // ...
                position: {
                    of: document.getElementById("#target")
                }
            });
        });
