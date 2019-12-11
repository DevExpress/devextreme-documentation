At this point, you know the main scenarios for using your resulting application. You are also aware of the tasks it will solve and the actions that will be available in it. Now, you need to decide what views (screens) are required in the application, how to distribute information between them and how end-users will navigate between the views. For this purpose, you will draw an informational application map. It will include the key views of the application, illustrate what information they present and indicate the navigation to other views.

![Application Map](/images/Common/scheme-Application-Map.png)

While drawing the application map, you may decide to make several views available from any application view. These views are called **root views** in the DevExtreme framework. The other views are not root views - end users can only navigate to them in a specific context. The total number of root views is important in deciding the type of global navigation to use. Here are several examples.

- 1 root view  
	You do not need global navigation. Instead, build a sequence of views where an end user can return to the previous view via the Back button.

- 2-5 root views  
	Use a navigation bar as a global navigation control.

- A big count of root views  
	Use a slide-out menu as a navigation control.

When deciding on the type of the global navigation, take into account a set of **predefined layouts** that come with the framework. When using a predefined layout, a navigation control, together with a toolbar, will be added automatically; only the content within the view should be changed. Here is a list of available layouts.

- Simple Layout
- Navbar Layout
- Slideout Layout
- Pivot Layout (for Windows Phone apps)
- Split Layout (for Windows, iOS and Android tablets)

While root views are navigated using the navigation control, you are required to think about how to navigate to child views (views other than root views). The main point is that an end-user must be able to understand where he/she is located, regardless of where the end-user is located.

You will need to think about the functionality to be included in your app. Decide what actions you need on each view, including the contextual actions that are available when a particular view element is selected. Prioritize the view actions and make sure that system commands are not duplicated.

**Read**:

- [Built-in Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/')

**Check**:

- Whatever navigation control you chose, do not use it together with another navigation control in your app.
- Use the guidelines provided for each platform if you are going to make a native-looking app.
- Minimize the number of [modal views](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') in your app. Use them only when it is absolutely necessary to get an end user's attention ([read more](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1)).