#include common-customize-dropdown-menu For example, the following code sets the height of UI Component's drop-down menu to 150 pixels:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBox").dxSelectBox{
            // ...
            dropDownOptions: {
                height: 150
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        // ...
        [dropDownOptions]="dropDownOptions">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBox } from "devextreme-angular";
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
            DxSelectBox
        ],
        // ...
    })

##### Vue

    <template>
        <DxSelectBox
            // ...
            :drop-down-options="dropDownOptions">
        </DxSelectBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: { DxSelectBox },
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

    import SelectBox from 'devextreme-react/select-box';

    // ...
    
    const dropDownOptions = {
        height: 150
    }

    class App extends React.Component {
        render() {
            return (
                <SelectBox
                    // ...
                    dropDownOptions={dropDownOptions}>

                </SelectBox>
            );
        }
    }

    export default App;

---