The simplest way of providing data is using an array of plain objects. Each object in this array specifies series values for a particular argument. **PieChart** and **Sparkline** can contain only one series. Therefore, providing data for these widgets requires only one series value to be specified for each argument. The following code snippet shows how to declare an array to be used as a data source for **PieChart** and **Sparkline**.

	<!--JavaScript-->var commonDataSource = [
		{ year: 2005, value: 2450 },
		{ year: 2006, value: 2156 },
		// ...
		{ year: 2014, value: 3650 }
	];

This array can be used as a data source in **Chart** as well, but in this case, **Chart** will display only one series. If you wish to display multiple series in **Chart**, specify several values for one argument. For example, the array in the following code snippet provides data for three series named *'aluminum'*, *'nickel'* and *'copper'*.

	<!--JavaScript-->var chartDataSource = [
		{ year: 2005, aluminum: 2450, nickel: 1800, copper: 2230 },
		{ year: 2006, aluminum: 2156, nickel: 2105, copper: 1990 },
		// ...
		{ year: 2014, aluminum: 3650, nickel: 3254, copper: 4052 }
	];

In **Chart**, the majority of [series types](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/') requires one value for one argument to define one series point. Data sources for such series are represented above. However, there are series types that require two or more values for one argument to define one point. For example, a [range area](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types/Range%20Area.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Range_Area') or [range bar](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types/Range%20Bar.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Range_Bar') series needs two values, while a [candle stick](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types/Candle%20Stick.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Candle_Stick') or [stock](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types/Stock.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Stock') series needs four values for one argument. The code snippet below shows how to implement a data source for two series of the range bar type.

	<!--JavaScript-->var rangeDataSource = [
		{ year: 2005, aluminumMin: 2450, aluminumMax: 2750, copperMin: 2230, copperMax: 2600 },
		{ year: 2006, aluminumMin: 2156, aluminumMax: 2300, copperMin: 1990, copperMax: 2120 },
		// ...
		{ year: 2014, aluminumMin: 3650, aluminumMax: 3850, copperMin: 3500, copperMax: 4300 }
	];

After you have implemented a data source, bind it to your widget. To learn how to do this, refer to the [Bind Data](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/#Bind_Data') topic.
