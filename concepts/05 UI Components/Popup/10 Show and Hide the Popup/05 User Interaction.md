Enable the [showCloseButton](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showCloseButton) property to allow a user to hide the Popup component by clicking the **Close** button.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            showTitle: true,
            showCloseButton: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        [showTitle]="true"
        [showCloseButton]="true">
    </dx-popup>

##### Vue

    <template>
        <DxPopup
            :show-title="true"
            :show-close-button:"true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';

    class App extends React.Component {
        return (
            <Popup
                showTitle={true}
                showCloseButton={true}
            />
        );
    }

    export default App;

---

The Popup can also be hidden when a user clicks outside of it. To control this Popup behavior, use the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#hideOnOutsideClick') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            hideOnOutsideClick: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [hideOnOutsideClick]="true">
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
            :hide-on-outside-click="true"
            title="Popup Title"
        />
    </template>

    <script>
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
                    hideOnOutsideClick={true}
                    title="Popup Title"
                />
            );
        }
    }

    export default App;

---

You can also implement a custom **Close** button inside the Popup. Refer to the following demo for more information:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/"
}