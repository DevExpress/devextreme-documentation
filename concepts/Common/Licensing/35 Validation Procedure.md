If the validation of the license key fails, DevExtreme displays a console warning in both development and production. End users can still use the components. If the license key verification is successful, then you no longer see any license-related messages in a browser console.

[note] License checking does not affect the performance of applications.

The following list shows all possible validation errors:

<table class="dx-table full-width">
    <tr>
        <th>Message</th>
        <th>Case</th>
    </tr>
    <tr>
        <td><code>DevExtreme: Valid license key not found.</code></td>
        <td>You use a trial, your license key is expired, or you did not specify the key in GlobalConfig.<br>
        If you are using a trial version, you must uninstall all copies of DevExtreme once your 30 days trial period expires. For licensing-related information, please refer to the <a href="https://js.devexpress.com/EULAs/DevExtremeComplete/" target="_blank">DevExtreme End User License Agreement</a>.<br> To continue using DevExtreme in a project, you must purchase a license. For pricing/licensing options, please visit the <a href="https://js.devexpress.com/Buy/">pricing page</a>. <br> If you have licensing-related questions or need help with a purchase, please email <code>clientservices@devexpress.com</code>. We will be happy to follow-up.</td>
    </tr>
    <tr>
        <td><code>DevExtreme: The license key is expired</code></td>
        <td>A mismatch exists between license key/DevExtreme version.<br>To proceed, you can: 
        <ul>
        <li>use a version of DevExtreme linked to your license key (go to <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a>)</li>
        <li><a href="https://www.devexpress.com/buy/renew/" target="_blank">renew your DevExpress Subscription</a> (once you renew your subscription, you will be entitled to product updates and support service)</li></ul>
        If you have licensing-related questions or need help with a purchase, please email <code>clientservices@devexpress.com</code>. We will be happy to follow-up.</td>
    </tr>
    <tr>
        <td><code>DevExtreme: License key verification failed.</code></td>
        <td>
        Make certain to specify a correct key in the GlobalConfig. If you continue to encounter an error, please go to <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a> to obtain a valid key. <br> If you have a valid license and this problem persists, please submit a <a href="https://supportcenter.devexpress.com/ticket/create" target="_blank">support ticket</a> via the DevExpress Support Center. We will be happy to follow-up.
        </td>
    </tr>
    <tr>
        <td>No messages</td>
        <td>We do not show any messages in case of successful verification.</td>
    </tr>
</table>