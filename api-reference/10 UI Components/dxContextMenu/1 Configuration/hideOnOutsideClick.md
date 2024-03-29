---
id: dxContextMenu.Options.hideOnOutsideClick
type: Boolean | function(event)
default: true
---
---
##### shortDescription
Specifies whether to hide the UI component if a user clicks outside it.

##### param(event): event
The event that caused UI component hiding. It is a [EventObject](/api-reference/50%20Common/Object%20Structures/EventObject '/Documentation/ApiReference/Common/Object_Structures/EventObject/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the UI component should be hidden; otherwise **false**.

---
The function passed to this property enables you to specify a custom condition for UI component hiding. For instance, you can prevent hiding until a user clicks a certain element.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            hideOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        hideOnOutsideClick(e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             Dx{WidgetName}Module
         ],
         // ...
     })

    <!--HTML-->
    <dx-{widget-name} ...
        [hideOnOutsideClick]="hideOnOutsideClick">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ....
            :hide-on-outside-click="hideOnOutsideClick">
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            hideOnOutsideClick (e) {
                return e.target === document.getElementById("someElement");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    const hideOnOutsideClick = (e) => {
        return e.target === document.getElementById("someElement");
    };

    export default function App() {
        return (
            <{WidgetName} ...
                hideOnOutsideClick={hideOnOutsideClick}>
            </{WidgetName}>
        );
    }

---