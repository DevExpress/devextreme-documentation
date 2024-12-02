---

##### jQuery

When a user clicks an appointment, the Scheduler shows a tooltip that can be customized. Combine HTML markup for tooltips with [DOM methods](https://api.jquery.com/category/manipulation/). To apply this markup, use the [appointmentTooltipTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentTooltipTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#appointmentTooltipTemplate') callback function as shown in the following code:

    <!--JavaScript-->
    $(() => {
        const scheduler = $('#schedulerContainer').dxScheduler({
            appointmentTooltipTemplate(data, cell) {
                const tooltip = $('<div class="dx-tooltip-appointment-item">');

                // NOTE: You can use data.appointmentData.resouceId to obtain resource color
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

                if (!isAppointmentDisabled && isDeleteAllowed) {
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
    });

##### Angular

When a user clicks an appointment, the Scheduler shows a tooltip that can be customized. The following code shows how to use [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') to define templates for tooltips:

    <!-- tab: app.component.html -->
    <dx-scheduler
        #targetScheduler
        appointmentTooltipTemplate="appointmentTooltipTemplate"
    >
        <ng-container *dxTemplate="let data of 'appointmentTooltipTemplate'">

            <!-- NOTE: You can use data.appointmentData.resouceId to obtain resource color -->                                  
            <Tooltip
                [appointmentData]="data.appointmentData"
                [isDeleteButtonExist]="isDeleteButtonExist(data)"
                markerColor="#337ab7"
                (onDeleteButtonClick)="onDeleteButtonClick($event, data.appointmentData)"
            ></Tooltip>
        </ng-container>
    </dx-scheduler>

    <!-- tab: app.components.ts -->
    import { DxSchedulerTypes } from "devextreme-angular/ui/scheduler";
    import { DxButtonTypes } from "devextreme-angular/ui/button";

    export class AppComponent {
        @ViewChild('targetScheduler', { static: true })
        scheduler: DxSchedulerComponent;
    
        constructor(private service: Service) {}

        onDeleteButtonClick(e: DxButtonTypes.ClickEvent, appointmentData: DxSchedulerTypes.Appointment): void {
            this.scheduler.instance.deleteAppointment(appointmentData);
            e.event.stopPropagation();
            this.scheduler.instance.hideAppointmentTooltip();
        }
    
        isDeleteButtonExist({ appointmentData }: { appointmentData: DxSchedulerTypes.Appointment }): boolean {
            const schedulerInstance = this.scheduler.instance;
            const isAppointmentDisabled = appointmentData.disabled;
            const isDeleteAllowed = (schedulerInstance.option('editing') && schedulerInstance.option('editing.allowDeleting') === true)
                || schedulerInstance.option('editing') === true;
            
            return !isAppointmentDisabled && isDeleteAllowed;
        }
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
    import { DxSchedulerTypes } from "devextreme-angular/ui/scheduler";
    import { DxButtonTypes } from "devextreme-angular/ui/button";

    @Component({
        selector: "Tooltip",
        templateUrl: "./tooltip.component.html"
    })

    export class TooltipComponent {
        @Input() appointmentData: DxSchedulerTypes.Appointment
        @Input() markerColor: string;
        @Input() isDeleteButtonExist: boolean;
        @Output() onDeleteButtonClick = new EventEmitter<DxButtonTypes.ClickEvent>();
    }

    @NgModule({
        imports: [DxButtonModule, CommonModule],
        declarations: [TooltipComponent],
        exports: [TooltipComponent]
    })

    export class TooltipModule {}

##### Vue

When a user clicks an appointment, the Scheduler shows a tooltip that can be customized. The following code shows how to define templates for tooltips:

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            ref="schedulerRefKey"
            ...
            appointment-tooltip-template="appointmentTooltipTemplate"
        >
            <template #appointmentTooltipTemplate="{ data }">

                <!-- NOTE: You can use data.appointmentData.resouceId to obtain resource color -->
                <Tooltip
                    :data="data"
                    marker-color="#337ab7"
                    :is-delete-button-exist="isDeleteButtonExist(data)"
                    @delete-button-click="onDeleteButtonClick($event, data)"
                />
            </template>
        </DxScheduler>
    </template>

    <script>
    import Tooltip from './Tooltip.vue';
    const schedulerRefKey = 'my-scheduler';

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
        methods: {
            onDeleteButtonClick(e, data) {
                this.scheduler.deleteAppointment(data.appointmentData);
                e.event.stopPropagation();
                this.scheduler.hideAppointmentTooltip();
            },
            isDeleteButtonExist(data) {
                const isAppointmentDisabled = data.appointmentData.disabled;
                const isDeleteAllowed = (this.scheduler.option('editing') && this.scheduler.option('editing.allowDeleting'=== true) 
                    || this.scheduler.option('editing') === true);
                
                return !isAppointmentDisabled && isDeleteAllowed;
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
                    styling-mode="text"
                    @click="onClick"
                ></DxButton>
            </div>
        </div>
    </template>

    <script>
    import { DxButton } from 'devextreme-vue/button';
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
            onClick(e) {
                this.$emit("delete-button-click", e);
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

When a user clicks an appointment, the Scheduler shows a tooltip that can be customized. The following code shows how to define a rendering function for tooltips:

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import Scheduler from 'devextreme-react/scheduler';
    import Tooltip from './Tooltip.js';

    import 'devextreme/dist/css/dx.light.css';

    const App = () => {
        const schedulerRef = useRef(null);

        const appointmentTooltip = useCallback((props) => {
            const scheduler = schedulerRef.current;

            // NOTE: You can use props.appointmentData.resouceId to obtain resource color
            const color = '#337ab7';

            const isAppointmentDisabled = data.appointmentData.disabled;
            const isDeleteAllowed = (scheduler.option('editing') && scheduler.option('editing.allowDeleting') === true)
                || scheduler.option('editing') === true;
            const isDeleteButtonExist = !isAppointmentDisabled && isDeleteAllowed;

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
        }, [props.onDeleteButtonClick]);

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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates
