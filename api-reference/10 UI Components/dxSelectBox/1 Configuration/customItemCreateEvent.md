---
id: dxSelectBox.Options.customItemCreateEvent
type: String
default: 'change'
---
---
##### shortDescription
Specifies the <a href="https://en.wikipedia.org/wiki/DOM_events" target="_blank">DOM event</a> after which the custom item should be created. Applies only if [acceptCustomValue]({basewidgetpath}/Configuration/#acceptCustomValue) is enabled.

---
The default custom item creating event is `change`, and items are created when users press the **Enter** key, or when the component loses focus.

To allow users create items only when they press the **Enter** key, pass an empty string to this property.

The following code shows how to enable item creation on **Space** key pressed down:

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
                acceptCustomValue={true}
                onCustomItemCreating={onCustomItemCreating}
                onKeyDown={onKeyDown}
            />
        );
    }

    export default App;

---