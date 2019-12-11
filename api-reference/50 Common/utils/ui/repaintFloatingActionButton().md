---
id: ui.repaintFloatingActionButton()
module: ui/speed_dial_action/repaint_floating_action_button
export: default
---
---
##### shortDescription
Repaints the [Floating Action Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview).

---
Call this method to repaint the Floating Action Button after you change the **globalConfig**.[floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/') at runtime:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        DevExpress.config({
            floatingActionButtonConfig: {
                // ...
            }
        });
        DevExpress.ui.repaintFloatingActionButton();
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import config from 'devextreme/core/config';
    import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        changeFabConfig() {
            config({
                floatingActionButtonConfig: {
                    // ...
                }
            });
            repaintFloatingActionButton();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>
    <script>
    import config from 'devextreme/core/config';
    import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';

    export default {
        methods: {
            changeFabConfig() {
                config({
                    floatingActionButtonConfig: {
                        // ...
                    }
                });
                repaintFloatingActionButton();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import config from 'devextreme/core/config';
    import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';

    class App extends React.Component {
        changeFabConfig() {
            config({
                floatingActionButtonConfig: {
                    // ...
                }
            });
            repaintFloatingActionButton();
        }
    }
    export default App;

---

#####See Also#####
- [SpeedDialAction](/api-reference/10%20UI%20Widgets/dxSpeedDialAction '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/')
