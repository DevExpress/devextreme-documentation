---
module: ui/validation_group
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The widget that is used in the Knockout and AngularJS approaches to combine the editors to be validated.

---
Use the **ValidationGroup** widget to combine the editors to be validated, the **Button** widget to validate these editors on button click and the **ValidationSummary** widget to display validation errors occurred in these editors.

[note]Nested validation groups are not supported.

You can create the **ValidationGroup** widget using one of the following approaches.

- **jQuery**  
	Use the **validationGroup** option in the widgets in which you need to specify a validation group.

		<!--HTML--><div id="textBox1"></div>
		<div id="textBox2"></div>
		<div id="summary"></div>
		<div id="button"></div>


	<!--...-->

		<!--JavaScript-->var validationGroup = "sampleGroup";
		 $("#textBox1").dxTextBox({})
			.dxValidator({
                validationRules: [],
                validationGroup: validationGroup
            });
        $("#textBox2").dxTextBox({})
			.dxValidator({
				validationRules: [],
				validationGroup: validationGroup
			});
        $("#summary").dxValidationSummary({
			validationGroup: validationGroup
		});
        $("#button").dxButton({
            validationGroup: validationGroup
			//...
        });


- **Knockout**  
	Add a div element and apply the `dxValidationGroup` binding to this element.

		<!--HTML--><div data-bind="dxValidationGroup : {}" >
			<div data-bind="dxTextBox: { },
				dxValidator: { validationRules: [] }">  
			</div>
			<div data-bind="dxTextBox: { },
				dxValidator: { validationRules: [] }"> 
			</div>  
			<div data-bind="dxValidationSummary: { }"></div>
			<div data-bind="dxButton: { }"></div>
		</div>

- **AngularJS**  
	Add a div element and apply the `dx-validation-group` directive to this element.

		<!--HTML--><div dx-validation-group="{}" ng-controller="demoController">
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

#####See Also#####
- [Validation Engine](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation '/Documentation/Guide/UI_Widgets/Common/Validation/')
- [Validation Engine - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/')

You can use the [DevExpress.validationEngine.validateGroup(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/validateGroup(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup') method to validate a particular validation group by passing its instance as a parameter.

	<!--JavaScript-->DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

In addition, you can access a validation group's configuration using the [DevExpress.validationEngine.getGroupConfig(group)](/api-reference/50%20Common/utils/validationEngine/3%20Methods/getGroupConfig(group).md '/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#getGroupConfiggroup') method. The returned configuration exposes the **validators** included to the group, the **validate()** method to validate the editors that are associated with the validators and the **validated** event that occurs after the group is validated.