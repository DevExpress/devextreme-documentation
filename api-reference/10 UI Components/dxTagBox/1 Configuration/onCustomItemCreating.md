---
id: dxTagBox.Options.onCustomItemCreating
type: function(e)
---
---
##### shortDescription
A function that is executed when a user adds a custom item. Requires [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') to be set to **true**.

##### param(e): ui/tag_box:CustomItemCreatingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.customItem): String | Object | Promise<any>
The field where to place a custom item.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.text): String
The input field's text.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/"
}

You can specify DOM events after which the component calls this function. Use the [customItemCreateEvent](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/customItemCreateEvent.md '{basewidgetpath}/Configuration/#customItemCreateEvent') property for this purpose. Besides the event passed to this property, the item can also be created when users press the **Enter** key.

The following code shows how to enable item creation when the **Space** key is pressed:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            items: [{ id: 1, text: 'item 1'}],
            acceptCustomValue: true,
            displayExpr: 'text',
            onCustomItemCreating: (args) => {
                if (!args.text) {
                    args.customItem = null;
                    return;
                }
                
                const { component, text } = args;
                const currentItems = component.option('items');

                const newId = currentItems.at(-1).id + 1;
                const newItem = {
                    id: newId,
                    text: text.trim(),
                };

                const itemInDataSource = currentItems.find((item) => item.text === newItem.text)
                if (itemInDataSource) {
                    args.customItem = itemInDataSource;
                } else {    
                    currentItems.push(newItem);
                    component.option('items', currentItems);
                    args.customItem = newItem;
                }
            },
            onKeyDown: (e) => {
                if (e.event.code === 'Space') {
                    const event = new KeyboardEvent('keydown', {
                        key: 'Enter',
                        keyCode: 13,
                        which: 13,
                    });
                    const target = e.event.target;
                    target.dispatchEvent(event);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [items]="itemsArray"
        displayExpr="text"
        [acceptCustomValue]="true"
        (onCustomItemCreating)="onCustomItemCreating($event)"
        (onKeyDown)="onKeyDown($event)"
    >
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        itemsArray = [{ id: 1, text: 'item 1'}];

        onCustomItemCreating(args) {
            if (!args.text) {
                args.customItem = null;
                return;
            }
            
            const { component, text } = args;
            const currentItems = component.option('items');

            const newId = currentItems.at(-1).id + 1;
            const newItem = {
                id: newId,
                text: text.trim(),
            };

            const itemInDataSource = currentItems.find((item) => item.text === newItem.text)
            if (itemInDataSource) {
                args.customItem = itemInDataSource;
            } else {    
                currentItems.push(newItem);
                component.option('items', currentItems);
                args.customItem = newItem;
            }
        }
        onKeyDown(e) {
            if (e.event.code === 'Space') {
                const event = new KeyboardEvent('keydown', {
                    key: 'Enter',
                    keyCode: 13,
                    which: 13,
                });
                const target = e.event.target;
                target.dispatchEvent(event);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :items="itemsArray"
            display-expr="text"
            :accept-custom-value="true"
            @customItemCreating="onCustomItemCreating"
            @keyDown="onKeyDown"
        >
        </Dx{WidgetName}>
    </template>

    <script>
    // ...
    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                itemsArray: [{ id: 1, text: 'item 1'}]
            }
        },
        methods: {
            onCustomItemCreating(args) {
                if (!args.text) {
                    args.customItem = null;
                    return;
                }
                
                const { component, text } = args;
                const currentItems = component.option('items');

                const newId = currentItems.at(-1).id + 1;
                const newItem = {
                    id: newId,
                    text: text.trim(),
                };

                const itemInDataSource = currentItems.find((item) => item.text === newItem.text)
                if (itemInDataSource) {
                    args.customItem = itemInDataSource;
                } else {    
                    currentItems.push(newItem);
                    component.option('items', currentItems);
                    args.customItem = newItem;
                }
            },
            onKeyDown(e) {
                if (e.event.code === 'Space') {
                    const event = new KeyboardEvent('keydown', {
                        key: 'Enter',
                        keyCode: 13,
                        which: 13,
                    });
                    const target = e.event.target;
                    target.dispatchEvent(event);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const itemsArray = [{ id: 1, text: 'item 1'}];

    const onCustomItemCreating = (args) => {
        if (!args.text) {
            args.customItem = null;
            return;
        }
        
        const { component, text } = args;
        const currentItems = component.option('items');

        const newId = currentItems.at(-1).id + 1;
        const newItem = {
            id: newId,
            text: text.trim(),
        };

        const itemInDataSource = currentItems.find((item) => item.text === newItem.text)
        if (itemInDataSource) {
            args.customItem = itemInDataSource;
        } else {    
            currentItems.push(newItem);
            component.option('items', currentItems);
            args.customItem = newItem;
        }
    }

    const onKeyDown = (e) => {
        if (e.event.code === 'Space') {
            const event = new KeyboardEvent('keydown', {
                key: 'Enter',
                keyCode: 13,
                which: 13,
            });
            const target = e.event.target;
            target.dispatchEvent(event);
        }
    }

    function App() {
        return (
            <{WidgetName} ...
                items={itemsArray}
                displayExpr="text"
                acceptCustomValue={true}
                onCustomItemCreating={onCustomItemCreating}
                onKeyDown={onKeyDown}
            />
        );
    }

    export default App;

---

#####See Also#####
- [Create a User-Defined Item](/concepts/05%20UI%20Components/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/UI_Components/{WidgetName}/Create_a_User-Defined_Item/')