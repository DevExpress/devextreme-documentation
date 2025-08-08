---
id: dxSelectBox.Options.onCustomItemCreating
type: function(e)
default: function(e) { if(!e.customItem) { e.customItem = e.text; } }
---
---
##### shortDescription
A function that is executed when a user adds a custom item. Requires [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') to be set to **true**.

##### param(e): ui/select_box:CustomItemCreatingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.customItem): String | Object | Promise<any>
The custom item. Set this field to `null` to cancel custom item creation.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.text): String
The input field's text.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/"
}

You can specify DOM events after which the component calls this function. Use the [customItemCreateEvent](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/customItemCreateEvent.md '{basewidgetpath}/Configuration/#customItemCreateEvent') property for this purpose. Besides the event passed to this property, the item can also be created when users press the **Enter** key.

The following code shows how to create custom items when the **Space** key is pressed:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widget-name}").dx{WidgetName}({
            dataSource: [{ id: 1, text: 'item 1'}],
            acceptCustomValue: true,
            onCustomItemCreating(e) {
                if (!e.text) {
                    e.customItem = null; // cancels custom item creation
                    return;
                }

                const dataSource = e.component.option('dataSource');
                const itemExists = dataSource.find((item) => item.text === e.text.trim())

                if (itemExists) {
                    e.customItem = null;
                } else {
                    const newItem = {
                        id: dataSource.length + 1,
                        text: e.text.trim(),
                    };

                    dataSource.push(newItem);
                    e.component.option('dataSource', dataSource);
                    e.customItem = newItem;
                }
            },
            onKeyDown(e) {
                if (e.event.code === 'Space') {
                    const event = new KeyboardEvent('keydown', { key: 'Enter' });
                    e.event.target.dispatchEvent(event);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dataSource]="dataSource"
        [acceptCustomValue]="true"
        (onCustomItemCreating)="onCustomItemCreating($event)"
        (onKeyDown)="onKeyDown($event)"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Component, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

    // ...
    export class AppComponent {
        itemsArray = [{ id: 1, text: 'item 1'}];

        onCustomItemCreating(e: Dx{WidgetName}Types.CustomItemCreatingEvent) {
            if (!e.text) {
                e.customItem = null; // cancels custom item creation
                return;
            }

            const dataSource = e.component.option('dataSource');
            const itemExists = dataSource.find((item) => item.text === e.text.trim())

            if (itemExists) {
                e.customItem = null;
            } else {
                const newItem = {
                    id: dataSource.length + 1,
                    text: e.text.trim(),
                };

                dataSource.push(newItem);
                e.component.option('dataSource', dataSource);
                e.customItem = newItem;
            }
        }

        onKeyDown(e: Dx{WidgetName}Types.KeyDownEvent) {
            if (e.event.code === 'Space') {
                const event = new KeyboardEvent('keydown', { key: 'Enter' });
                e.event.target.dispatchEvent(event);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    const itemsArray = [{ id: 1, text: 'item 1'}];

    function onCustomItemCreating(e: Dx{WidgetName}Types.CustomItemCreatingEvent) {
        if (!e.text) {
            e.customItem = null; // cancels custom item creation
            return;
        }

        const dataSource = e.component.option('dataSource');
        const itemExists = dataSource.find((item) => item.text === e.text.trim())

        if (itemExists) {
            e.customItem = null;
        } else {
            const newItem = {
                id: dataSource.length + 1,
                text: e.text.trim(),
            };

            dataSource.push(newItem);
            e.component.option('dataSource', dataSource);
            e.customItem = newItem;
        }
    }
    
    function onKeyDown(e: Dx{WidgetName}Types.KeyDownEvent) {
        if (e.event.code === 'Space') {
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            e.event.target.dispatchEvent(event);
        }
    }

    </script>

    <template>
        <Dx{WidgetName} ...
            :data-source="itemsArray"
            :accept-custom-value="true"
            @custom-item-creating="onCustomItemCreating"
            @key-down="onKeyDown"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';

    const itemsArray = [{ id: 1, text: 'item 1'}];

    function onCustomItemCreating(e: {WidgetName}Types.CustomItemCreatingEvent) {
        if (!e.text) {
            e.customItem = null; // cancels custom item creation
            return;
        }

        const dataSource = e.component.option('dataSource');
        const itemExists = dataSource.find((item) => item.text === e.text.trim())

        if (itemExists) {
            e.customItem = null;
        } else {
            const newItem = {
                id: dataSource.length + 1,
                text: e.text.trim(),
            };

            dataSource.push(newItem);
            e.component.option('dataSource', dataSource);
            e.customItem = newItem;
        }
    }
    
    function onKeyDown(e: Dx{WidgetName}Types.KeyDownEvent) {
        if (e.event.code === 'Space') {
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            e.event.target.dispatchEvent(event);
        }
    }

    function App() {
        return (
            <{WidgetName} ...
                dataSource={itemsArray}
                acceptCustomValue={true}
                onCustomItemCreating={onCustomItemCreating}
                onKeyDown={onKeyDown}
            />
        );
    }

---

To allows users to add custom items without updating the component [dataSource](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'), integrate the following **onCustomItemCreating** implementation:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            displayExpr: "Name",
            acceptCustomValue: true,
            onCustomItemCreating(e) {
                e.customItem = { text: e.text };
            }
        })
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        displayExpr="Name"
        [acceptCustomValue]="true"
        (onCustomItemCreating)="onCustomItemCreating($event)"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from "devextreme-angular/ui/{widget-name}"

    // ...
    export class App {
        onCustomItemCreating(e: Dx{WidgetName}Types.CustomItemCreatingEvent) {
            e.customItem = { text: e.text };
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    function onCustomItemCreating(e: Dx{WidgetName}Types.CustomItemCreatingEvent) {
        e.customItem = { text: e.text };
    }
    </script>

    <template>
        <Dx{WidgetName} ...
            displayExpr="Name"
            :acceptCustomValue="true"
            :onCustomItemCreating="onCustomItemCreating"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';

    function App() {
        function onCustomItemCreating(e: {WidgetName}Types.CustomItemCreatingEvent) {
            e.customItem = { text: e.text };
        }

        return (
            <>
                <{WidgetName} ...
                    displayExpr="Name"
                    acceptCustomValue={true}
                    onCustomItemCreating={onCustomItemCreating}
                />
            </>
        )
    }

---

#####See Also#####
- [Create a User-Defined Item](/concepts/05%20UI%20Components/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/UI_Components/{WidgetName}/Create_a_User-Defined_Item/')