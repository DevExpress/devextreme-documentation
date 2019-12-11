---
module: ui/validation_summary
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A widget for displaying the result of checking [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') for editors.

---
This widget has a collection of items that present the validation errors that currently exist in a validation group or the ViewModel to which the widget is related.

![dxValidationSummary Widget](/images/Common/dxValidationSummary.png)

You can create the **ValidationSummary** widget using one of the following approaches.

- **jQuery**  
	Use the `dxValidationSummary` jQuery plug-in.

		<!--HTML--><div id="textBox1"></div>
		<div id="textBox2"></div>
		<div id="summary"></div>
		<div id="button"></div>


	<!--...-->

		<!--JavaScript-->var validationGroup = "sampleGroup";
		 $("#textBox1").dxTextBox({})
			.dxValidator({
                validationRules: []
            });
        $("#textBox2").dxTextBox({})
			.dxValidator({
				validationRules: []
			});
        $("#summary").dxValidationSummary({	});
        $("#button").dxButton({});


- **Knockout**  
	Add a div element and apply the `dxValidationSummary` binding to this element.

		<!--HTML-->
		<div data-bind="dxTextBox: { },
			dxValidator: { validationRules: [] }">  
		</div>
		<div data-bind="dxTextBox: { },
			dxValidator: { validationRules: [] }"> 
		</div>  
		<div data-bind="dxValidationSummary: { }"></div>
		<div data-bind="dxButton: { }"></div>

- **AngularJS**  
	Add a div element and apply the `dx-validation-summary` directive to this element.

		<!--HTML--><div ng-controller="demoController">
			<div dx-text-box="{  }"
				dx-validator="{ validationRules:  }">  
			</div>
			<div dx-text-box="{  }"
				dx-validator="{ validationRules:  }">  
			</div>
			<div dx-validation-summary="{  }"></div>
			<div dx-button="{ }"></div>
		</div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The summary items are displayed using the default item template that is based on the **message** field of the broken validation rule. However, you can use a custom item template. 

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

[note]The currently existing validation errors are not only the errors that are discovered during the current validation, but also the validation errors that are discovered during the earlier validations if the not-valid values are not changed since then.

To learn more on how to create the **ValidationSummary** widget and associate it with the required validation group or ViewModel, refer to the [Display Validation Errors](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation/30%20Display%20Validation%20Errors.md '/Documentation/Guide/UI_Widgets/Common/Validation/#Display_Validation_Errors') and [Validate View Model](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_View_Model) topics.

#####See Also#####
- [Display Validation Errors](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation/30%20Display%20Validation%20Errors.md '/Documentation/Guide/UI_Widgets/Common/Validation/#Display_Validation_Errors')
- [Display Validation Errors - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach/30%20Display%20Validation%20Errors.md '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Display_Validation_Errors')
- [Validate View Model](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_View_Model)
- [Validate View Model - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach/50%20Validate%20View%20Model.md '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Validate_View_Model')