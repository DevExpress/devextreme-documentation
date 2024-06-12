[note] DevExtreme’s license verification process does not impact app functionality nor affect app performance. 

When creating the first component, DevExtreme checks the license key specified in the `config()` method. If license key verification is successful, additional license-related messages are not shown within the browser console or on-screen.

If license key validation fails, DevExtreme will display one of the following messages within the browser console.

<table class="dx-table full-width">
    <tr>
        <th>Case</th>
        <th>Message</th>
    </tr>
    <tr>
        <td>Valid license key not found.</td>
        <td>
        <code>W0019 - DevExtreme: Unable to Locate a Valid License Key</code><br><br>
        If you are using a 30-day trial version of DevExtreme, you must uninstall all copies of DevExtreme once your 30-day trial period expires. For terms and conditions that govern use of DevExtreme UI components/libraries, please refer to the <a href="https://js.devexpress.com/EULAs/DevExtremeComplete/" target="_blank">DevExtreme End User License Agreement</a>. <br><br>
        To use DevExtreme in a commercial project, you must purchase a license. For pricing/licensing options, please visit <a href="http://js.devexpress.com/Buy/" target="_blank">DevExtreme Purchase page</a>. <br><br>
        If you have licensing-related questions or need help with a purchase, please email <a href="mailto: clientservices@devexpress.com">clientservices@devexpress.com</a>. For additional information on this error message, see: <a href="/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0019">W0019</a>.</td>
    </tr>
    <tr>
        <td>The license key has expired.</td>
        <td><code>W0020 - DevExtreme: License Key Has Expired</code><br><br>A mismatch exists between the license key used and the DevExtreme version referenced in this project. <br><br> To proceed, you can:
        <ul>
        <li>use a version of DevExtreme linked to your license key (visit the DevExpress <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a> to validate license/version information)</li>
        <li><a href="https://www.devexpress.com/buy/renew/" target="_blank">renew your DevExpress Subscription</a> (once you renew your subscription, you will be entitled to product updates and support service as defined in the DevExtreme End User License Agreement)</li></ul>
        If you have licensing-related questions or need help with a renewal, please email <a href="mailto: clientservices@devexpress.com">clientservices@devexpress.com</a>. For additional information on this error message, see: <a href="/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0020">W0020</a>.</td>
    </tr>
    <tr>
        <td>License key verification failed.</td>
        <td><code>W0021 - DevExtreme: License Key Verification Has Failed</code><br><br>
        To verify your DevExtreme license, make certain to specify a correct key in the GlobalConfig. If you continue to encounter this error, please visit DevExpress <a href="https://www.devexpress.com/ClientCenter/DownloadManager/" target="_blank">Download Manager</a> to obtain a valid license key. <br><br> If you have a valid license key and this problem persists, please submit a <a href="https://supportcenter.devexpress.com/ticket/create" target="_blank">support ticket</a> via the DevExpress Support Center. We will be happy to follow-up. <br><br>
        For additional information on this error message, see: <a href="/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0021">W0021</a>.
        </td>
    </tr>
    <tr>
        <td>Pre-release version (Alpha, Beta, Community Technology Preview "CTP", or Release Candidate "RC", Early Access Preview "EAP")</td>
        <td><code>W0022 – DevExtreme: Pre-release software. Not suitable for commercial use.</code><br><br>
        Pre-release software may contain deficiencies and as such, should not be considered for use or integrated in any mission critical application. For additional information on this error message, see: <a href="/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0022">W0022</a>. </td>
    </tr>
</table>