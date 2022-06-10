Specify the [location](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#location) property for each item. The following [location](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#location) values are available:

- *"center"* (default)  
 Places the item in the center of the toolbar.

- *"before"*  
 Places the item before the central element(s).

- *"after"*  
 Places the item after the central element(s).

The following code snippet adds a button before the central elements and a button after.

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