You need two **Stacked Bar** series for the bi-directional bar chart. The following code declares and binds them to the data source from the previous topic:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                type: "stackedbar",
                argumentField: "age"
            },
            series: [{
                valueField: "male",
                name: "Male"
            }, {
                valueField: "female",
                name: "Female"
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings
            type="stackedbar"
            argumentField="age">
        </dxo-common-series-settings>
        <dxi-series valueField="male" name="Male"></dxi-series>
        <dxi-series valueField="female" name="Female"></dxi-series>
    </dx-chart>

---

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
