[note]Use the technique described here only if your data source is a [JavaScript array](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/PieChart/Data_Binding/Simple_Array/Array_Only/'). Otherwise, update **PieChart** data [through the DataSource instance](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/26%20Update%20Data/01%20DevExtreme%20DataSource.md '/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/#DevExtreme_DataSource').

Declare two-way binding between the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#dataSource') option and the [scope](https://docs.angularjs.org/guide/scope) property that contains an array. For this, configure the **bindingOptions** object of the **PieChart** as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-pie-chart="{
            bindingOptions: {
                dataSource: 'fruits'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.fruits = [
                { fruit: 'Apples', count: 10 },
                { fruit: 'Oranges', count: 12 },
                { fruit: 'Lemons', count: 15 }
            ];
        });

Now, whenever an item is added or removed from the `fruits` array, the **PieChart** will be updated accordingly. If you need to track changes in objects, configure the **bindingOptions** object as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-pie-chart="{
            bindingOptions: {
                dataSource: {
                    dataPath: 'fruits',
                    deep: true
                }
            }
        }"></div>
    </div>

In this case, the **PieChart** will use the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) listener instead of the default [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) listener. Note that the use of the **$watch** listener may impact the **PieChart**'s peformance.

#####See Also#####
- [Change Options - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/')
