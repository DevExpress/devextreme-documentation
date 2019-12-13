All operations with widget options are carried out through the scope properties these options are bound to. To bind a widget option to a scope property, use the **bindingOptions** object as shown in the following code. Note that the scope property name in this object is enclosed in quotes.

    <!--HTML--><div ng-controller="Controller">
        <div dx-check-box="{
            bindingOptions: {
                value: 'checkBoxValue'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.checkBoxValue = true;
    }

Now, if you change the `checkBoxValue` scope property in code, the [CheckBox](/concepts/05%20Widgets/CheckBox/00%20Overview.md '/Documentation/Guide/Widgets/CheckBox/Overview/') will receive the changes. And vice versa, if an end user selects the **CheckBox** in the UI, the `checkBoxValue` scope property will be updated.

If you bind a widget to a collection, the widget gets updated only when an object is added to or removed from this collection. To make the widget listen for changes even in the _fields_ of any object in the collection, configure the **bindingOptions** object as follows.

    <!--HTML--><div ng-controller="Controller">
        <div dx-chart="{
            bindingOptions: {
                dataSource: {
                    <!-- Enables deep tracking of changes -->
                    deep: true,
                    <!-- Specifies which scope property to track changes in -->
                    dataPath: 'fruitsData'
                }
            },
            series: { argumentField: 'fruit', valueField: 'total' }
        }"></div>
    </div>
    
<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.fruitsData = [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ];
    }

The code above forces the widget to use the <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch" target="_blank">$watch</a> listener instead of the default <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection" target="_blank">$watchCollection</a> listener. Note that the use of the **$watch** listener may impact the widget's peformance.

[note]We strongly do _not_ recommend binding a widget to the [DevExtreme DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') using the **bindingOptions** object. The **DataSource** contains internal circular links that get updated during its lifetime. Tracking changes in them by means of the AngularJS Framework may lead to unexpected results. Instead of using the **bindingOptions** object, simply assign the scope property with the **DataSource** to the **dataSource** option of the widget. If you nevertheless decided to use the **bindingOptions** object, set its **deep** field to **false** explicitly.


#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart').[Configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/')
- [Create and Configure a Widget](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget')

[tags]basics, angularjs, change options, get, set, runtime, binding options, deep tracking, watch, watchCollection, two-way binding