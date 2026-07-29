Configure **editing**.**form**.[items[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items) to customize the appointment edit form layout. To preserve the form's switching functionality between `mainGroup` and `recurrenceGroup`, add the groups as [group items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/') in the **items[]** root:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        editing: {
            form: {
                items: [{
                    name: 'mainGroup',
                    itemType: 'group',
                }, {
                    name: 'recurrenceGroup',
                    itemType: 'group',
                }],
            },
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    <dx-scheduler>
        <dxo-scheduler-editing>
            <dxo-scheduler-form>
    	        <dxi-scheduler-item
                    name="mainGroup"
                    itemType="group"
                ></dxi-scheduler-item>
                <dxi-scheduler-item
                    name="recurrenceGroup"
                    itemType="group"
                ></dxi-scheduler-item>
            </dxo-scheduler-form>
        </dxo-scheduler-editing>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler>
            <DxEditing>
                <DxForm>
                    <DxItem
                        name="mainGroup"
                        itemType="group"
                    />
                    <DxItem
                        name="recurrenceGroup"
                        itemType="group"
                    />
                </DxForm>
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxForm, DxItem } from 'devextreme-vue/scheduler';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Form, Item } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler>
                <Editing>
                    <Form>
                        <Item
                            name="mainGroup"
                            itemType="group"
                        />
                        <Item
                            name="recurrenceGroup"
                            itemType="group"
                        />
                    </Form>
                </Editing>
            </Scheduler>
        );
    };

---

To add a resource field editor to **items[]**, use the resource [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr') in an item name as follows:

---

##### jQuery

    <!-- tab: index.js -->
    $('#scheduler').dxScheduler({
        resources: [{
            fieldExpr: 'priorityId'
        }],
        editing: {
            form: {
                items: [{
                    name: 'mainGroup',
                    itemType: 'group',
                    items: [{
                        name: 'priorityIdGroup',
                        itemType: 'group',
                        items: ['priorityIdIcon', 'priorityIdEditor']
                    }],
                }, ... ],
            },
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    <dx-scheduler>
        <dxo-scheduler-editing>
            <dxo-scheduler-form>
    	        <dxi-scheduler-item
                    name="mainGroup"
                    itemType="group"
                >
                    <dxi-scheduler-item
                        name="priorityIdGroup"
                        itemType="group"
                    >
                        <dxi-scheduler-item name="priorityIdIcon"></dxi-scheduler-item>
                        <dxi-scheduler-item name="priorityIdEditor"></dxi-scheduler-item>
                    </dxi-scheduler-item>
                </dxi-scheduler-item>
            </dxo-scheduler-form>
        </dxo-scheduler-editing>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler>
            <DxEditing>
                <DxForm>
                    <DxItem
                        name="mainGroup"
                        itemType="group"
                    >
                        <DxItem
                            name="priorityIdGroup"
                            itemType="group"
                        >
                            <DxItem name="priorityIdIcon" />
                            <DxItem name="priorityIdEditor" />
                        </DxItem>
                    </DxItem>
                </DxForm>
            </DxEditing>
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { DxScheduler, DxEditing, DxForm, DxItem } from 'devextreme-vue/scheduler';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Scheduler, Editing, Form, Item } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler>
                <Editing>
                    <Form>
                        <Item
                            name="mainGroup"
                            itemType="group"
                        >
                            <Item
                                name="priorityIdGroup"
                                itemType="group"
                            >
                                <Item name="priorityIdIcon" />
                                <Item name="priorityIdEditor" />
                            </Item>
                        </Item>
                    </Form>
                </Editing>
            </Scheduler>
        );
    };

---
