A control bar is a map element that supplies a user with the capability of navigating a map. This element resides on the left side of the map. The control bar consists of a pan control and a zoom bar, which provide the [panning](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/10%20Panning '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Panning') and [zooming](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/20%20Zooming/10%20Zooming.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Zooming') capabilities to the user.

![DevExtreme ChartJS VectorMap](/images/ChartJS/ControlBar.png)

Control bar settings are specified using fields of the [controlBar](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/controlBar '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/controlBar/') object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		controlBar: {
			// control bar settings are specified here
		}
	};

The following list provides an overview of control bar properties configurable within this object.

* **Visibility**		
The control bar is visible by default, but if you need to hide it, set the [enabled](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/controlBar '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/controlBar/'#enabled) property to **false**.

* **Color**		
You can specify individual colors for the outline and the inner area of the control bar elements using the [borderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/controlBar '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/controlBar/'#borderColor) and [color](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/controlBar '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/controlBar/'#color) properties respectively.