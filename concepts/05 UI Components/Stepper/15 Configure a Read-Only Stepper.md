You can disable all user interaction with Stepper by setting [focusStateEnabled](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#focusStateEnabled) to `false` and assigning the `pointer-events: none;` CSS style to the component. Define and modify the [selectedIndex](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedIndex) property to control Stepper state independently of the component. The code snippet below allows users to change the active step with two Buttons.

---
##### jQuery

    <!-- tab: index.html -->

    <div id='stepper'></div>
    <div id="buttons">
        <div id="prev"></div><div id="next"></div
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
                if (selectedIndex < dataSource.length) {
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
        [selectedIndex]="selectedIndex"
        [focusStateEnabled]="false"
    >
        <dxi-stepper-item
            *ngFor="let data of dataSource"
            // ...
        ></dxi-stepper-item>
    </dx-stepper>
    // ...
    <dx-button text="Previous Step" (onClick)="previousStep()"></dx-button>
    <dx-button text="Next Step" (onClick)="nextStep()"></dx-button>

    <!-- tab: app.component.ts -->

    // ...
    export class AppComponent {
        selectedIndex: number = 0;

        previousStep() {
            if (this.selectedIndex > 0) {
                this.selectedIndex -= 1
            }
        }

        nextStep() {
            if (this.selectedIndex < this.dataSource.length) {
                this.selectedIndex += 1
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
            :selected-index="2"
            :focus-state-enabled="false"
        >
            <DxItem
                v-for="(step, index) in steps"
                :key="index"
            />
        </DxStepper>
        <DxButton
          	text="Previous Step"
                    @click="previousStep()"
					></DxButton>
					<DxButton
          	text="Next Step"
                
                    @click="nextStep()"
					></DxButton>
    </template>
    <script>
    // ...

        const selectedIndex = ref(0);

        const previousStep = () => {
            if (selectedIndex.value > 0) {
                selectedIndex.value -= 1
            }
        }

        const nextStep = () => {
            if (selectedIndex.value < steps.length) {
                selectedIndex.value += 1
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

        const previousStep = () => {
            if (selectedIndex > 0) {
                setSelectedIndex(selectedIndex-1)
            }
        }

        const nextStep = () => {
            if (selectedIndex < steps.length) {
                setSelectedIndex(selectedIndex+1)
            }
        }

        return (
            <Stepper id="stepper" focusStateEnabled={false} selectedIndex={selectedIndex} on>
                {dataSource.map((data, index) => {
                    return <Item key={index} icon={data.icon}/>;
                })}
            </Stepper>
            <Button text="Previous Step" onClick={previousStep} />
            <Button text="Next Step" onClick={nextStep} />
        )
    }

    <!-- tab: styles.css -->

    #stepper {
        pointer-events: none;
    }

---