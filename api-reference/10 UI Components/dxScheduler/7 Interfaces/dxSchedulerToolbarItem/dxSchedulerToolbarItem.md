---
id: dxSchedulerToolbarItem
module: ui/scheduler
export: ToolbarItem
type: dxToolbarItem | Object
inherits: dxToolbarItem
generateTypeLink: 
---
---
##### shortDescription
Configures toolbar items.

---
The toolbar can contain the following elements as items:

- **Predefined controls**       
Predefined controls appear in the toolbar depending on whether a specific {WidgetName} feature is enabled. The following predefined controls are available:

    <table class="dx-table">
        <tr>
            <th>Control Name</th>
            <th>Image</th>
        </tr>
        <tr>
            <td><i>dateNavigator</i></td>
            <td><img src="/images/Scheduler/toolbar/date-navigator.png" alt="DevExtreme Scheduler toolbar date navigator" style="margin:1px; vertical-align:middle"/></td>
        </tr>
        <tr>
            <td><i>viewSwitcher</i></td>
            <td><img src="/images/Scheduler/toolbar/view-switcher.png" alt="DevExtreme Scheduler toolbar view switcher" style="margin:1px; vertical-align:middle"/></td>
        </tr>
        <tr>
            <td><i>today</i></td>
            <td><img src="/images/Scheduler/toolbar/today-button.png" alt="DevExtreme Scheduler toolbar today button" style="margin:1px; vertical-align:middle"/></td>
        </tr>
    </table>

    If you need to customize a predefined control, add an object to the **items[]** array. This object must contain the control's [name](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name') and [properties](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerToolbarItem '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/') you want to customize. If a control does not need customization, you can include its name in the **toolbar**.**items[]** array. 

    ---
    ##### jQuery

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                toolbar: {
                    items: [
                        "dateNavigator",
                        "today"
                    ]  
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-scheduler-toolbar>
                <dxi-scheduler-toolbar-item name="dateNavigator"></dxi-scheduler-toolbar-item>
                <dxi-scheduler-toolbar-item name="today"></dxi-scheduler-toolbar-item>
            </dxo-scheduler-toolbar>
        </dx-{widget-name}>

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... >
                <DxToolbar>
                    <DxItem name="dateNavigator" />
                    <DxItem name="today" />
                </DxToolbar>
            </Dx{WidgetName}>
        </template>
        <script setup lang="ts">
            import DxScheduler, { DxToolbar, DxItem } from 'devextreme-vue/scheduler';
        </script>

    ##### React

        <!-- tab: App.js -->
        import {WidgetName}, { Toolbar, Item } from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <{WidgetName} ... >
                    <Toolbar>
                        <Item name="dateNavigator" />
                        <Item name="today" />
                    </Toolbar>
                </{WidgetName}>
            );
        }

    ---

    [important] The {WidgetName} does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

    The "dateNavigator" predefined control is a [ButtonGroup](/api-reference/10%20UI%20Components/dxButtonGroup '/Documentation/ApiReference/UI_Components/dxButtonGroup/') with three items: left arrow (*'prev'*), right arrow (*'next'*), and date interval (*'dateInterval'*). Define [options](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#options').**items** following the example below to customize the order of dateNavigator components and add new buttons.

    ---
    ##### jQuery

        <!--tab: index.js-->
        const customButton = {
            text: "Custom Button",
            icon: "plus",
            onClick: () => {
                console.log("The Custom Button was clicked.")
            }
        }

        const dateNavigatorOptions = {
            items: ['prev', 'dateInterval', customButton, 'next']
        }

        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                toolbar: {
                    items: [{
                        name: "dateNavigator",      
                        options: dateNavigatorOptions
                    }]  
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-scheduler-toolbar>
                <dxi-scheduler-toolbar-item 
                    name="dateNavigator"
                    [options]="dateNavigatorOptions">
                </dxi-scheduler-toolbar-item>
            </dxo-scheduler-toolbar>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        import { DxSchedulerModule } from 'devextreme-angular'
        // ...
        export class AppComponent {
            customButton = {
                text: "Custom Button",
                icon: "plus",
                onClick: () => {
                    console.log("The Custom Button was clicked.")
                }
            }
            dateNavigatorOptions = {
                items: ['prev', 'dateInterval', this.customButton, 'next']
            }
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... >
                <DxToolbar>
                    <DxItem
                        name="dateNavigator"
                        :options="dateNavigatorOptions"
                    />
                </DxToolbar>
            </Dx{WidgetName}>
        </template>
        <script setup lang="ts">
            import DxScheduler, { type DxSchedulerTypes, DxToolbar, DxItem } from 'devextreme-vue/scheduler';
            const customButton = {
                text: "Custom Button",
                icon: "plus",
                onClick: () => {
                    console.log("The Custom Button was clicked.");
                }
            }
            const dateNavigatorOptions: DateNavigatorItemProperties = {
                items: ['prev', 'dateInterval', customButton, 'next']
            }
        </script>

    ##### React

        <!-- tab: App.js -->
        import {WidgetName}, { Toolbar, Item } from 'devextreme-react/{widget-name}';
        // ...
        const customButton = {
            text: "Custom Button",
            icon: "plus",
            onClick: () => {
                console.log("The Custom Button was clicked.")
            }
        }

        const dateNavigatorOptions = {items: ['prev', 'dateInterval', customButton, 'next']};

        function App() {
            return (
                <{WidgetName} ... >
                    <Toolbar>
                        <Item
                            name="dateNavigator"
                            options={dateNavigatorOptions}
                        />
                    </Toolbar>
                </{WidgetName}>
            );
        }

    ---

- **DevExtreme components**     

    ---
    ##### jQuery

    You can use DevExtreme components as toolbar items. Set the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#widget') property to specify the component you want to use and configure the component's [options](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#options'):

        <!--tab: index.js-->
        $(function(){
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                toolbar: {
                    items: [{
                        widget: "dxSelectBox",
                        options: {
                            // SelectBox properties are specified here
                        }
                    }]  
                }
            });
        });

    ##### Angular

    You can use DevExtreme components as toolbar items. Declare a `dxi-item` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#widget'):

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxo-scheduler-toolbar>
                <dxi-scheduler-toolbar-item>
                    <dx-select-box>
                        <!-- SelectBox properties are specified here -->
                    </dx-select-box>
                </dxi-scheduler-toolbar-item>
            </dxo-scheduler-toolbar>
        </dx-{widget-name}>

    ##### Vue

    You can use DevExtreme components as toolbar items. Declare a `DxItem` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#widget'):

        <!-- tab: App.vue -->
        <template>
            <Dx{WidgetName} ... >
                <DxToolbar>
                    <DxItem>
                        <DxSelectBox>
                            <!-- SelectBox properties are specified here -->
                        </DxSelectBox>
                    </DxItem>
                </DxToolbar>
            </Dx{WidgetName}>
        </template>
        <script>
        import { Dx{WidgetName}, DxToolbar, DxItem } from 'devextreme-vue/{widget-name}';
        import { DxSelectBox } from 'devextreme-vue/select-box';

        export default {
            components: {
                Dx{WidgetName}, 
                DxToolbar, 
                DxItem,
                DxSelectBox
            }
        };
        </script>

    ##### React

    You can use DevExtreme components as toolbar items. Declare an `Item` element to add a [supported component](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#widget'):

        <!-- tab: App.js -->
        import { SelectBox } from 'devextreme-react/select-box';
        import {WidgetName}, { Toolbar, Item } from 'devextreme-react/{widget-name}';
        // ...
        function App() {
            return (
                <{WidgetName} ... >
                    <Toolbar>
                        <Item>
                            <SelectBox>
                                {/* SelectBox properties are specified here */}
                            </SelectBox>
                        </Item>
                    </Toolbar>
                </{WidgetName}>
            );
        }

    ---

- **Custom controls**           
To use a custom control, specify a [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#template') for it.