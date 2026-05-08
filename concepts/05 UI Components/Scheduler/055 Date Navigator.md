The date navigator is a [predefined toolbar item](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/) that allows you to change the displayed date in the dxScheduler.

![Scheduler Date Navigator](/images/UiWidgets/Scheduler_Date_Navigator.png)

The date navigator is a DevExtreme [ButtonGroup](/api-reference/10%20UI%20Components/dxButtonGroup '/Documentation/ApiReference/UI_Components/dxButtonGroup/') with three buttons: previous date (*'prev'*), next date (*'next'*), and date interval (*'dateInterval'*). You can customize the order of these buttons or add new buttons using [options](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/#options').**items**:

---

##### jQuery

    <!--tab: index.js-->
    $("#scheduler-container").dxScheduler({
        // ...
        toolbar: {
            items: [{
                name: "dateNavigator",      
                options: {
                    items: ['prev', 'dateInterval', 'next', {
                        icon: 'more',
                        onClick() {
                            console.log("The custom button was clicked.")
                        },
                    }]
                }
            }]  
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxo-scheduler-toolbar>
            <dxi-scheduler-toolbar-item 
                name="dateNavigator"
                [options]="dateNavigatorOptions">
            </dxi-scheduler-toolbar-item>
        </dxo-scheduler-toolbar>
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        dateNavigatorOptions = {
            items: ['prev', 'dateInterval', 'next', {
                icon: 'more',
                onClick() {
                    console.log("The custom button was clicked.")
                },
            }]
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxToolbar>
                <DxItem
                    name="dateNavigator"
                    :options="dateNavigatorOptions"
                />
            </DxToolbar>
        </DxScheduler>
    </template>
    <script setup lang="ts">
        import { DxScheduler, DxToolbar, DxItem } from 'devextreme-vue/scheduler';

        const dateNavigatorOptions = {
            items: ['prev', 'dateInterval', 'next', {
                icon: 'more',
                onClick() {
                    console.log("The custom button was clicked.")
                },
            }]
        }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Toolbar, Item } from 'devextreme-react/scheduler';
    // ...

    const dateNavigatorOptions = {
        items: ['prev', 'dateInterval', 'next', {
            icon: 'more',
            onClick() {
                console.log("The custom button was clicked.")
            },
        }]
    };

    function App() {
        return (
            <Scheduler ... >
                <Toolbar>
                    <Item
                        name="dateNavigator"
                        options={dateNavigatorOptions}
                    />
                </Toolbar>
            </Scheduler>
        );
    }

---

You can configure the [customizeDateNavigatorText](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/customizeDateNavigatorText.md 'Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#customizeDateNavigatorText') callback to customize the date interval text. To customize the range of available dates available in the date navigator, configure the [min](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#min') and [max](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#max') properties:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            min: new Date(2026, 2, 3),
            max: new Date(2026, 4, 3)
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [min]="minDate"
        [max]="maxDate">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from 'devextreme-angular'
    // ...
    export class AppComponent {
        minDate: Date = new Date(2026, 2, 3);
        maxDate: Date = new Date(2026, 4, 3);
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :min="minDate"
            :max="maxDate"
        />
    </template>

    <script setup lang="ts">
    import { DxScheduler } from 'devextreme-vue/scheduler';

    const minDate = new Date(2026, 2, 3);
    const maxDate = new Date(2026, 4, 3);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler } from 'devextreme-react/scheduler';
    
    const minDate = new Date(2026, 2, 3);
    const maxDate = new Date(2026, 4, 3);

    function App() {
        return (
            <Scheduler
                min={minDate}
                max={maxDate}
            />
        );        
    }

---

To hide the date navigator, configure **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/toolbar/items/) and omit *"dateNavigator"*. The following code snippet displays only the *"viewSwitcher"* predefined toolbar item:

---
##### jQuery

    <!--tab: index.js-->
    $("#scheduler-container").dxScheduler({
        // ...
        toolbar: {
            items: ['viewSwitcher']
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxo-scheduler-toolbar>
            <dxi-scheduler-toolbar-item 
                name="viewSwitcher"
            </dxi-scheduler-toolbar-item>
        </dxo-scheduler-toolbar>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxToolbar>
                <DxItem
                    name="viewSwitcher"
                />
            </DxToolbar>
        </DxScheduler>
    </template>
    <script setup lang="ts">
        import { DxScheduler, DxToolbar, DxItem } from 'devextreme-vue/scheduler';

        // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Toolbar, Item } from 'devextreme-react/scheduler';
    // ...

    function App() {
        return (
            <Scheduler ... >
                <Toolbar>
                    <Item
                        name="viewSwitcher"
                    />
                </Toolbar>
            </Scheduler>
        );
    }

---