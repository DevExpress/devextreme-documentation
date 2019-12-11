You can specify an overlay widget content using any of the following ways.

- Insert the required markup into the widget container.

        <!--HTML-->
        <div id="myPopover">
            <p>Popover content</p>
            <div id="hidePopoverButton"></div>
        </div>

    <!---->

        <!--JavaScript-->
        $("#myPopover").dxPopover({
            showTitle: true,
            title: 'My Popover',
            onContentReady: function(){
                $("#hidePopoverButton").dxButton({
                    text: "Hide popover",
                    onClick: function(){
                        $("#myPopover").dxPopover("instance").hide();
                    }
                })
            }
        });

    [note]In the case of the jQuery approach, if an overlay widget contains other widgets, create them within a function handling the **contentReady** event as shown in the example above. Otherwise, inner widgets are not rendered. 

 #####AngularJS Approach#####

        <!--HTML-->
        <div ng-controller="Controller">
            <div dx-popover="{ 
                showTitle: true,
                title: 'My Popover',
                bindingOptions: { 'visible': 'popoverVisible' } 
            }">
                <p>Popover content</p>
                <div dx-button="{ text: 'Hide popover', onClick: hidePopover }}"></div>
            </div>
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopover: {
            visible: popoverVisible,
            showTitle: true,
            title: 'My Popover',
        }">
            <p>Popover content</p>
            <div data-bind="dxButton: { text: 'Hide popover', onClick: hidePopover }}"></div>
        </div>


    #####See Also#####
    - [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
    - [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

- Use the **contentTemplate** option to specify a template or rendering function used to render the widget content.

        <!--HTML-->
        <div id="myPopover"></div>

    <!---->

        <!--JavaScript-->
        $("#myPopover").dxPopover({
            showTitle: true,
            title: 'My Popover',
            contentTemplate: function(contentElement){
                contentElement.append("<p>Popover content</p>");
                var hidePopoverButton = $("<div>");
                contentElement.append(hidePopoverButton);
                hidePopoverButton.dxButton({
                    text: 'Hide popover',
                    onClick: function(){
                        $("#myPopover").dxPopover("instance").hide();
                    }
                })
            }
        });

 #####AngularJS Approach#####

        <!--HTML-->
        <div ng-controller="Controller">
            <div dx-popover="{ bindingOptions: { 'visible': 'popoverVisible' }, contentTemplate: 'popoverContent' }">
                <div data-options="dxTemplate: { name: 'title' }">
                    <h1>My Popover</h1>
                </div>
                <div data-options="dxTemplate: { name: 'popoverContent' }">
                    <p>Popover content</p>
                    <div dx-button="{ text: 'Hide popover', onClick: hidePopover }}"></div>
                </div>
            </div>
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopover: { visible: popoverVisible, contentTemplate: 'popoverContent' }">
            <div data-options="dxTemplate: { name: 'title' }">
                <h1>My Popover</h1>
            </div>
            <div data-options="dxTemplate: { name: 'popoverContent' }">
                <p>Popover content</p>
                <div data-bind="dxButton: { text: 'Hide popover', onClick: hidePopover }}"></div>
            </div>
        </div>

    #####See Also#####
    - [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/')
    - [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

<!---->

- Apply custom CSS styles to widget elements. For this purpose, assign a custom class name to the widget element and use this class name when defining styles for widget elements.

        <!--HTML-->
        <div id="myPopup" class="custom-popup">
            Popup content
        </div>

    <!---->

        <!--JavaScript-->
        $("#myPopover").dxPopup({
            visible: true,
            title: 'My Popup'
        });

    <!---->

        <!--CSS-->
        .custom-popup .dx-popup-title {
            padding: 0px 10px;
        }
        .custom-popup .dx-popup-title .dx-toolbar-label {
            font-size: 12px;
            text-transform: uppercase;
        }
        .custom-popup .dx-popup-content {
            background: lightgray;
        }

 #####AngularJS Approach#####

        <!--HTML-->
        <div ng-controller="Controller">
            <div dx-popup="{ bindingOptions: { visible: 'popupVisible' }, title: 'My Popup' }" class="custom-popup">
                Popup content
            </div>
        </div>

    <!---->

        <!--CSS-->
        .custom-popup .dx-popup-title {
            padding: 0px 10px;
        }
        .custom-popup .dx-popup-title .dx-toolbar-label {
            font-size: 12px;
            text-transform: uppercase;
        }
        .custom-popup .dx-popup-content {
            background: lightgray;
        }

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopup: { visible: popupVisible, title: 'My Popup' }" class="custom-popup">
            Popup content
        </div>

    <!---->

        <!--CSS-->
        .custom-popup .dx-popup-title {
            padding: 0px 10px;
        }
        .custom-popup .dx-popup-title .dx-toolbar-label {
            font-size: 12px;
            text-transform: uppercase;
        }
        .custom-popup .dx-popup-content {
            background: lightgray;
        }
