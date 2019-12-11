---
type: Boolean
---
---
##### shortDescription
Indicates whether the view should be displayed in a modal mode.

---
To display a modal view in a popup window, add the [Popup Layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/45%20Popup%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Popup_Layout') to your application. This layout uses the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget to display a view in a popup window. By default the **SimpleLayoutController** controller is used to manage the popup window content. So, when defining a modal view, find out which [content placeholders](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/4%20Insert%20View%20into%20Layout.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout') and [command containers](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views') are available in the [Simple Layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/4%20Simple%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout').

	<!--HTML--><div data-options="dxView : { name: 'login', title: 'Log in', modal: true } " >
		<div data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
        </div>
	</div>

If a view should be modal in specific scenarios only, do not set the **modal** option for it. Instead, use the **modal** parameter when navigating to the view using the [navigate()](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method or the **modal** option when using a [command](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/').

Pay attention to the recommendations given for using modal views in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. If it is better to display an "alert"/"confirm" dialog instead of a modal view, use an appropriate method of the [DevExpress.ui.dialog](/api-reference/50%20Common/utils/ui/dialog '/Documentation/ApiReference/Common/Utils/ui/dialog/') object.