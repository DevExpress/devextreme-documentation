When defining a view, specify the layout placeholder to which the view's markup will be rendered. To do this, wrap the required markup of the view by a **div** element, denote this element as the [dxContent](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContent '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/') component and pass the name of the required placeholder as the [targetPlaceholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContent/1%20Configuration/targetPlaceholder.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/Configuration/#targetPlaceholder') option of this component. 

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}">
		<!-- Layout markup goes here -->
		<div data-options="dxContentPlaceholder: {name: 'content'}"></div>
	</div>

	<div data-options="dxView: { name: 'home', title: 'Home' }">
		<div data-options="dxContent: {  targetPlaceholder: 'content'}">
			<h1 data-bind="text: message"></h1>
		</div>
	</div>

When you require different parts of a view to be displayed in different placeholders, wrap each part by the **dxContent** div and specify the required placeholder for it.

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}">
		<div data-options="dxContentPlaceholder: {name: 'content1'}"></div>
		<!-- Layout markup goes here -->
		<div data-options="dxContentPlaceholder: {name: 'content2'}"></div>
	</div>

	<div data-options="dxView: { name: 'home', title: 'Home' }">
		<div data-options="dxContent: {  targetPlaceholder: 'content1'}">
			<!-- View markup goes here -->
		</div>
		<div data-options="dxContent: {  targetPlaceholder: 'content2'}">
			<!-- View markup goes here -->
		</div>
	</div>

[note]If you wrap a view's content by a dxContent element, only the markup inside of the dxContent element(s) will be rendered to the resulting view. Read the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic below for details.

The following image illustrates how the content of a dxView markup component is merged to a placeholder of the dxLayout markup component to prepare a final markup for the view.

![View and Layout Merging](/images/PhoneJS/DefineLayout1.png)

In some cases, you may be required to add a placeholder to a dxView component and define the content for this placeholder within a dxLayout component. The resulting view markup will be generated in the same manner - by merging the dxView and dxLayout markups.

![View and Layout Merging](/images/PhoneJS/DefineLayout2.png)

For instance, the "Navbar" and "Slideout" [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') include the "dxContent: {  targetPlaceholder: 'view-footer')" component in the "iOS" version. To render the markup of this component, the view that uses one of these layouts must include the "dxContentPlaceholder: { name: 'view-footer')" component in its markup.
