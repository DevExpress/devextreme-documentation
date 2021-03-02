#include common-customize-dropdown-menu For example, the following code set the width of UI Component's drop-down menu to 300 pixels:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            // ...
            dropDownOptions: {
                width: 300
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
            width: 300
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
                    width: 300
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
        width: 300
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