The **TextArea** raises four keyboard events: [keyDown](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyDown.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyDown'), [keyPress](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyPress.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyPress'), [keyUp](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyUp.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#keyUp') and [enterKey](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/enterKey.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Events/#enterKey'). Within the functions that handle them, you can access the original keyboard events. If you are _not_ going to change the functions during the lifetime of the widget, assign them to the respective widget options.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            onKeyDown: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyPress: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyUp: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onEnterKey: function (e) {
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-area
        (onKeyDown)="onKeyDown($event)"
        (onKeyPress)="onKeyPress($event)"
        (onKeyUp)="onKeyUp($event)"
        (onEnterKey)="onEnterKey($event)">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onKeyDown (e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyPress (e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp (e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey (e) {
            // Event handling commands go here
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTextArea
            @key-down="onKeyDown"
            @key-press="onKeyPress"
            @key-up="onKeyUp"
            @enter-key="onEnterKey"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DxTextArea } from 'devextreme-vue/text-area';

    export default {
        components: {
            DxTextArea
        },
        methods: {
            onKeyDown(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyPress(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyUp(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onEnterKey(e) {
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextArea } from 'devextreme-react/text-area';

    class App extends React.Component {
        render() {
            return (
                <TextArea
                    onKeyDown={this.onKeyDown}
                    onKeyPress={this.onKeyPress}
                    onKeyUp={this.onKeyUp}
                    onEnterKey={this.onEnterKey}
                />
            );
        }

        onKeyDown(e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyPress(e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp(e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey(e) {
            // Event handling commands go here
        }
    }

    export default App;

---

If you are going to change the handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const keyDownHandler1 = function (e) {
        const keyCode = e.event.key;
        // First handler of the "keyDown" event
    };

    const keyDownHandler2 = function (e) {
        const keyCode = e.event.key;
        // Second handler of the "keyDown" event
    };

    $("#textAreaContainer").dxTextArea("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

You can also implement handlers for other keys using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let textArea =  $("#textAreaContainer").dxTextArea("instance");
        textArea.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        textArea.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTextAreaModule, DxTextAreaComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTextAreaComponent, { static: false }) textArea: DxTextAreaComponent
        // Prior to Angular 8
        // @ViewChild(DxTextAreaComponent) textArea: DxTextAreaComponent
        ngAfterViewInit () {
            this.textArea.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.textArea.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextAreaModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextArea :ref="myTextAreaRef" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTextArea from 'devextreme-vue/text-area';

    const myTextAreaRef = 'my-text-area';

    export default {
        components: {
            DxTextArea
        },
        data() {
            return {
                myTextAreaRef
            };
        },
        computed: {
            textArea: function() {
                return this.$refs[myTextAreaRef].instance;
            }
        },
        mounted: function() {
            this.textArea.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.textArea.registerKeyHandler("space", function(e) {
                // ...
            });
        }
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TextArea from 'devextreme-react/text-area';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.textAreaRef = React.createRef();
        }

        render() {
            return (
                <TextArea ref={this.textAreaRef} />
            );
        }

        get textArea() {
            return this.textAreaRef.current.instance;
        }

        componentDidMount() {
            this.textArea.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.textArea.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [TextArea - Handle the Value Change Event](/concepts/05%20Widgets/TextArea/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/')
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview)

[tags]textArea, text area, editor, keyboard events, keyup, keydown, keypress, enterkey
