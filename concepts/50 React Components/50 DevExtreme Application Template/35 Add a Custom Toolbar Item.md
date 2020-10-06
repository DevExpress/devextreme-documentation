The application template uses the DevExtreme [Toolbar](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/') component. The **Toolbar** is part of the `Header` component whose configuration is in the `src\components\header\header.js` file. To add a custom toolbar item, open this file and add an `Item` element inside `Toolbar`. Refer to the [items](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/') help section for information on `Item` attributes.

The following code adds a search button to the toolbar:

    <!-- tab: header.js -->
    // ...
    export default ({ ..., search }) => (
        <header className={'header-component'}>
            <Toolbar className={'header-toolbar'}>
                {/* ... */}
                <Item location="after">
                    <Button icon="search" onClick={search} />
                </Item>
                {/* ... */}
            </Toolbar>
        </header>
    )

    <!-- tab: side-nav-outer-toolbar.js -->
    // ...
    export default function ({ title, children }) {
        // ...
        const search = useCallback(() => {
            console.log("search");
        }, []);

        return (
            <div className={'side-nav-outer-toolbar'}>
                <Header ...
                    search={search}
                />
                {/* ... */}
            </div>
        );
    }

In the code above, the button click handler is declared in the `SideNavOuterToolbar` component. This component applies when the outer toolbar [layout](/concepts/50%20React%20Components/02%20Create%20a%20DevExtreme%20Application/10%20Layouts.md '/Documentation/Guide/React_Components/Create_a_DevExtreme_Application/#Layouts') is used. If the application uses the inner toolbar layout, add the same code to the `SideNavInnerToolbar` component.
