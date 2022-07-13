---
id: TransitionExecutor.leave(elements, animation)
---
---
##### shortDescription
Registers a set of elements that should be animated as "leaving" using the specified animation configuration.

##### param(elements): Object
The elements to be animated.

##### param(animation): AnimationConfig | String
The animation configuration or the name of an animation from the [animationPresets](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets') repository.

##### field(elements.dxAccordion): function()
<!-- Description goes here -->

##### field(elements.dxActionSheet): function()
<!-- Description goes here -->

##### field(elements.dxAutocomplete): function()
<!-- Description goes here -->

##### field(elements.dxBarGauge): function()
<!-- Description goes here -->

##### field(elements.dxBox): function()
<!-- Description goes here -->

##### field(elements.dxBullet): function()
<!-- Description goes here -->

##### field(elements.dxButton): function()
<!-- Description goes here -->

##### field(elements.dxButtonGroup): function()
<!-- Description goes here -->

##### field(elements.dxCalendar): function()
<!-- Description goes here -->

##### field(elements.dxChart): function()
<!-- Description goes here -->

##### field(elements.dxCheckBox): function()
<!-- Description goes here -->

##### field(elements.dxCircularGauge): function()
<!-- Description goes here -->

##### field(elements.dxColorBox): function()
<!-- Description goes here -->

##### field(elements.dxContextMenu): function()
<!-- Description goes here -->

##### field(elements.dxDataGrid): function()
<!-- Description goes here -->

##### field(elements.dxDateBox): function()
<!-- Description goes here -->

##### field(elements.dxDeferRendering): function()
<!-- Description goes here -->

##### field(elements.dxDiagram): function()
<!-- Description goes here -->

##### field(elements.dxDraggable): function()
<!-- Description goes here -->

##### field(elements.dxDrawer): function()
<!-- Description goes here -->

##### field(elements.dxDropDownBox): function()
<!-- Description goes here -->

##### field(elements.dxDropDownButton): function()
<!-- Description goes here -->

##### field(elements.dxFileManager): function()
<!-- Description goes here -->

##### field(elements.dxFileUploader): function()
<!-- Description goes here -->

##### field(elements.dxFilterBuilder): function()
<!-- Description goes here -->

##### field(elements.dxForm): function()
<!-- Description goes here -->

##### field(elements.dxFunnel): function()
<!-- Description goes here -->

##### field(elements.dxGallery): function()
<!-- Description goes here -->

##### field(elements.dxGantt): function()
<!-- Description goes here -->

##### field(elements.dxHtmlEditor): function()
<!-- Description goes here -->

##### field(elements.dxLinearGauge): function()
<!-- Description goes here -->

##### field(elements.dxList): function()
<!-- Description goes here -->

##### field(elements.dxLoadIndicator): function()
<!-- Description goes here -->

##### field(elements.dxLoadPanel): function()
<!-- Description goes here -->

##### field(elements.dxLookup): function()
<!-- Description goes here -->

##### field(elements.dxMap): function()
<!-- Description goes here -->

##### field(elements.dxMenu): function()
<!-- Description goes here -->

##### field(elements.dxMultiView): function()
<!-- Description goes here -->

##### field(elements.dxNavBar): function()
<!-- Description goes here -->

##### field(elements.dxNumberBox): function()
<!-- Description goes here -->

##### field(elements.dxPieChart): function()
<!-- Description goes here -->

##### field(elements.dxPivotGrid): function()
<!-- Description goes here -->

##### field(elements.dxPivotGridFieldChooser): function()
<!-- Description goes here -->

##### field(elements.dxPolarChart): function()
<!-- Description goes here -->

##### field(elements.dxPopover): function()
<!-- Description goes here -->

##### field(elements.dxPopup): function()
<!-- Description goes here -->

##### field(elements.dxProgressBar): function()
<!-- Description goes here -->

##### field(elements.dxRadioGroup): function()
<!-- Description goes here -->

##### field(elements.dxRangeSelector): function()
<!-- Description goes here -->

##### field(elements.dxRangeSlider): function()
<!-- Description goes here -->

##### field(elements.dxRecurrenceEditor): function()
<!-- Description goes here -->

##### field(elements.dxResizable): function()
<!-- Description goes here -->

##### field(elements.dxResponsiveBox): function()
<!-- Description goes here -->

##### field(elements.dxSankey): function()
<!-- Description goes here -->

##### field(elements.dxScheduler): function()
<!-- Description goes here -->

##### field(elements.dxScrollView): function()
<!-- Description goes here -->

##### field(elements.dxSelectBox): function()
<!-- Description goes here -->

##### field(elements.dxSlideOut): function()
<!-- Description goes here -->

##### field(elements.dxSlideOutView): function()
<!-- Description goes here -->

##### field(elements.dxSlider): function()
<!-- Description goes here -->

##### field(elements.dxSortable): function()
<!-- Description goes here -->

##### field(elements.dxSparkline): function()
<!-- Description goes here -->

##### field(elements.dxSpeedDialAction): function()
<!-- Description goes here -->

##### field(elements.dxSwitch): function()
<!-- Description goes here -->

##### field(elements.dxTabPanel): function()
<!-- Description goes here -->

##### field(elements.dxTabs): function()
<!-- Description goes here -->

##### field(elements.dxTagBox): function()
<!-- Description goes here -->

##### field(elements.dxTextArea): function()
<!-- Description goes here -->

##### field(elements.dxTextBox): function()
<!-- Description goes here -->

##### field(elements.dxTileView): function()
<!-- Description goes here -->

##### field(elements.dxToast): function()
<!-- Description goes here -->

##### field(elements.dxToolbar): function()
<!-- Description goes here -->

##### field(elements.dxTooltip): function()
<!-- Description goes here -->

##### field(elements.dxTreeList): function()
<!-- Description goes here -->

##### field(elements.dxTreeMap): function()
<!-- Description goes here -->

##### field(elements.dxTreeView): function()
<!-- Description goes here -->

##### field(elements.dxValidationGroup): function()
<!-- Description goes here -->

##### field(elements.dxValidationMessage): function()
<!-- Description goes here -->

##### field(elements.dxValidationSummary): function()
<!-- Description goes here -->

##### field(elements.dxValidator): function()
<!-- Description goes here -->

##### field(elements.dxVectorMap): function()
<!-- Description goes here -->

---
Before [starting](/api-reference/50%20Common/utils/TransitionExecutor/start().md '/Documentation/ApiReference/Common/utils/TransitionExecutor/#start') a transition (a set of simultaneous animations), the elements that will take part in it and the animation configurations to be used to animate these elements should be registered. For this purpose, use the [enter(elements, animation)](/api-reference/50%20Common/utils/TransitionExecutor/enter(elements_animation).md '/Documentation/ApiReference/Common/utils/TransitionExecutor/#enterelements_animation') method. The elements registered using this method will be animated as "entering" ones. To register elements for a "leaving" animation within this transition, use the **leave(elements, animation)** method.

If you pass a name of a predefined animation as the second parameter, but an animation is not found by this name in the [animation repository](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/'), the specified element(s) will not be animated within this transition.