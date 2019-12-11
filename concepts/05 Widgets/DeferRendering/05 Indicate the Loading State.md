While the content of the **DeferRendering** widget is getting ready, the widget can display a loading indicator. It is disabled by default, so assign *true* to the [showLoadIndicator](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/showLoadIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#showLoadIndicator') if you need to enable it.

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady
        }">
            <!-- Widget content -->
        </div>
    </div>

If you want to display custom content instead of the loading indicator, use the following CSS classes.

- `dx-visible-while-pending-rendering`      
All elements with this class will be displayed while the main content is getting ready.

- `dx-invisible-while-pending-rendering`    
All elements with this class are the main content.

<!---->

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady
        }">
            <div class="dx-visible-while-pending-rendering">
                <!-- Displayed while the main content is getting ready -->
            </div>
            <div class="dx-invisible-while-pending-rendering">
                <!-- The main content -->
            </div>
        </div>
    </div>

#####See Also#####
- [DeferRendering - Animate the Content Appearance](/concepts/05%20Widgets/DeferRendering/10%20Animate%20the%20Content%20Appearance.md '/Documentation/Guide/Widgets/DeferRendering/Animate_the_Content_Appearance/')
- [DeferRendering API Reference](/api-reference/10%20UI%20Widgets/dxDeferRendering '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/')

[tags]deferRendering, defer rendering, loading indicator, loading state