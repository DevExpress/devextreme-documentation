The following UI components allow you to declare their content directly in the markup:

- [Drawer](/api-reference/10%20UI%20Widgets/dxDrawer '/Documentation/ApiReference/UI_Components/dxDrawer/')
- [DropDownBox](/api-reference/10%20UI%20Widgets/dxDropDownBox '/Documentation/ApiReference/UI_Components/dxDropDownBox/')
- [HtmlEditor](/api-reference/10%20UI%20Widgets/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/')
- [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/')
- [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')
- [Resizable](/api-reference/10%20UI%20Widgets/dxResizable '/Documentation/ApiReference/UI_Components/dxResizable/')
- [ScrollView](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/')
- [SlideOutView](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Components/dxSlideOutView/')
- [Tooltip](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/')
- [ValidationGroup](/api-reference/10%20UI%20Widgets/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/')

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

These UI components do not support dynamically or conditionally rendered content in their root element. For example, the following code **does not work**:

    <!-- tab: App.js -->
    <Drawer ... >
        {
            someCondition && <div> ... </div>
            // when the condition changes in runtime, the UI component may not render content correctly
        }
    </Drawer>

Wrap the content in a static element:

    <!-- tab: App.js -->
    <Drawer ... >
        <div>
            {
                someCondition && <div> ... </div>
            }
        </div>
    </Drawer>

Note that `React.Fragment` is a dynamically rendered element and doesn't fit in this case. Use static elements such as `div` or `span` instead.

[/important]