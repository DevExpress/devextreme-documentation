The following UI components allow you to declare their content directly in the markup:

- [Drawer](/api-reference/10%20UI%20Components/dxDrawer '/Documentation/ApiReference/UI_Components/dxDrawer/')
- [DropDownBox](/api-reference/10%20UI%20Widgets/dxDropDownBox '/api-reference/10%20UI%20Components/dxDropDownBox '/Documentation/ApiReference/UI_Components/dxDropDownBox/'')
- [HtmlEditor](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/')
- [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/')
- [Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')
- [Resizable](/api-reference/10%20UI%20Components/dxResizable '/Documentation/ApiReference/UI_Components/dxResizable/')
- [ScrollView](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/')
- [SlideOutView](/api-reference/10%20UI%20Components/dxSlideOutView '/Documentation/ApiReference/UI_Components/dxSlideOutView/')
- [Tooltip](/api-reference/10%20UI%20Components/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/')
- [ValidationGroup](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/')

The following is an example with ScrollView:

    <!-- tab: Function component -->
    import ScrollView from 'devextreme-react/scroll-view';

    export default function App() {
        return (
            <ScrollView>
                <div>Some scrollable content</div>
            </ScrollView>
        );
    }
    
    <!-- tab: Class component -->
    import ScrollView from 'devextreme-react/scroll-view';

    class App extends React.Component {
        render() {
            return (
                <ScrollView>
                    <div>Some scrollable content</div>
                </ScrollView>
            );
        }
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