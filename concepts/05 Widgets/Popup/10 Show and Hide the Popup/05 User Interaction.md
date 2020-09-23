The **Popup** can also be hidden when a user clicks outside it. To control this behavior of the **Popup**, use the [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            closeOnOutsideClick: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [closeOnOutsideClick]="true">
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
            :close-on-outside-click="true"
            title="Popup Title"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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
    import 'devextreme/dist/css/dx.common.css';
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
                    closeOnOutsideClick={true}
                    title="Popup Title"
                />
            );
        }
    }

    export default App;

---