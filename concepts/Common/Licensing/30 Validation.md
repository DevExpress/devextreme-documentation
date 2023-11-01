[note] DevExtreme’s license verification process does not impact app functionality nor affect app performance. 

When creating the first component, DevExtreme checks the license key specified in the config() method. If license key verification is successful, you will not see any additional license-related messages within the browser console.  

If license key validation fails, DevExtreme will display one of the following messages within the browser console. 

<table class="dx-table full-width">
    <tr>
        <th>Message</th>
        <th>Case</th>
    </tr>
    <tr>
        <td><code>Valid license key not found.</code></td>
        <td>You used a trial version, your license key has expired, or you did not specify a valid key within GlobalConfig.<br>
        Please refer to the <a href="https://js.devexpress.com/EULAs/DevExtremeComplete/" target="_blank">DevExtreme End User License Agreement</a> for more information on the terms that govern the use of DevExtreme.<br> If you are using a trial version, you must uninstall all copies of DevExtreme once your 30-day trial period expires. <br> If you choose to integrate DevExtreme libraries in a project, you must purchase a valid license. For pricing/licensing options, please visit the DevExtreme <a href="https://js.devexpress.com/Buy/" target="_blank">Pricing Page</a>.<br>If you have licensing-related questions or need help with a purchase, please contact a member of the DevExpress Client Services Team.</td>
    </tr>
    <tr>
        <td><code>The license key is expired</code></td>
        <td>A mismatch exists between the license key and DevExtreme version used.<br>When your license key has expired, you can: 
        <ul>
        <li>Use the version of DevExtreme linked to your license key (visit the DevExpress <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a> to validate license/version information)</li>
        <li><a href="https://www.devexpress.com/buy/renew/" target="_blank">Renew/upgrade your DevExpress Subscription</a>  (once you renew/upgrade your subscription, you will be entitled to product updates and support services per the DevExtreme End User License Agreement)</li></ul>
        If you have licensing-related questions or need help with a purchase, please contact a member of the DevExpress Client Services Team.</td>
    </tr>
    <tr>
        <td><code>License key verification failed.</code></td>
        <td>
       Make certain to specify a valid key within GlobalConfig. If you continue to encounter this error, please return to the DevExpress <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a> to obtain a valid key and try again. <br> If you have a valid license key and the problem persists, please submit a <a href="https://supportcenter.devexpress.com/ticket/create" target="_blank">support ticket</a> via the DevExpress Support Center. We will be happy to follow-up.
        </td>
    </tr>
    <tr>
        <td>Pre-release version (Alpha, Beta, Community Technology Preview "CTP", or Release Candidate "RC", Early Access Preview "EAP")</td>
        <td>These are pre-release versions. Pre-release versions may contain deficiencies and as such, should not be considered for production use or integrated into any mission critical application. </td>
    </tr>
</table>