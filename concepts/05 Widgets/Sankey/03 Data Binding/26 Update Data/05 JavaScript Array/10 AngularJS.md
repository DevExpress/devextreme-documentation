Declare two-way binding between the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource') option and the <a href="https://docs.angularjs.org/guide/scope" target="_blank">scope</a> property that contains an array. To do this, configure the **bindingOptions** object in the **Sankey** as follows:

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-sankey="{
            bindingOptions: {
                dataSource: 'sankeyData'
            }
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function($scope) {
            $scope.sankeyData = [
                { source: "Brazil", target: "Spain", weight: 4 },
                { source: "Brazil", target: "Portugal", weight: 5 },
                { source: "Brazil", target: "England", weight: 2 },
                { source: "Canada", target: "Portugal", weight: 2 },
                { source: "Canada", target: "England", weight: 1 },
                { source: "Mexico", target: "Portugal", weight: 9 },
                { source: "Mexico", target: "Spain", weight: 5 }
            ];
        });

Now, whenever an item is added or removed from the `sankeyData` array, the **Sankey** is updated accordingly. If you need to track changes in objects, configure the **bindingOptions** object as follows:

    <!--HTML--><div ng-controller="DemoController">
        <div dx-sankey="{
            bindingOptions: {
                dataSource: {
                    dataPath: 'sankeyData',
                    deep: true
                }
            }
        }"></div>
    </div>

In this case, the **Sankey** uses the <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch" target="_blank">$watch</a> listener instead of the default <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection" target="_blank">$watchCollection</a> listener. Note that this can impact the **Sankey**'s peformance.

#####See Also#####
- [Change Options - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/')
