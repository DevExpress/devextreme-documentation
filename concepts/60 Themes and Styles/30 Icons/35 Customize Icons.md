DevExtreme icons are implemented as an icon font. You can customize icons with CSS styles specific to text content such as `color`, `font-size`, `font-weight`, and `text-align`.

DevExtreme UI components that generate icons assign the `dx-icon` class to all generated icons. Assign a unique `id` to a DevExtreme component and use it alongside the `.dx-icon` selector to customize all generated icons within a component at once. To customize a specific generated icon, use a CSS selector with a specific icon class such as `.dx-icon-refresh`. The following code snippet customizes both a specific icon and all generated icons within a [Toolbar](/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/) component:

---
##### jQuery  

    <!-- tab: index.js -->
    $(function() {
        $("#toolbar").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    icon: 'back',
                },
            }, {
                widget: 'dxButton',
                options: {
                    icon: 'refresh',
                },
            }]
        });
    });

    <!-- tab: index.css -->
    #toolbar .dx-icon {
        color: red; /* Customizes all generated icons within #toolbar. */
    }

    #toolbar .dx-icon-refresh {
        color: red; /* Customizes all "refresh" icons within #toolbar. */
    }
    
##### Angular  

    <!-- tab: app.component.html -->
    <dx-toolbar id="toolbar">
        <dxi-item
            widget="dxButton"
            [options]="{icon: 'back'}"
        ></dxi-item>
        <dxi-item
            widget="dxButton"
            [options]="{icon: 'refresh'}"
        ></dxi-item>
    </dx-toolbar>

    <!-- tab: app.component.css -->
    ::ng-deep #toolbar .dx-icon {
        color: red; /* Customizes all generated icons within #toolbar. */
    }

    ::ng-deep #toolbar .dx-icon-refresh {
        color: red; /* Customizes all "refresh" icons within #toolbar. */
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar id="toolbar">
            <DxItem
                widget="dxButton"
                :options="backButtonOptions"
            />
            <DxItem
                widget="dxButton"
                :options="refreshButtonOptions"
            />
        </DxToolbar>
    </template>
    <script>
        // ...
        const backButtonOptions = { icon: 'back' }
        const refreshButtonOptions = { icon: 'refresh' }
    </script>
    <style scoped>
        #toolbar .dx-icon {
            color: red; /* Customizes all generated icons within #toolbar. */
        }

        #toolbar .dx-icon-refresh {
            color: red; /* Customizes all "refresh" icons within #toolbar. */
        }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        const backButtonOptions = { icon: 'back' }
        const refreshButtonOptions = { icon: 'refresh' }

        return (
            <Toolbar id="toolbar">
                <Item
                    widget="dxButton"
                    options={backButtonOptions}
                />
                <Item
                    widget="dxButton"
                    options={refreshButtonOptions}
                />
            </Toolbar>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #toolbar .dx-icon {
        color: red; /* Customizes all generated icons within #toolbar. */
    }

    #toolbar .dx-icon-refresh {
        color: red; /* Customizes all "refresh" icons within #toolbar. */
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("saveButton")
        .Icon("save")
        .Text("Save")
    )

    <!--CSS-->
    #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }

---

To customize icons added to HTML elements, define a specific CSS class and assign styles to it.

    <!--HTML-->
    <i class="dx-icon-email custom-icon-style"></i>

    <!--CSS-->
    .custom-icon-style {
        font-size: 24px;
        color: blue;
    }