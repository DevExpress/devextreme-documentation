To configure [AIIntegration](/Documentation/ApiReference/Common_Types/AIIntegration/), import the DevExtreme AI integration module into your project:

---
##### jQuery

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="../artifacts/js/dx.ai-integration.js" charset="utf-8"></script>
        <!-- or if using CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/devextreme-dist/cdnjs_version/js/dx.ai-integration.js"></script>
    </head>

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest):

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration({
        sendRequest(params) {
            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers: { ... }, // Add custom headers here, including API authentication headers
                body: JSON.stringify(params.prompt),
            }).then(async (response) => {
                    const result = await response.json();

                    return result.output || '';
                })

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';

To use REST APIs to connect to an AI service provider, implement the [HttpClient](https://angular.dev/api/common/http/HttpClient) service within **aiIntegration**.**aiProvider**.[sendRequest](/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest):

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    // ...
    export class AppComponent {
        constructor(private http: HttpClient) {}
        provider = {
            sendRequest: ({ prompt }) => {
                const headers = new HttpHeaders({
                    // Add any custom headers here
                });

                const body = JSON.stringify({ prompt });

                const promise = this.http
                    .post<{ output?: string }>('https://example.org/post', body, {
                        headers,
                        signal: controller.signal,
                    })
                    .toPromise()
                    .then((result) => result.output || '');

                return {
                    promise,
                    abort: () => {
                        // Add an abort request
                    },
                };
            },
        };
        aiIntegration = new AIIntegration(provider);
    }

##### Vue

    <!-- tab: App.vue -->
    <script lang="ts" setup>
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    </script>

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest):

    <!-- tab: App.vue -->
    <script lang="ts" setup>
    import { ref } from 'vue';
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
            const headers = {
                // Add any custom headers here
            };

            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers,
                body: JSON.stringify({ prompt }),
                signal: controller.signal,
            })
                .then(async (response) => {
                    const result = await response.json();
                    return result.output || '';
                });

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    };

    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest):

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
            const headers = {
                'Content-Type': 'application/json',
                // Add any custom headers here
            };

            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers,
                body: JSON.stringify({ prompt }),
                signal: controller.signal,
            })
                .then(async (response) => {
                    const result = await response.json();
                    return result.output || '';
                });

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    };
    const aiIntegration = new AIIntegration(provider);

---