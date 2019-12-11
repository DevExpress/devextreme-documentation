<article data-show="/Demos/TipCalculator/">
Open the [home.html](https://github.com/DevExpress/DevExtreme-14.2-TipCalculator-Knockout/blob/master/views/home.dxview) file from the **views** folder. It contains the HTML markup of the "home" view. This markup, together with the CSS styles used in it, form a **View** - the view's visual representation according to the MVVM pattern. Below you will see how a View is defined and bound to a ViewModel.

To indicate this markup as a View, use the **data-options** attribute set to *dxView*.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">
            <!-- View contents does here-->
        </div>
    </div>

A name for the View is specified using the **name** option of the markup configuration object.

Generally, an application's screen does not only include the view's markup. There can be a common markup used on all (multiple) screens. This markup is defined in a layout. In addition, the layout has a placeholder for a view. When displaying a screen, the view that is denoted in the current URL is inserted into the layout's placeholder. As you can see in the code above, the "home" View is inserted into the "content" placeholder. To learn more about views and layouts, and how to define and specify them, refer to the [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/') article.

The "home" view contains a toolbar at the top. Make a note of the "Tip Calculator" text in the center of the toolbar.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">
            <div data-bind="dxToolbar: { items: [{ align: 'center', text: 'Tip Calculator' }] }"></div>
            <!-- ... -->
        </div>
    </div>

The toolbar is a [Toolbar](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/') widget. This widget, along with all widgets in this view, is supplied with DevExtreme. Each widget comes with styles for different platforms and devices. To learn more about widgets, refer to the [UI widgets](/Documentation/Guide/#uiwidgets) article.

To input the total sum from the check, a number box is added to the view.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">            
            <!-- ... -->
            <div class="dx-fieldset top-fieldset">            
                <div class="dx-field">
                    <div class="dx-field-label">Bill Total:</div>
                    <div id="billTotalInput" data-bind="dxNumberBox: { value: billTotal, placeholder: 'Type here...', valueChangeEvent: 'keyup', min: 0, step: 0.01 }"></div>
                </div>
            </div>
        </div>
    </div>

The number box is a [NumberBox](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/') widget. The value that is input by an end user is assigned to the widget's **value** configuration option. This option is bound to the **billTotal** field of the view's ViewModel.

The **NumberBox** widget is added to a field set that is defined by the predefined stylesheets (**dx-fieldset**, **dx-field**, **dx-field-label** and **dx-field-value**) supplied by DevExtreme. The **top-fieldset** class is defined specifically for this application (see the *index.css* file).

To set the tip percentage and the number of persons by which to divide the payment, sliders are added.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">            
            <!-- ... -->
            <div class="dx-fieldset">
                <div class="dx-field slider-container">
                    <div class="slider-title">Tip, %</div>    
                    <div class="slider-body">                
                        <div data-bind="dxSlider: { min: 0, max: 25, step: 1, activeStateEnabled: true, value: tipPercent }"></div>
                    </div>
                    <div class="slider-value" data-bind="text: Globalize.formatNumber(0.01 * tipPercent(), {style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 0})"></div>
                </div>
                <div class="dx-field slider-container">
                    <div class="slider-title">Split:</div>    
                    <div class="slider-body">                
                        <div data-bind="dxSlider: { min: 1, step: 1, max: 10, activeStateEnabled: true, value: splitNum }"></div>
                    </div>
                    <div class="slider-value" data-bind="text: splitNum"></div>
                </div>
            </div>          
        </div>
    </div>
  
The sliders are [Slider](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/') widgets. The value that is set by end users is assigned to the widget's **value** configuration option. This option is bound to the ViewModel's fields (the **tipPercent** and **splitNum** fields). 

To show the value that is set via a slider, a div element is associated with the ViewModel's field using Knockout [text binding](https://knockoutjs.com/documentation/text-binding.html).

The **slider-container**, **slider-title**, **slider-body** and **slider-value** style classes are defined specifically for this application (see the *index.css* file).

To calculate the results using the "round up" or "round down" modes, two buttons are added.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">            
            <!-- ... -->
            <div class="round-buttons">
                <div data-bind="dxButton: { text: 'Round Down', onClick: roundDown }"></div>
                <div data-bind="dxButton: { text: 'Round Up', onClick: roundUp }"></div>
            </div>            
        </div>
    </div>

The buttons are represented by the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widgets. The function that must be executed when clicking a button is assigned to the **onClick** option of the widget's configuration object.

The **round-buttons** style class is defined specifically for this application (see the *index.css* file).

To present the results of calculation, a field set is added.

    <!--HTML--><div data-options="dxView : { name: 'home' }">
        <div data-options="dxContent : { targetPlaceholder: 'content' }">            
            <!-- ... -->
            <div id="results" class="dx-fieldset">            
                <div class="dx-field">
                    <span class="dx-field-label">Total to pay</span>
                    <span class="dx-field-value-static" style="font-weight: bold" data-bind="text: Globalize.formatCurrency(totalToPay(), 'USD')"></span>
                </div>
                <div class="dx-field">
                    <span class="dx-field-label">Total per person</span>
                    <span class="dx-field-value-static" data-bind="text: Globalize.formatCurrency(totalPerPerson(), 'USD')"></span>
                </div>
                <div class="dx-field">
                    <span class="dx-field-label">Total tip</span>
                    <span class="dx-field-value-static" data-bind="text: Globalize.formatCurrency(totalTip(), 'USD')"></span>
                </div>
                <div class="dx-field">
                    <span class="dx-field-label">Tip per person</span>
                    <span class="dx-field-value-static" data-bind="text: Globalize.formatCurrency(tipPerPerson(), 'USD')"></span>
                </div>
            </div>
        </div>
    </div>

To display the results, span elements are associated with the ViewModel's fields using Knockout [text binding](https://knockoutjs.com/documentation/text-binding.html). To apply a currency format for the results, the **formatCurrency** function from the [globalize](https://github.com/jquery/globalize/releases) library is used.

</article>