To get started, add a Stepper and a MultiView to your project. Create a navigation panel - a container with child items. Child items are a `<div>` element that displays the active step caption and two [Button](/Documentation/Guide/UI_Components/Button/Overview/) components:

---

##### jQuery

    <!-- tab: index.html -->
    <div id="stepper"></div>
    <div class="content">
        <div id="stepContent"></div>
        <div class="nav-panel">
            <div class="current-step"> Step <span class="selected-index">1</span> of 5</span></div>
            <div class="nav-buttons">
                <div id="prevButton"></div>
                <div id="nextButton"></div>
            </div>
        </div>
    </div>

    <!-- tab: index.js -->
    const stepper = $('#stepper').dxStepper({
        // ...
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
    <dx-stepper ... >
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
                <span ... >
                    Step <span class="selected-index">1</span> of {{ steps.length }}
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
    import { DxStepperModule, DxButtonModule, DxMultiViewModule, DxFormModule } from 'devextreme-angular';
    import { AppService } from './app.service';
    // ...
    export class AppComponent {
        steps: Item[];

        constructor(private readonly appService: AppService) {
            this.steps = this.appService.getInitialSteps();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxStepper ... >
            <DxStepperItem ...
                v-for="item of steps"
            />
        </DxStepper>
        <div class="content">
            <DxMultiView ...
                :focus-state-enabled="false"
                :animation-enabled="false"
                :swipe-enabled="false"
            >
            </DxMultiView>
            <div class="nav-panel">
                <div class="current-step">
                    <span ... >
                        Step <span class="selected-index">1</span> of {{ steps.length }}
                    </span>
                </div>
                <div class="nav-buttons">
                    <DxButton ...
                        id="prevButton"
                        :visible="false"
                        text="Back"
                    />
                    <DxButton ...
                        id="nextButton"
                        text="Next"
                    />
                </div>
            </div>
        </div>
    </template>

    <script setup lang="ts">
    import DxButton from 'devextreme-vue/button';
    import DxMultiView, { DxItem as DxMultiViewItem } from 'devextreme-vue/multi-view';
    import DxStepper, { DxItem as DxStepperItem } from 'devextreme-vue/stepper';
    import type { IItemProps } from 'devextreme-react/cjs/stepper';
    import { getInitialSteps } from './data.ts';

    // ...
    const steps = ref<IItemProps[]>(getInitialSteps());
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Stepper, Item } from 'devextreme-react/stepper'
    import type { IItemProps } from 'devextreme-react/stepper'
    import Button from 'devextreme-react/button';
    import { MultiView } from 'devextreme-react/multi-view';
    import { initialSteps } from './data.ts';

    // ...
    export default function App () {
        const [steps, setSteps] = useState<IItemProps[]>(initialSteps);

        // ...
        return (
            <>
                <Stepper ... >
                    {steps.map((step) => <Item key={step.label} {...step} />)}
                </Stepper>
                <div className="content">
                    <MultiView ...
                        focusStateEnabled={false}
                        animationEnabled={false}
                        swipeEnabled={false}
                    >
                    </MultiView>
                    <div className="nav-panel">
                        <div className="current-step">
                            Step <span className="selected-index">1</span> of {steps.length}
                        </div>
                        <div className="nav-buttons">
                            <Button ...
                                id="prevButton"
                                text="Back"
                                visible={false}
                            >
                            <Button
                                id="nextButton"
                                text="Next"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }

---

The "Back" button is initially hidden. A later step in this tutorial implements dynamic visibility logic (see [Synchronize Steps and Navigation Panel](/Documentation/Guide/UI_Components/Stepper/Implement_a_Wizard/#Synchronize_Steps_and_Navigation_Panel)).

---

##### jQuery

Configure forms for each step with MultiView **items[]**.[template](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#template):

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

##### Angular

Configure forms for each step with MultiView **items[]**.[template](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#template):

    <!-- tab: app.component.html -->
    <div class="content">
        <dx-multi-view ... >
            <dxi-multi-view-item>
                <div *dxTemplate>
                    <dates-form ... ></dates-form>
                </div>
            </dxi-multi-view-item>
            <!-- Configure the rest of the forms -->
        </dx-multi-view>
    </div>

    <!-- tab: app.component.ts -->
    // ...
    import { DatesFormComponent } from "./dates-form/dates-form.component";
    import { BookingFormData } from './app.types';
    
    // ...
    export class AppComponent {
        formData: BookingFormData;

        constructor(private readonly appService: AppService) {
            // ...
            this.formData = this.appService.getInitialFormData();
        }
    }

    @NgModule({
        // ...
        declarations: [
            // ...
            DatesFormComponent,
        ]
    })

    <!-- tab: dates-form.component.html -->
    <dx-form ... >
        <dxi-form-item ... ></dxi-form-item>
    </dx-form>

This tutorial implements custom components as MultiView item templates and a custom type for form data. For more details on how this example is configured, refer to the [Stepper - Form Integration](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/) demo.

##### Vue

Configure forms for each step with MultiView **items[]**.[template](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#template):

    <!-- tab: App.vue -->
    <template>
        <div class="content">
            <DxMultiView ... >
                <DxMultiViewItem>
                    <template #default>
                        <DatesTemplate ... />
                    </template>
                </DxMultiViewItem>
                <!-- Configure the rest of the forms -->
            </DxMultiView>
        </div>
    </template>

    <script setup lang="ts">
    import DatesTemplate from './DatesTemplate.vue';

    // ...
    </script>

    <!-- tab: DatesTemplate.vue -->
    <template>
        <DxForm ... >
            <DxSimpleItem ... />
        </DxForm>
    </template>

This tutorial implements custom components as MultiView item templates and a custom type for form data. For more details on how this example is configured, refer to the [Stepper - Form Integration](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/) demo.

##### React

Configure forms for each step with MultiView **items[]**.[render](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#render):

    <!-- tab: App.tsx -->
    import DatesForm from './DatesForm.tsx';

    // ...
    export default function App () {
        const renderDatesForm = useCallback(() => {
            return <DatesForm ... />;
        }, [formData]);
        
        // ...
        return (
            <>
                <div className="content">
                    <MultiView ... >
                        <Item render={renderDatesForm} />
                        <!-- Configure the rest of the forms -->
                    </MultiView>
                </div>
            </>
        )
    }

    <!-- tab: DatesForm.tsx -->
    import { Form, SimpleItem } from 'devextreme-react/form';

    // ...
    const DatesForm: FC<FormProps> = memo(({ formData, validationGroup }) => (
        <>
            <Form ... >
                <SimpleItem ... />
            </Form>
        </>
    ));

This tutorial implements custom components as MultiView item templates and a custom type for form data. For more details on how this example is configured, refer to the [Stepper - Form Integration](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/) demo.

---
