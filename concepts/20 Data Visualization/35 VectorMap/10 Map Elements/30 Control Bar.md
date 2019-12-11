A control bar is a map element that supplies a user with the capability of navigating a map. This element resides on the left side of the map. The control bar consists of a pan control and a zoom bar, which provide the [panning](/concepts/20%20Data%20Visualization/35%20VectorMap/40%20End-User%20Interaction/10%20Panning '/Documentation/Guide/Data_Visualization/VectorMap/End-User_Interaction/#Panning') and [zooming](/concepts/20%20Data%20Visualization/35%20VectorMap/40%20End-User%20Interaction/20%20Zooming/10%20Zooming.md '/Documentation/Guide/Data_Visualization/VectorMap/End-User_Interaction/#Zooming') capabilities to the user.

![DevExtreme ChartJS VectorMap](/images/ChartJS/ControlBar.png)

Control bar settings are specified using fields of the [controlBar](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/controlBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/') object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		controlBar: {
			// control bar settings are specified here
		}
	};

The following list provides an overview of control bar properties configurable within this object.

* **Visibility**		
The control bar is visible by default, but if you need to hide it, set the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/controlBar/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#enabled') option to *false*.

* **Color**		
You can specify individual colors for the outline and the inner area of the control bar elements using the [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/controlBar/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#borderColor') and [color](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/controlBar/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/controlBar/#color') options respectively.