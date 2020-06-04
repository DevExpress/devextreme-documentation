---
id: dxGantt.Options.validation.validateDependencies
type: Boolean
default: false
---
---
##### shortDescription
Enables [task dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/') validation.

---

The **Gantt** allows you to validate relationships between tasks when they are edited.

<table class="dx-table">
    <tr>
        <th>User Action</th>
        <th style="width:230px">Dependency Type</th>
        <th>Gantt's Reaction</th>
    </tr>
    <tr>
        <td>Move a predecessor task (Task 1) to the left or right.</td>
        <td>
            <b>Finish to Start (FS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/fs-move-task1.png" alt="DevExtreme Gantt - Dependency validation - Finish To Start" /><br/>
            <b>Start to Start (SS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ss-move-task1.png" alt="DevExtreme Gantt - Dependency validation - Start To Start" /><br/>
            <b>Start to Finish (SF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/sf-move-task1.png" alt="DevExtreme Gantt - Dependency validation - Start To Finish" /><br/>
            <b>Finish to Finish (FF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ff-move-task1.png" alt="DevExtreme Gantt - Dependency validation - Finish To Finish" /><br/>
        </td>
        <td>The widget moves a successor task (Task 2) forward or backward to the same time interval.</td>
    </tr>
    <tr>
        <td>Move a successor task (Task 2) to the left.</td>
        <td>
            <b>Finish to Start (FS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/fs-task2-left-shift.png" alt="DevExtreme Gantt - Dependency validation - Finish To Start" /><br/>
            <b>Start to Start (SS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ss-task2-left-shift.png" alt="DevExtreme Gantt - Dependency validation - Start To Start" /><br/>
            <b>Start to Finish (SF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/sf-task2-left.png" alt="DevExtreme Gantt - Dependency validation - Start To Finish" /><br/>
            <b>Finish to Finish (FF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ff-task2-left.png" alt="DevExtreme Gantt - Dependency validation - Finish To Finish" /><br/>
        </td>
        <td>
            <b>This change is denied as it violates dependency rules.</b><br/>
            <br/>
            The control displays a popup window and suggests the following actions: <br/>
            <ul>    
                <li>Cancel the operation.</li>
                <li>Delete the dependency.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Move a successor task (Task 2) to the right.</td>
        <td>
            <b>Finish to Start (FS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/fs-task2-right-shift.png" alt="DevExtreme Gantt - Dependency validation - Finish To Start" /><br/>
            <b>Start to Start (SS):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ss-task2-right-shift.png" alt="DevExtreme Gantt - Dependency validation - Start To Start" /><br/>
            <b>Start to Finish (SF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/sf-task2-right.png" alt="DevExtreme Gantt - Dependency validation - Start To Finish" /><br/>
            <b>Finish to Finish (FF):</b><br/>
            <img src="/Content/images/doc/20_2/Gantt/ff-task2-right.png" alt="DevExtreme Gantt - Dependency validation - Finish To Finish" /><br/>
        </td>
        <td>
            The control displays a popup window and suggests the following actions: <br/>
            <ul>    
                <li>Cancel the operation.</li>
                <li>Delete the dependency.</li>
                <li>Move the task and keep the dependency. It creates a gap between tasks. Note that you can move tasks forward and backward within this gap while it meets the dependency rules.
                </li>
            </ul>
        </td>
    </tr> 
</table>