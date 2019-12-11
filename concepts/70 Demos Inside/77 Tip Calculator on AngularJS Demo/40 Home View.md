<article data-show="/Demos/TipCalculatorAngular/">
Open the *home.html* file from the **partials** folder. It contains the HTML markup of the "home" view. In this markup, only DevExtreme widgets are used. Each widget comes with styles for different platforms and devices. To learn how to use DevExtreme widgets in AngularJS applications in detail, refer to the [Widget Basics](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Widget_Basics_-_AngularJS) article.

The "home" view contains a toolbar at the top. There is the "Tip Calculator" text in the center of the toolbar.

    <!--HTML--><div dx-toolbar="{ items: [{ location: 'center', text: 'Tip Calculator' }] }"></div>
    
The toolbar is presented by the [Toolbar](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/') widget.

To input the total sum from the check, a number box is added to the view.

    <!--HTML--><div class="dx-fieldset top-fieldset">
        <div class="dx-field">
            <div class="dx-field-label">Bill Total:</div>
            <div class="dx-field-value">
                <div id="billTotalInput" dx-number-box="{ placeholder: 'Type here...', valueChangeEvent: 'keyup', min: 0, step: 0.01 }" ng-model="vm.billTotal"></div>
            </div>
        </div>
    </div>

The number box is the [NumberBox](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/') widget. The value that is inputted by an end user is assigned to the widget's **value** configuration option. This option is bound to the **billTotal** field of the controller's scope.

The **NumberBox** widget is added to a field set that is defined by the predefined stylesheets ([dx-fieldset](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-fieldset.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-fieldset'), [dx-field](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field'), [dx-field-label](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-label.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-label') and [dx-field-value](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-field-value.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-field-value')) supplied by DevExtreme. The **top-fieldset** class is defined specially for this application (see the *app.css* file).

To set the tip percentage and the number of persons by which to divide the payment, sliders are added.

    <!--HTML--><div class="dx-fieldset">
        <div class="dx-field slider-container">
            <div class="slider-title">Tip, %</div>
            <div class="slider-body">
                <div dx-slider="{ min: 0, max: 25, step: 1, activeStateEnabled: true }" ng-model="vm.tipPercent"></div>
            </div>
            <div class="slider-value">{{vm.tipPercent}} %</div>
        </div>
        <div class="dx-field slider-container">
            <div class="slider-title">Split:</div>
            <div class="slider-body">
                <div dx-slider="{ min: 1, step: 1, max: 10, activeStateEnabled: true }" ng-model="vm.splitNum"></div>
            </div>
            <div class="slider-value">{{vm.splitNum}}</div>
        </div>
    </div>
  
The sliders are the [Slider](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/') widgets. The value that is set by end users is assigned to the widget's **value** configuration option. This option is bound to the the **tipPercent** and **splitNum** fields of the controller's scope. 

To show the value that is set via a slider, a div element is associated with the scope's field.

The **slider-container**, **slider-title**, **slider-body** and **slider-value** style classes are defined specially for this application (see the *app.css* file).

To calculate the results using the "round up" or "round down" modes, two buttons are added.

    <!--HTML--><div class="round-buttons">
        <div dx-button="{ text: 'Round Down', onClick: vm.roundDown }"></div>
        <div dx-button="{ text: 'Round Up', onClick: vm.roundUp }"></div>
    </div>

The buttons are represented by [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widgets. The function that must be executed when clicking a button is assigned to the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') option of the widget's configuration object.

The **round-buttons** style class is defined specially for this application (see the *app.css* file).

To present the results of calculation, a field set is added.

    <!--HTML--><div id="results" class="dx-fieldset">
        <div class="dx-field">
            <span class="dx-field-label">Total to pay</span>
            <span class="dx-field-value" style="font-weight: bold">{{vm.totalToPay() | currency}}</span>
        </div>
        <div class="dx-field">
            <span class="dx-field-label">Total per person</span>
            <span class="dx-field-value">{{vm.totalPerPerson() | currency}}</span>
        </div>
        <div class="dx-field">
            <span class="dx-field-label">Total tip</span>
            <span class="dx-field-value">{{vm.totalTip() | currency}}</span>
        </div>
        <div class="dx-field">
            <span class="dx-field-label">Tip per person</span>
            <span class="dx-field-value">{{vm.tipPerPerson() | currency}}</span>
        </div>
    </div>

To display the results, span elements are associated with the scope's fields and the "currency" format is applied.

</article>