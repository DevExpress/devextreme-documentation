#include common-customize-dropdown-menu For example, the following code changes the default behavior of the **Today** button to picking the current date/time and hiding the UI component on double click:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            dropDownOptions: {
                onInitialized: function(e) {
                   var toolbarItems = e.component.option('toolbarItems');
                   var todayButton = toolbarItems.find(function(item) {
                        return item.options.text === "Today";
                   });
                   todayButton.options.onContentReady = function(ev) {
                        ev.element.on('dblclick', function (args) {
                        this.value = new Date();
                        e.component.hide();
                        });
                    };
                    e.component.option('toolbarItems', toolbarItems);
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        // ...
        [dropDownOptions]="dropDownOptions">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        dropDownOptions = {
            onInitialized: (e) => {
                let items = e.component.option("toolbarItems");
                let todayButton = items.find((item) => {
                    return item.options.text === "Today";
                });
                todayButton.options.onContentReady = (ev) => {
                    ev.element.ondblclick = (args) => {
                        this.value = new Date();
                        e.component.hide();
                    };
                };
                e.component.option("toolbarItems", items);
            }
        }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxDateBox
            // ...
            :drop-down-options="dropDownOptions">
        </DxDateBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    export default {
        components: { DxDateBox },
        data() {
            return {
                // ...
                dropDownOptions: {
                    onInitialized: (e) => {
                        let items = e.component.option("toolbarItems");
                        let todayButton = items.find((item) => {
                            return item.options.text === "Today";
                        });
                        todayButton.options.onContentReady = (ev) => {
                            ev.element.ondblclick = (args) => {
                                this.value = new Date();
                                e.component.hide();
                            };
                        };
                        e.component.option("toolbarItems", items);
                    }
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DateBox from 'devextreme-react/date-box';

    // ...
    
    const dropDownOptions = {
        onInitialized: (e) => {
            let items = e.component.option("toolbarItems");
            let todayButton = items.find((item) => {
                return item.options.text === "Today";
            });
            todayButton.options.onContentReady = (ev) => {
                ev.element.ondblclick = (args) => {
                    this.value = new Date();
                    e.component.hide();
                };
            };
            e.component.option("toolbarItems", items);
        }
    }

    class App extends React.Component {
        render() {
            return (
                <DateBox
                    // ...
                    dropDownOptions={dropDownOptions}>

                </DateBox>
            );
        }
    }

    export default App;

---