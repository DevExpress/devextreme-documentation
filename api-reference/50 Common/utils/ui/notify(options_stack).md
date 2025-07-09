---
id: ui.notify(options,stack)
module: ui/notify
export: default
---
---
##### shortDescription
Creates a stackable toast message.

##### param(options): Object
The Toast [configuration](/api-reference/10%20UI%20Components/dxToast/1%20Configuration '/Documentation/ApiReference/UI_Components/dxToast/Configuration/').

##### param(stack): Object
An object with the following structure: *{position, direction}*.

##### field(stack.direction): String
The toast stacking direction.

##### field(stack.position): String
The initial toast position.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos//WidgetsGallery/Demo/Toast/Stack/"
}

To stack toast messages, specify the `position` field in the **stack** object. You can set the position field to a predefined string or object with coordinates. Note that if you use coordinates for the position field, you need to specify one horizontal and one vertical coordinate only.

The following table lists all predefined strings and their values:

<table class="dx-table">
    <tr>
        <th>String</th>
        <th>Coordinate Representation</th>
    </tr>        
    <tr>
        <td><code>'top left'</code></td>
        <td><code>{left, top}</code></td>
    </tr>
    <tr>
        <td><code>'top center'</code></td>
        <td>Use window's and toast's width to calculate the center of the window, then use the <i>'top'</i> field.</td>
    </tr>
    <tr>
        <td><code>'top right'</code></td>
        <td><code>{right, top}</code></td>
    </tr>
    <tr>
        <td><code>'left center'</code></td>
        <td>Use the <i>'left'</i> field, then use window's and toast's height to calculate the center of the window.</td>
    </tr>
    <tr>
        <td><code>'center'</code></td>
        <td>Use window's and toast's height and width to calculate the center of the window.</td>
    </tr>
    <tr>
        <td><code>'right center'</code></td>
        <td>Use the <i>'right'</i> field, then use window's and toast's height to calculate the center of the window.</td>
    </tr>
    <tr>
        <td><code>'bottom left'</code></td>
        <td><code>{left, bottom}</code></td>
    </tr>
    <tr>
        <td><code>'bottom center'</code></td>
        <td>Use window's and toast's width to calculate the center of the window, then use the <i>'bottom'</i> field.</td>
    </tr>
    <tr>
        <td><code>'bottom right'</code></td>
        <td><code>{right, bottom}</code></td>
    </tr>
    <tr>
        <td>A custom value</td>
        <td>Use <code>{x, y}</code> coordinate object, e.g. <code>{100, 50}</code>. The start of coordinates is the left bottom corner of the window.</td>
    </tr>
</table>

[note] You can specify the starting [position](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/position.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/#position') for a non-stackable [notify message](/api-reference/50%20Common/utils/ui/notify(options_type_displayTime).md '/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_type_displayTime') in the `options` configuration object.

You can also specify the `direction` field in the **stack** object. It is a string that can be one of the following:

- *'up-push'*

- *'down-push'*

- *'left-push'*

- *'right-push'*

- *'up-stack'*

- *'down-stack'*

- *'left-stack'*

- *'right-stack'*

The image below shows the difference between directions with 'push' and 'stack' postfixes:

![Toast Messages When Direction Is 'up-push'](/images/Utilities/notify-stack-up-push.png) ![Toast Messages When Direction Is 'up-stack'](/images/Utilities/notify-stack-up-stack.png)

When you set the `direction` to *'up-push'*, the second and subsequent toasts push the first toast upwards. When you set the `direction` to *'up-stack'*, toasts stack on top of each other.

If you do not specify the `direction` field, its default value is *'down-push'* for `position: 'top left | top center | top right'`, and *'up-push'* for other `position` options.

Note that toast messages disappear with an animated effect after their display time ends. The default [hide](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/animation/hide.md '/Documentation/ApiReference/UI_Components/dxToast/Configuration/animation/#hide') animation duration for toast messages is 400 milliseconds. If multiple messages can stack in your application and block important visual elements, you may want to disable the animation or reduce its duration.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.notify({ message: "Error message", width: 300, shading: true }, { position: "center", direction: "up-push" });
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() { 
            notify({ message: "Error message", width: 300, shading: true }, { position: "center", direction: "up-push" });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import notify from 'devextreme/ui/notify';

    export default {
        mounted: function() {
            this.$nextTick(() => {
                notify({ message: "Error message", width: 300, shading: true }, { position: "center", direction: "up-push" });
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        componentDidMount() { 
            notify({ message: "Error message", width: 300, shading: true }, { position: "center", direction: "up-push" });
        }
    }
    export default App;

---