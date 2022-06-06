Specify the [location](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#location) property for each item. The [location](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#location) value can be one of the following:

- *"center"* (default)  
 Places the item in the center of the toolbar.

- *"before"*  
 Places the item before the central element(s).

- *"after"*  
 Places the item after the central element(s).

The following code snippet adds a button before the central elements and a button after. Note that the order of the items is not the same as the order in the code. For example, in the last tutorial section two central items were created. The order of the items in their area is important, the placement of the TextBox before the **Search** button was intentional. Now, to place an item *before* the central elements, you only need to specify `location: 'before'`, not move the code of the item.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#toolbar").dxToolbar({
            items: [
                // ...
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        icon: 'back',
                        onClick() {
                            showMessage('Back');
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'info',
                        text: 'About',
                        onClick() {
                            showMessage('About');
                        }
                    }
                }
            ]
        });

    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar>
        <!-- ... -->
        <dxi-item 
            location="before" 
            widget="dxButton" 
            [options]="backButtonOptions"
        >
        </dxi-item>
        <dxi-item 
            location="after" 
            widget="dxButton"
            [options]="aboutButtonOptions"
        >
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        backButtonOptions = {
            icon: 'back',
            onClick() {
                showMessage('Back');
            }
        }
        aboutButtonOptions = {
            icon: 'info',
            text: 'About',
            onClick() {
                showMessage('About');
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar>
            <!-- ... -->
            <dxItem 
                location="before" 
                widget="dxButton" 
                :options="backButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                :options="aboutButtonOptions"
            >
            </dxItem>
        </DxToolbar>
    </template>

    <script>
    // ...

    export default {
        components: {
            // ...
        },
        data() {
            return {
                // ...
                backButtonOptions: {
                    icon: 'back',
                    onClick: () => {
                        this.showMessage('Back');
                    }
                },
                aboutButtonOptions: {
                    icon: 'info',
                    text: 'About',
                    onClick: () => {
                        this.showMessage('About');
                    }
                }
            };
        },
        methods: {    
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const backButtonOptions = {
        icon: 'back',
        onClick() {
            showMessage('Back');
        }
    }

    const aboutButtonOptions = {
        icon: 'info',
        text: 'About',
        onClick() {
            showMessage('About');
        }
    }

    function App() {
        return (
            <Toolbar>
                <!-- ... -->
                <Item 
                    location="before" 
                    widget="dxButton" 
                    options={backButtonOptions}
                >
                </Item>
                <Item 
                    location="after" 
                    widget="dxButton"
                    options={aboutButtonOptions}
                >
                </Item>
            </Toolbar>
        );
    }

    export default App;

---