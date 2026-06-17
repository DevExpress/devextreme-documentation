The following UI components allow you to declare content directly in the markup (inline):

- [Drawer](/api-reference/10%20UI%20Components/dxDrawer '/Documentation/ApiReference/UI_Components/dxDrawer/')
- [DropDownBox](/api-reference/10%20UI%20Components/dxDropDownBox '/Documentation/ApiReference/UI_Components/dxDropDownBox/')
- [HTML Editor](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/')
- [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/')
- [Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')
- [Resizable](/api-reference/10%20UI%20Components/dxResizable '/Documentation/ApiReference/UI_Components/dxResizable/')
- [ScrollView](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/')
- [Toast](/api-reference/10%20UI%20Components/dxToast '/Documentation/ApiReference/UI_Components/dxToast/')
- [Tooltip](/api-reference/10%20UI%20Components/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/')
- [ValidationGroup](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/')

The following code snippet specifies inline ScrollView content:

    <!-- tab: App.tsx -->
    import { ScrollView } from 'devextreme-react/scroll-view';

    function App() {
        return (
            <ScrollView>
                <div>ScrollView content</div>
            </ScrollView>
        );
    }

[note]

- To specify dynamic or conditionally rendered content, wrap this content in a static element as follows:

        <!-- tab: App.tsx -->
        <Popup ... >
            <div>
                {
                    someCondition && <div> ... </div>
                }
            </div>
        </Popup>

    Note that [Fragment](https://react.dev/reference/react/Fragment) is a dynamic element. Wrap content with tags such as `<div>` or `<span>`.

- React mounts inline content within DevExtreme components immediately at component initialization. This behavior ignores **deferRendering** options in components that do not render content immediately:

    - DropDownBox
    - Popup
    - Popover
    - Toast
    - Tooltip

    This behavior initializes and renders embedded UI components at parent component initialization. To ensure embedded components are initialized and rendered only when the parent component is rendered or opened, define **contentComponent** or **contentRender**.

[/note]