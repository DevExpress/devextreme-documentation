All operations with widget options are carried out through the scope properties these options are bound to. To bind a widget option to a scope property, use the `bindingOptions` object as shown in the following code.

    <!--HTML--><div ng-controller="Controller">
        <div dx-menu="{
            . . .
            bindingOptions: {
                disabled: 'disabledValue'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->function Controller ($scope) {
        . . .
        $scope.disabledValue = false;
    }

Now, if you change a scope property in code, the widget will catch up the changes. And vice versa, if an end user changes the selected range in the UI, the `disabledValue` scope property will be updated.

[note]The names of scope properties in the `bindingOptions` object should be enclosed in quotes.

If you bind a widget option to a collection in the same manner, the widget uses the [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) watcher to track changes in the collection. This watcher works quickly, but it updates the widget only when an item is added or removed from the collection. To track changes made directly in the items, activate the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) watcher. For example, assume that you have an array assigned to a scope property.

    <!--JavaScript-->function Controller($scope) {
        $scope.mapMarkers = [
            {
                location: "40.749825, -73.987963",
                tooltip: "New York"
            },
            {
                location: "45.478502, 9.158304",
                tooltip: "Milano"
            },
            {
                location: "-3.007118, 37.138956",
                tooltip: "Kilimanjaro"
            }
        ];
    }

To enable deep tracking of changes in this array, the `bindingOptions` object should look as follows.

    <!--HTML--><div ng-controller="Controller">
        <div dx-map="{
            bindingOptions: {
                markers: {
                    <!-- Enables deep tracking of changes in a collection -->
                    deep: true,
                    <!-- Specifies which scope property to deep-track changes in -->
                    dataPath: 'mapMarkers'
                }
            }
        }"></div>
    </div>

<a href="http://www.youtube.com/watch?v=iIZj6hOFg0o&index=42&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>