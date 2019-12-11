One of the frequently encountered tasks when working with an overlay widget is controlling widget visibility.

All widgets include the **show()** and **hide()** methods, which show and hide the widget respectively. To access a widget method, obtain the widget instance first.

    <!--JavaScript-->
    // Get the widget instance
    ...
    showPopup = function() {
        popupInstance.show();
    }
    hidePopup = function() {
        popupInstance.hide();
    }

You can also change widget visibility using the **toggle(showing)** method, which displays or hides the widget depending on the value of the **showing** parameter.

    <!--JavaScript-->
    // Get the widget instance
    ...
    showPopup = function() {
        popupInstance.toggle(true);
    }
    hidePopup = function() {
        popupInstance.toggle(false);
    }

Another way is to provide two-way binding for the **visible** option to show or hide the widget depending on the variable value. To show or hide the widget, assign *true* or *false* to the appropriate field respectively.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.overlayVisible = false;
    }

<!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-overlay="{ bindingOptions: { 'visible': 'overlayVisible' }}"></div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div id="popupContainer" data-bind="dxPopup: {
         visible: popupVisible
    }"></div>

<!---->

    <!--JavaScript-->
    var popupVisible = ko.observable(false);
    var showPopup = function() {
        popupVisible(true);
    }
    var hidePopup = function() {
        popupVisible(false);
    }


####Hide the widget on outside click####

To hide the window when an end-user clicks outside of it, set the **closeOnOutsideClick** option to *true*.

    <!--JavaScript-->
    var overlayOptions = {
        closeOnOutsideClick: true
    }

####Hide The Widget Using The Back Button####

An end-user can also hide the widget using the Back hardware button. To enable this feature, assign *true* to the **closeOnBackButton** option.

    <!--JavaScript-->
    var overlayOptions = {
        closeOnBackButton: true
    }