To handle a click on a map area, implement a callback function and assign it to the **onClick** property. Inside the function, check whether a [layer element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') was clicked and whether the [layer](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/2%20Fields/layer.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Fields/#layer') [type](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer/2%20Fields/type.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer/Fields/#type') of the element is 'area'. When implementing this callback function, use the object passed to it as the parameter. Fields of this object are described in the [onClick](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/#onClick') property description. Fields and methods of this object are documented in the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') class description.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		onClick: function (e) {
			var clickedElement = e.target;
			if (clickedElement != null && clickedElement.layer.type == "area") {
				// specify required actions here
			}
		}
	};

Frequently, it is required that you select an area on a click. Learn how to implement this from the [Implement Selection](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/50%20Selection/20%20Implement%20Selection.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Selection/Implement_Selection') topic.