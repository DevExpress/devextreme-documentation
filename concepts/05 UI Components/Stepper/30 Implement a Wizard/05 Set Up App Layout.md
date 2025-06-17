To get started, add Stepper and MultiView to your project. Create a navigation panel by adding a `<div>` element to display the active step and two [Button](/Documentation/Guide/UI_Components/Button/Overview/) components to a container:

---

##### jQuery

    <!-- tab: index.html -->
    <div id="stepper"></div>
    <div class="content">
        <div id="stepContent"></div>
        <div class="nav-panel">
            <div class="current-step"> Step <span class="selected-index">1</span> of 5<span class="step-count"></span></div>
            <div class="nav-buttons">
                <div id="prevButton"></div>
                <div id="nextButton"></div>
            </div>
        </div>
    </div>

    <!-- tab: index.js -->
    const stepper = $('#stepper').dxStepper({
        items: steps,
    }).dxStepper('instance');

    const stepContent = $('#stepContent').dxMultiView({
        // ...
        focusStateEnabled: false,
        swipeEnabled: false,
        items: multiViewItems,
    }).dxMultiView('instance');

    const prevButton = $('#prevButton').dxButton({
        // ...
        text: 'Back',
        visible: false,
    }).dxButton('instance');

    const nextButton = $('#nextButton').dxButton({
        // ...
        text: 'Next',
    }).dxButton('instance');

##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper
        (onSelectionChanging)="onSelectionChanging($event)"
    >
        <dxi-stepper-item ...
            *ngFor="let step of steps"
        ></dxi-stepper-item>
    </dx-stepper>
    <div class="content">
        <dx-multi-view ...
            [animationEnabled]="false"
            [focusStateEnabled]="false"
            [swipeEnabled]="false"
        >
        </dx-multi-view>
        <div class="nav-panel">
            <div class="current-step">
                <span>
                    Step <span class="selected-index">{{ selectedIndex + 1 }}</span> of <span class="step-count">{{ steps.length }}</span>
                </span>
            </div>
            <div class="nav-buttons">
                <dx-button ...
                    id="prevButton"
                    [visible]="false"
                    text="Back"
                >
                </dx-button>
                <dx-button ...
                    id="nextButton"
                    text="Next"
                >
                </dx-button>
            </div>
        </div>
    </div>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        steps: Item[];

        constructor(private readonly appService: AppService) {
            this.steps = this.appService.getInitialSteps();
        }
    }

##### Vue

##### React

---

The "Back" button is initially hidden. This tutorial implements logic that shows the button on the second step of the wizard later (see [Synchronize Steps and Navigation Panel](/Documentation/Guide/UI_Components/Stepper/Implement_a_Wizard/#Synchronize_Steps_and_Navigation_Panel)).

Configure forms for each step with MultiView **items[]**.[template](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#template):

---

##### jQuery

    <!-- tab: index.js -->
    const multiViewItems = [
        { template: getDatesForm() },
        { template: getGuestsForm() },
        { template: getRoomAndMealForm() },
        { template: getAdditionalRequestsForm() },
        { template: getConfirmationTemplate() },
    ];

    function getDatesForm() {
        return () => $('<div>').append(
            $('<p>').text('Select your check-in and check-out dates. If your dates are flexible, include that information in Additional Requests. We will do our best to suggest best pricing options, depending on room availability.'),
            $('<div>').dxForm({
                formData,
                items: [{
                    dataField: 'dates',
                    editorType: 'dxDateRangeBox',
                    editorOptions: {
                        elementAttr: { id: 'datesPicker' },
                        startDatePlaceholder: 'Check-in',
                        endDatePlaceholder: 'Check-out',
                    },
                    label: { visible: false },
                }],
            }),
        );
    }

    function getGuestsForm() {
        // Configure the form
    }

    function getRoomAndMealForm() {
        // Configure the form
    }

    function getAdditionalRequestsForm() {
        // Configure the form
    }

    function getConfirmationTemplate() {
        // Configure the form
    }

---
