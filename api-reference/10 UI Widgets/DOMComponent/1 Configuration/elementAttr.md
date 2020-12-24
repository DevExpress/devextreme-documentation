---
id: DOMComponent.Options.elementAttr
type: any
default: {}
---
---
##### shortDescription
<<<<<<< HEAD
Specifies the <a href="http://www.w3schools.com/tags/ref_attributes.asp" target="_blank">attributes</a> to be attached to the widget's root element.
=======
Specifies the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank">global attributes</a> to be attached to the UI component's container element.
>>>>>>> e1a10d490... Update short description in elementAttr article (#1622)

---
---
##### jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            elementAttr: {
                id: "elementId",
                class: "class-name"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [elementAttr]="{ id: 'elementId', class: 'class-name' }">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :element-attr="{widgetName}Attributes">
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}Attributes: {
                    id: 'elementId',
                    class: 'class-name'
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        {widgetName}Attributes = {
            id: 'elementId',
            class: 'class-name'
        }

        render() {
            return (
                <{WidgetName} ...
                    elementAttr={this.{widgetName}Attributes}>
                </{WidgetName}>
            );
        }
    }
    export default App;


---
