You can disable all user interaction with Stepper by setting [focusStateEnabled](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/focusStateEnabled.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#focusStateEnabled') to `false` and assigning the `pointer-events: none;` CSS style to the component. Define and modify the [selectedIndex](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedIndex') property to control the Stepper state independently of the component. The code snippet below allows users to change the active step with two Buttons.

---
##### jQuery

    <!-- tab: index.html -->
    <div id="stepper"></div>
    <div id="buttons">
        <div id="prev"></div><div id="next"></div>
    </div>

    <!-- tab: index.js -->
    $(() => {
        const stepper = $('#stepper').dxStepper({
            focusStateEnabled: false,
            dataSource,
        }).dxStepper('instance');
        $('#prev').dxButton({
            text: "Previous step",
            onClick: () => {
                const selectedIndex = stepper.option('selectedIndex');
                if (selectedIndex > 0) {
                    stepper.option('selectedIndex', selectedIndex - 1);
                }
            }
        });
        $('#next').dxButton({
            text: "Next step",
            onClick: () => {
                const selectedIndex = stepper.option('selectedIndex');
                if (selectedIndex < dataSource.length - 1) {
                    stepper.option('selectedIndex', selectedIndex + 1);
                }
            }
        });
    });

    <!-- tab: index.css -->
    #stepper {
        pointer-events: none;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper
        id="stepper"
        [dataSource]="dataSource"
        [selectedIndex]="selectedIndex"
        [focusStateEnabled]="false"
    >
    </dx-stepper>
    <dx-button text="Previous Step" (onClick)="handlePreviousButtonClick()"></dx-button>
    <dx-button text="Next Step" (onClick)="handleNextButtonClick()"></dx-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        selectedIndex: number = 0;
        handlePreviousButtonClick() {
            if (this.selectedIndex > 0) {
                this.selectedIndex -= 1;
            }
        }
        handleNextButtonClick() {
            if (this.selectedIndex < this.dataSource.length - 1) {
                this.selectedIndex += 1;
            }
        }
    }

    <!-- tab: app.component.css -->
    #stepper {
        pointer-events: none;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxStepper
            id="stepper"
            :dataSource="dataSource"
            :selected-index="selectedIndex"
            :focus-state-enabled="false"
        />
        <DxButton
          	text="Previous Step"
            @click="handlePreviousButtonClick()"
        />
        <DxButton
          	text="Next Step"
            @click="handleNextButtonClick()"
        />
    </template>
    <script>
    // ...
        const selectedIndex = ref(0);
        const handlePreviousButtonClick = () => {
            if (selectedIndex.value > 0) {
                selectedIndex.value -= 1;
            }
        }
        const handleNextButtonClick = () => {
            if (selectedIndex.value < dataSource.length - 1) {
                selectedIndex.value += 1;
            }
        }
    </script>
    <style scoped>
        #stepper {
            pointer-events: none;
        }
    </style>

##### React

    <!-- tab: App.tsx -->
    export default function App() {
        const [selectedIndex, setSelectedIndex] = useState(0)
        const handlePreviousButtonClick = () => {
            if (selectedIndex > 0) {
                setSelectedIndex(selectedIndex-1);
            }
        }
        const handleNextButtonClick = () => {
            if (selectedIndex < dataSource.length - 1) {
                setSelectedIndex(selectedIndex+1);
            }
        }

        return (
            <Stepper id="stepper" dataSource={dataSource} focusStateEnabled={false} selectedIndex={selectedIndex} />
            <Button text="Previous Step" onClick={handlePreviousButtonClick} />
            <Button text="Next Step" onClick={handleNextButtonClick} />
        )
    }

    <!-- tab: styles.css -->
    #stepper {
        pointer-events: none;
    }

---