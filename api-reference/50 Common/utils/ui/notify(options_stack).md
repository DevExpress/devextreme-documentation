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

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos//WidgetsGallery/Demo/Toast/Stack/"
}

To stack toast messages, specify the `position` field in the **stack** object.

The `position` field can be one of the following:

- String    
Available values:

    - *'top left'*

    - *'top center'*

    - *'top right'*

    - *'left center'*

    - *'center'*

    - *'right center'*

    - *'bottom left'*

    - *'bottom center'*

    - *'bottom right'*

- Object    
Avaliable values: *{left | right, top | bottom}*.

[note]

If you use an object for `position` field, you can only specify one field in that object for vertical coordinate and one field for horizontal coordinate (for example, if you specify *'top'*, you do not need to specify *'bottom'*).

[/note]

You can also specify the `direction` field in the **stack** object. It is a string that can be one of the following:

- *'up'*

- *'down'*

- *'left'*

- *'right'*

- *'up-reverse'*

- *'down-reverse'*

- *'left-reverse'*

- *'right-reverse'*

The image below shows the difference between directions with and without the 'reverse' postfix:

![Toast Messages When Direction Is 'Up'](/images/Utilities/notify-stack-up.png) ![Toast Messages When Direction Is 'Up-Reverse'](/images/Utilities/notify-stack-up-reverse.png)

When you set the `direction` to *'up'*, the second and subsequent toasts push the first toast upwards. When you set the `direction` to *'up-reverse'*, toasts stack on top of each other.

If you do not specify the `direction` field, its default value is *'down'* for `position: 'top left | top center | top right'`, and *'up'* for other `position` options.

Note that toast messages disappear with an animated effect after their display time ends. The default [hide](/Documentation/ApiReference/UI_Components/dxToast/Configuration/animation/#hide) animation duration for toast messages is 400 milliseconds. If multiple messages can stack in your application and block important visual elements, you may want to disable the animation or reduce its duration.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.ui.notify({ message: "Error message", width: 300, shading: true }, {"center", "up"});
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
            notify({ message: "Error message", width: 300, shading: true }, {"center", "up"});
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
                notify({ message: "Error message", width: 300, shading: true }, {"center", "up"});
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
            notify({ message: "Error message", width: 300, shading: true }, {"center", "up"});
        }
    }
    export default App;

---