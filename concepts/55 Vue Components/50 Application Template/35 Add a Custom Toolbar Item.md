The application template uses the DevExtreme [Toolbar](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/') component. The Toolbar is part of the `HeaderToolbar` component whose configuration is in the `src\components\header-toolbar.vue` file. To add a custom toolbar item, open this file and add a `DxItem` element inside `DxToolbar`. Refer to the [items](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/') help section for information on `DxItem` attributes.

The following code adds a search button to the toolbar:

    <!-- tab: header-toolbar.vue -->
    <template>
        <header class="header-component">
            <DxToolbar class="header-toolbar">
                <!-- ... -->
                <DxItem
                    location="after">
                    <template #default>
                        <DxButton
                            icon="search"
                            @click="searchFunc"
                        />
                    </template>
                </DxItem>
                <!-- ... --->
            </DxToolbar>
        </header>
    </template>
    <script>
    // ...
    export default {
        props: {
            // ...
            searchFunc: Function
        },
        // ...
    };
    </script>

    <!-- tab: side-nav-outer-toolbar.vue -->
    <template>
        <div class="side-nav-outer-toolbar">
            <header-toolbar ...
                :search-func="search"
            />
            <!-- ... -->
        </div>
    </template>
    <script>
    // ...
    export default {
        // ...
        methods: {
            // ...
            search() {
                console.log("search");
            }
        },
        // ...
    };
    </script>

In the code above, the button click handler is declared in the `SideNavOuterToolbar` component. This component applies when the outer toolbar [layout](/concepts/55%20Vue%20Components/50%20Application%20Template/10%20Layouts.md '/Documentation/Guide/Vue_Components/Application_Template/#Layouts') is used. If the application uses the inner toolbar layout, add the same code to the `SideNavInnerToolbar` component.
