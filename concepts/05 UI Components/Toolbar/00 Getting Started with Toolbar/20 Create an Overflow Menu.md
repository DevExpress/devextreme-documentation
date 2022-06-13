The Toolbar can render its items in the overflow menu. Specify the [locateInMenu](/api-reference/_hidden/dxToolbarItem/locateInMenu.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#locateInMenu') property for an item. Use one of the following values:

- *"always"*  
 Always places the item in the overflow menu. You can specify the order of items in the overflow menu.

- *"never"* (default)  
 Places the item outside of the overflow menu.

- *"auto"*  
 Places the item outside of the overflow menu. If all items cannot fit within the [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#width') of the Toolbar, it renders this item in the overflow menu. The Toolbar component determines the order of items in the overflow menu automatically.

If you want to customize an item in the overflow menu, specify [menuItemTemplate](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#menuItemTemplate').

The following code specifies `locateInMenu="auto"` for the **About** button and creates an overflow menu with three items. It also specifies the Toolbar [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#width').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#toolbar").dxToolbar({
            width: 500,
            items: [
                // ...
                {
                    location: 'after',
                    widget: 'dxButton',
                    locateInMenu: 'auto',
                    options: {
                        icon: 'info',
                        text: 'About',
                        onClick() {
                            showMessage('About');
                        }
                    }
                },
                // ...
                {
                    location: 'after',
                    locateInMenu: 'always',
                    template: '<div id="greeting">Hi <b>User</b>!</div>'
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    locateInMenu: 'always',
                    options: {
                        icon: 'user',
                        text: 'Profile',
                        onClick() {
                            showMessage('Profile');
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    locateInMenu: 'always',
                    options: {
                        icon: 'preferences',
                        text: 'Settings',
                        onClick() {
                            showMessage('Settings');
                        }
                    }
                }
            ]
        });

    });

    <!-- tab: index.css -->
    // ...
    #greeting {
        text-align: center;
        margin: 7px;
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar
        [width]="500"
    >
        <!-- ... -->
        <dxi-item 
            location="after" 
            widget="dxButton"
            locateInMenu="auto"
            [options]="aboutButtonOptions"
        >
        </dxi-item>
        <!-- ... -->
        <dxi-item 
            location="after"
            locateInMenu="always" 
        >
            <div *dxTemplate>
                <div id="greeting">Hi <b>User</b>!</div>
            </div>
        </dxi-item>
        <dxi-item 
            location="after" 
            widget="dxButton"
            locateInMenu="always"
            [options]="profileButtonOptions"
        >
        </dxi-item>
        <dxi-item 
            location="after" 
            widget="dxButton"
            locateInMenu="always"
            [options]="settingsButtonOptions"
        >
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        profileButtonOptions = {
            icon: 'user',
            text: 'Profile',
            onClick() {
                showMessage('Profile');
            }
        }

        settingsButtonOptions = {
            icon: 'preferences',
            text: 'Settings',
            onClick() {
                showMessage('Settings');
            }
        }
    }

    <!-- tab: app.component.css -->
    // ...
    #greeting {
        text-align: center;
        margin: 7px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar
            :width="500"
        >
            <!-- ... -->
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="auto"
                :options="aboutButtonOptions"
            >
            </dxItem>
            <!-- ... -->
            <dxItem 
                location="after"
                locate-in-menu="always" 
            >
                <div id="greeting">Hi <b>User</b>!</div>
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="always"
                :options="profileButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="always"
                :options="settingsButtonOptions"
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
                profileButtonOptions: {
                    icon: 'user',
                    text: 'Profile',
                    onClick: () => {
                        this.showMessage('Profile');
                    }
                },
                settingsButtonOptions: {
                    icon: 'preferences',
                    text: 'Settings',
                    onClick: () => {
                        this.showMessage('Settings');
                    }
                }
            };
        },
        methods: {    
            // ...
        }
    }
    </script>

    <style>
        // ...

        #greeting {
            text-align: center;
            margin: 7px;
        }
    </style>

##### React

    <!-- tab: App.js -->
    // ...

    const profileButtonOptions = {
        icon: 'user',
        text: 'Profile',
        onClick() {
            showMessage('Profile');
        }
    }

        const settingsButtonOptions = {
        icon: 'preferences',
        text: 'Settings',
        onClick() {
            showMessage('Settings');
        }
    }

    const renderGreeting = () => {
        return <div id="greeting">Hi <b>User</b>!</div>;
    }

    function App() {
        return (
            <Toolbar
                width={500}
            >
                <!-- ... -->
                <Item 
                    location="after" 
                    widget="dxButton"
                    locateInMenu="auto"
                    options={aboutButtonOptions}
                >
                <!-- ... -->
                </Item>
                <Item 
                    location="after"
                    locateInMenu="always"
                    render={renderGreeting}
                >
                </Item>
                <Item 
                    location="after" 
                    widget="dxButton"
                    locateInMenu="always"
                    options={profileButtonOptions}
                >
                </Item>
                <Item 
                    location="after" 
                    widget="dxButton"
                    locateInMenu="always"
                    options={settingsButtonOptions}
                >
                </Item>
            </Toolbar>
        );
    }

    export default App;

    <!-- tab: index.css -->
    // ...
    #greeting {
        text-align: center;
        margin: 7px;
    }

---