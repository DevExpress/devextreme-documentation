---
id: dxDrawer.Options.closeOnOutsideClick
type: Boolean | function(event)
default: false
---
---
##### shortDescription
Specifies whether to close the drawer if a user clicks or taps the view area.

##### param(event): event
The raised event. It is a [EventObject](/api-reference/50%20Common/Object%20Structures/EventObject '/Documentation/ApiReference/Common/Object_Structures/EventObject/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the UI component should be closed; otherwise **false**.

---
The function passed to this property enables you to specify a custom condition for UI component closing. For instance, you can prevent closing until a user clicks a specific element on the view:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#drawerContainer").dxDrawer({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDrawerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        closeOnOutsideClick(e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             DxDrawerModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-drawer ...
        [closeOnOutsideClick]="closeOnOutsideClick">
    </dx-drawer>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDrawer ....
            :close-on-outside-click="closeOnOutsideClick">
        </DxDrawer>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDrawer from 'devextreme-vue/drawer';

    export default {
        components: {
            DxDrawer
        },
        methods: {
            closeOnOutsideClick (e) {
                return e.target === document.getElementById("someElement");
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Drawer from 'devextreme-react/drawer';

    const closeOnOutsideClick = (e) => {
        return e.target === document.getElementById("someElement");
    };

    export default function App() {
        return (
            <Drawer ...
                closeOnOutsideClick={closeOnOutsideClick}>
            </Drawer>
        );
    }

---