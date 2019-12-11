---
default: null
type: String
---
---
##### shortDescription
Specifies the title of the current view.

---
Use this option to set a static title for the view.

    <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home' } ">
        ...
    </div>

If you need to change the view's title dynamically, add an observable **title** field to the view's ViewModel, as shown below.

    <!--HTML--><div data-options="dxView : { name: 'home' } ">
        ...
    </div>


    <!--JavaScript-->MyApp.home = function(params) {
        var viewModel = {
            title: ko.observable('My new title')
        };
        return viewModel;
    };

Internally, a ViewModel is populated by the fields that correspond to the options of the respective dxView component. However, the fields that are set explicitly in the ViewModel override the corresponding fields created from the options implicitly. So, the statically set title is available using the **title** field of the ViewModel, if you don't add the **title** field explicitly.

[note]Check that the layout in which a view is displayed contains a UI element that is bound to the **title** field of the view's ViewModel. The following code snippet demonstrates how a toolbar's text is bound to the **title** field of the ViewModel.

        <div class="layout-header" data-options="dxContentPlaceholder : { name: 'header' } " >
            <div
                data-bind="dxToolbar: { dataSource: [ { text: title, location: 'center' } ] }"
                data-options="dxCommandContainer : { id: 'ios-header-toolbar' } " >
            </div>
        </div>

In this instance, the toolbar's text will be set to the value of the statically declared title or of the dynamically set **title** field of the ViewModel.

If the field to which the layout's element is bound has another name, change the corresponding field name in your ViewModel or the option name in the dxView definition. If a layout does not include a UI element that represents a view title, neither the **title** field in your ViewModel nor the **title** option in the dxView definition will have an effect.