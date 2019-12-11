All operations with widget options are carried out through the scope properties these options are bound to. To bind a widget option to a scope property, use the `bindingOptions` object as shown in the following code.

    <!--HTML--><div ng-controller="Controller">
        <div dx-range-selector="{
            bindingOptions: {
                selectedRange: 'selectedRange'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.selectedRange = {
           startValue: 10,
           endValue: 20
        };
    }

Now, if you change a scope property in code, the widget will catch up the changes. And vice versa, if an end user changes the selected range in the UI, the `selectedRange` scope property will be updated.

[note]The names of scope properties in the `bindingOptions` object should be enclosed in quotes.

If you bind a widget option to a collection in the same manner, the widget uses the [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) watcher to track changes in the collection. This watcher works quickly, but it updates the widget only when an item is added or removed from the collection. To track changes made directly in the items, activate the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) watcher. For example, presume that you have an array assigned to a scope property.

    <!--JavaScript-->function Controller ($scope) {
        $scope.fruitsData = [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ];
    }

To enable a deep tracking of changes in this array, the `bindingOptions` object should look as follows.

    <!--HTML--><div ng-controller="Controller">
        <div dx-chart="{
            bindingOptions: {
                dataSource: {
                    <!-- Enables deep tracking of changes in a collection -->
                    deep: true,
                    <!-- Specifies which scope property to deep-track changes in -->
                    dataPath: 'fruitsData' 
                }
            },
            series: { argumentField: 'fruit', valueField: 'total' }
        }"></div>
    </div>