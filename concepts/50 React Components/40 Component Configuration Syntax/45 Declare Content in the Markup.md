The following widgets allow you to declare their content directly in the markup:

- [Drawer](/api-reference/10%20UI%20Widgets/dxDrawer '/Documentation/ApiReference/UI_Widgets/dxDrawer/')
- [DropDownBox](/api-reference/10%20UI%20Widgets/dxDropDownBox '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/')
- [HtmlEditor](/api-reference/10%20UI%20Widgets/dxHtmlEditor '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/')
- [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/')
- [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')
- [Resizable](/api-reference/10%20UI%20Widgets/dxResizable '/Documentation/ApiReference/UI_Widgets/dxResizable/')
- [ScrollView](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Widgets/dxScrollView/')
- [SlideOutView](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/')
- [Tooltip](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')
- [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Widgets/dxValidationGroup/')

The following is an example with **ScrollView**:

    <!-- tab: App.js -->
    import ScrollView from 'devextreme-react/scroll-view';

    function App() {
        return (
            <ScrollView>
                <div>Some scrollable content</div>
            </ScrollView>
        );
    }

[important]

These widgets do not support dynamically or conditionally rendered content in their root element. For example, the following code **does not work**:

    <!-- tab: App.js -->
    <React.Fragment>
        <Drawer ... >
            <RouterView></RouterView>
        </Drawer>
    </React.Fragment>

Wrap the content in a static element:

    <!-- tab: App.js -->
    <React.Fragment>
        <Drawer ... >
            <div>
                <RouterView></RouterView>
            </div>
        </Drawer>
    </React.Fragment>

[/important]
