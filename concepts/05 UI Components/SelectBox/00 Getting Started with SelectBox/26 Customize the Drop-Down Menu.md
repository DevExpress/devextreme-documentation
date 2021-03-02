#include common-customize-dropdown-menu For example, the following code adds **Add Item** button to the bottom of the UI Component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBox").dxSelectBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            dropDownOptions: {
                toolBarItems: [{
                    widget: "dxButton",
                    location: "center",
                    toolbar: "bottom",
                    options: { 
                        text: "Add Item", 
                        onClick: function(e) { 
                            // Your implementation goes here
                         }
                    }
                }]
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
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            toolbarItems: [{
                widget: "dxButton",
                location: "center",
                toolbar: "bottom",
                options: { 
                    text: "Add Item", 
                    onClick: function(e): void { 
                        // Your implementation goes here
                     }
                }
            }]
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSelectBoxModule
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
                    toolbarItems: [{
                        widget: "dxButton",
                        location: "center",
                        toolbar: "bottom",
                        options: { 
                            text: "Add Item", 
                            onClick: function(e) {
                                // Your implementation goes here
                              }
                        }
                    }]
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
        toolbarItems: [{
            widget: "dxButton",
            location: "center",
            toolbar: "bottom",
            options: { 
                text: "Add Item", 
                onClick: function(e) {
                 // Your implementation goes here
                }
            }
       }]
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
