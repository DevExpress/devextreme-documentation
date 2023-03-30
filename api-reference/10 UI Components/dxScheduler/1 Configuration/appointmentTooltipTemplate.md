---
id: dxScheduler.Options.appointmentTooltipTemplate
type: template
default: 'appointmentTooltip'
---
---
##### shortDescription
Specifies a custom template for tooltips displayed when users click an appointment or [cell overflow indicator](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/').

##### param(model): Object
The data of the appointment for which the tooltip is displayed.

##### field(model.appointmentData): Object
The appointment's data object.

##### field(model.targetedAppointmentData): Object
The clicked appointment's data object.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "appointment tooltip" }

##### return: String | UserDefinedElement
A template name or container.

##### field(model.isButtonClicked): Boolean
Specifies whether you click a button or an appointment element.

---

---
#####jQuery

    <!--JavaScript-->
    $(() => {
        const scheduler = $('#schedulerContainer').dxScheduler({
            appointmentTooltipTemplate(data, cell) {
            const tooltip = $('<div class="dx-tooltip-appointment-item">');
          
            // NOTE: You can get color from resources with data.appointmentData.resouceId
            const markerColor = '#337ab7';
            const markerBody = $('<div class="dx-tooltip-appointment-item-marker-body">').css('background', markerColor);
            const marker = $('<div class="dx-tooltip-appointment-item-marker">').append(markerBody);
            const content = $('<div class="dx-tooltip-appointment-item-content">')
                .append($('<div class="dx-tooltip-appointment-item-content-subject">').text(data.appointmentData.text))
                .append($('<div class="dx-tooltip-appointment-item-content-date">').text(data.appointmentData.startDate));

                tooltip.append(marker);
                tooltip.append(content);

            const isAppointmentDisabled = data.appointmentData.disabled;
            const isDeleteAllowed = (scheduler.option('editing') && scheduler.option('editing.allowDeleting') === true)
              || scheduler.option('editing') === true;

            if(!isAppointmentDisabled && isDeleteAllowed) {
                    const buttonContainer = $('<div class="dx-tooltip-appointment-item-delete-button-container">');
                    const button = $('<div class="dx-tooltip-appointment-item-delete-button">').dxButton({
                        icon: 'trash',
                        stylingMode: 'text',
                        onClick(e) {
                            scheduler.deleteAppointment(data.appointmentData);
                            e.event.stopPropagation();
                            scheduler.hideAppointmentTooltip();
                        }
                    });

                    buttonContainer.append(button);
                    tooltip.append(buttonContainer);
                }

                return tooltip;
            },
        }).dxScheduler('instance');
    })

#####Angular

    <!-- tab: app.component.html -->
    <dx-scheduler
        #targetScheduler
        appointmentTooltipTemplate="appointmentTooltipTemplate"
    >
        <div *dxTemplate="let data of 'appointmentTooltipTemplate'">
            <Tooltip
                [appointmentData]="data.appointmentData"
                [isDeleteButtonExist]="isDeleteButtonExist(data)"
                [markerColor]="data.appointmentData.employeeID | getColor"
                (onDeleteButtonClick)="onDeleteButtonClick($event, data.appointmentData)"
            ></Tooltip>
        </div>
    </dx-scheduler>

    <!-- tab: app.components.ts -->


    export class AppComponent {
        @ViewChild("targetScheduler", { static: true })
        scheduler: DxSchedulerComponent;
    
    
        constructor(private service: Service) {}

        onDeleteButtonClick(e: ClickEvent, appointmentData: dxSchedulerAppointment): void {
            this.scheduler.instance.deleteAppointment(appointmentData);
            e.event.stopPropagation();
            this.scheduler.instance.hideAppointmentTooltip();
        }
    
  isDeleteButtonExist({ appointmentData }: { appointmentData: dxSchedulerAppointment}): boolean {
    const schedulerInstance = this.scheduler.instance;
    const isAppointmentDisabled = appointmentData.disabled;
    const isDeleteAllowed = (schedulerInstance.option('editing') && schedulerInstance.option('editing.allowDeleting') === true)
     || schedulerInstance.option('editing') === true;
    
    return !isAppointmentDisabled && isDeleteAllowed;
  }

    <!-- tab: tooltip.component.html -->
    <div class="dx-tooltip-appointment-item">
        <div class="dx-tooltip-appointment-item-marker">
            <div
                class="dx-tooltip-appointment-item-marker-body"
                [style.background-color]="markerColor" 
            ></div>
        </div>

        <div class="dx-tooltip-appointment-item-content">
            <div class="dx-tooltip-appointment-item-content">
                <div class="dx-tooltip-appointment-item-content-subject">
                    {{appointmentData.text}}
                </div>
                <div class="dx-tooltip-appointment-item-content-date">
                    {{appointmentData.startDate}}
                </div>
            </div>
        </div>
        <div
            *ngIf="isDeleteButtonExist"
            class="dx-tooltip-appointment-item-delete-button-container"
        >
            <dx-button
                class="dx-tooltip-appointment-item-delete-button"
                icon="trash"
                stylingMode="text"
                (onClick)="onDeleteButtonClick.emit($event)"
            ></dx-button>
        </div>
    </div>

    <!-- tab: tooltip.components.ts -->
@Component({
        selector: "Tooltip",
        templateUrl: "./tooltip.component.html"
    })
    export class TooltipComponent {
        @Input() appointmentData: dxSchedulerAppointment;
        @Input() markerColor: string;
        @Input() isDeleteButtonExist: boolean;
        @Output() onDeleteButtonClick = new EventEmitter<ClickEvent>();
    }

    @NgModule({
        imports: [DxButtonModule, CommonModule],
        declarations: [TooltipComponent],
        exports: [TooltipComponent]
    })
    export class TooltipModule {}


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :ref="schedulerRefKey"
            ...
            appointment-tooltip-template="appointmentTooltipTemplate"
        >
            <template #appointmentTooltipTemplate="{ data }">
                <Tooltip
                    :data="data"
                    @delete-button-click="onDeleteButtonClick($event, data)"
                    :markerColor="getColor(data.appointmentData.employeeID)"
                    :isDeleteButtonExist="getDeleteButtonStatus(data)"
                />
            </template>
        </DxScheduler>
    </template>

    <script>
    import Tooltip from './Tooltip.vue';
    const schedulerRefKey = "my-scheduler";

    export default {
        components: {
            DxScheduler,
            Tooltip
        },
        data() {
            return {
                schedulerRefKey
            };
        },
        methods:{
            onDeleteButtonClick(e, data){
                this.scheduler.deleteAppointment(data.appointmentData);
                e.event.stopPropagation();
                this.scheduler.hideAppointmentTooltip();
            },
            getColor(employeeID) {
                return employees.find((employee) => {
                    return employee.id === employeeID;
                }).color;
            },
            getDeleteButtonStatus(data) {
                function getDisabled(employeeID) {
                    return employees.find((employee) => {
                        return employee.id === employeeID;
                    }).disabled;
                }
                
                return !getDisabled(data.appointmentData.employeeID) &&
                ((this.scheduler.option("editing") &&
                this.scheduler.option("editing.allowDeleting") === true) ||
                this.scheduler.option("editing") === true)
            }
        },
        computed: {
            scheduler: function() {
                return this.$refs[schedulerRefKey].instance; 
            }
        }
    };
    </script>

    <!-- tab: Template.vue -->
    <template>
        <div class="dx-tooltip-appointment-item">
            <div class="dx-tooltip-appointment-item-marker">
                <div
                    class="dx-tooltip-appointment-item-marker-body"
                    :style="{backgroundColor: markerColor}"
                ></div>
            </div>
            <div class="dx-tooltip-appointment-item-content">
                <div class="dx-tooltip-appointment-item-content">
                    <div class="dx-tooltip-appointment-item-content-subject">
                        {{data.appointmentData.text}}
                    </div>
                    <div class="dx-tooltip-appointment-item-content-date">
                        {{data.appointmentData.startDate.toString()}}
                    </div>
                </div>
            </div>
            <div v-if="isDeleteButtonExist" class="dx-tooltip-appointment-item-delete-button-container">
                <DxButton
                    class="dx-tooltip-appointment-item-delete-button"
                    icon="trash"
                    stylingMode="text"
                    @click="onClick"
                ></DxButton>
            </div>
        </div>
    </template>

    <script>
    import {DxButton} from 'devextreme-vue/button';
    import { employees } from './data.js';

    export default {
        components: {
            DxButton,
        },
        data() {
            return {
                employees,
            };
        },
        methods: {
            onClick(e){
                this.$emit('delete-button-click', e);
            },
        },
        props: {
            data: {
                type: Object,
                default: () => {},
            },
            markerColor: {
                type: String
            },
            isDeleteButtonExist: {
                type: Boolean
            }
        },
    };
    </script>


##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    import Tooltip from "./Tooltip.js";

    const App = () => {
        const schedulerRef = useRef(null);

        const appointmentTooltip = useCallback((props) => {
            const scheduler = schedulerRef.current;

            // NOTE: You can get color from resources with props.appointmentData.resouceId
            const color = '#337ab7';

            const isDeleteButtonExist = !getDisabled(props.appointmentData.employeeID) &&
                ((scheduler.instance.option("editing") &&
                    scheduler.instance.option("editing.allowDeleting") === true) ||
                    scheduler.instance.option("editing") === true);

            const onDeleteButtonClick = (e) => {
                scheduler.instance.deleteAppointment(props.appointmentData);
                e.event.stopPropagation();
                scheduler.instance.hideAppointmentTooltip();
            };

            return (
                <Tooltip
                    {...props}
                    isDeleteButtonExist={isDeleteButtonExist}
                    onDeleteButtonClick={onDeleteButtonClick}
                    color={color}
                />
            );
        }, []);

        render(
            <Scheduler ...
                ref={schedulerRef}
                appointmentTooltipRender={appointmentTooltip}
            >
            </Scheduler>
        );
    }

    export default App;

    <!-- tab: Tooltip.js -->
    import React, { useCallback } from 'react';

    const  Tooltip = (props) => {
        const onDeleteButtonClick = useCallback((e) => {
            props.onDeleteButtonClick(e);
        }, []);

        return (
            <div className={"dx-tooltip-appointment-item"}>
                <div className={"dx-tooltip-appointment-item-marker"}>
                    <div
                        className={"dx-tooltip-appointment-item-marker-body"}
                        style={{ backgroundColor: props.color }}
                    ></div>
                </div>
                <div className={"dx-tooltip-appointment-item-content"}>
                    <div className={"dx-tooltip-appointment-item-content"}>
                        <div className={"dx-tooltip-appointment-item-content-subject"}>
                            {props.appointmentData.text}
                        </div>
                        <div className={"dx-tooltip-appointment-item-content-date"}>
                            {props.appointmentData.startDate.toString()}
                        </div>
                    </div>
                </div>

                {props.isDeleteButtonExist ? (
                    <div className={"dx-tooltip-appointment-item-delete-button-container"}>
                        <Button
                            className={"dx-tooltip-appointment-item-delete-button"}
                            icon="trash"
                            stylingMode="text"
                            onClick={onDeleteButtonClick}
                        ></Button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        );
    }

    export default Tooltip;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- **views[]**.[appointmentTooltipTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/appointmentTooltipTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#appointmentTooltipTemplate')
- [Customize Appointment Tooltip](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Tooltip/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')

<!-- import * from 'api-reference\10 UI Components\dxScheduler\1 Configuration\appointmentTemplate.md' -->