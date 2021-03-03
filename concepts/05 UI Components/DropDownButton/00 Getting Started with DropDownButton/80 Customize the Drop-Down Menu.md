#include common-customize-dropdown-menu For example, the following code sets the height of UI Component's drop-down menu to 150 pixels:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            dropDownOptions: {
                height: 150
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-drop-down-button
        // ...
        [dropDownOptions]="dropDownOptions">
    </dx-drop-down-button>

    <!--TypeScript-->
    import { DxDropDownButton } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            height: 150
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownButton
        ],
        // ...
    })

##### Vue

    <template>
        <DxDropDownButton
            // ...
            :drop-down-options="dropDownOptions">
        </DxDropDownButton>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDropDownButton } from 'devextreme-vue/drop-down-button';

    export default {
        components: { DxDropDownButton },
        data() {
            return {
                // ...
                dropDownOptions: {
                    height: 150
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DropDownButton from 'devextreme-react/drop-down-button';

    // ...
    
    const dropDownOptions = {
        height: 150
    }

    class App extends React.Component {
        render() {
            return (
                <DropDownButton
                    // ...
                    dropDownOptions={dropDownOptions}>

                </DropDownButton>
            );
        }
    }

    export default App;

---