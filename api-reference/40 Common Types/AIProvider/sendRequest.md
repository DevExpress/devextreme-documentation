---
id: AIProvider.sendRequest
type: function(params)
---
---
##### shortDescription
A function that sends a request to a language model.

##### param(params): RequestParams
Request parameters.

##### return: Response
An object with AI response.

---
---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration({
        sendRequest({ prompt }) {
            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers: { 
                    // Add any custom headers here
                 },
                body: JSON.stringify({ prompt }),
            })
                .then(async (response) => {
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
    import { Component } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { AIIntegration } from 'devextreme-angular/ai-integration';
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
    import { ref } from 'vue';
    import { AIIntegration } from 'devextreme-vue/ai-integration';

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
    import { AIIntegration } from 'devextreme-react/ai-integration';

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