"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73532],{73532:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/supabase/src/index.ts","description":"","displayName":"liveProvider","props":{"supabaseUrl":{"defaultValue":null,"description":"","name":"supabaseUrl","required":true,"type":{"name":"string"},"tags":{}},"supabaseKey":{"defaultValue":null,"description":"","name":"supabaseKey","required":true,"type":{"name":"string"},"tags":{}},"auth":{"defaultValue":null,"description":"Supabase Auth allows you to create and manage user sessions for access to data that is secured by access policies.","name":"auth","required":true,"type":{"name":"SupabaseAuthClient"},"tags":{}},"schema":{"defaultValue":null,"description":"","name":"schema","required":true,"type":{"name":"string"},"tags":{}},"restUrl":{"defaultValue":null,"description":"","name":"restUrl","required":true,"type":{"name":"string"},"tags":{}},"realtimeUrl":{"defaultValue":null,"description":"","name":"realtimeUrl","required":true,"type":{"name":"string"},"tags":{}},"authUrl":{"defaultValue":null,"description":"","name":"authUrl","required":true,"type":{"name":"string"},"tags":{}},"storageUrl":{"defaultValue":null,"description":"","name":"storageUrl","required":true,"type":{"name":"string"},"tags":{}},"functionsUrl":{"defaultValue":null,"description":"","name":"functionsUrl","required":true,"type":{"name":"string"},"tags":{}},"realtime":{"defaultValue":null,"description":"","name":"realtime","required":true,"type":{"name":"RealtimeClient"},"tags":{}},"multiTab":{"defaultValue":null,"description":"","name":"multiTab","required":true,"type":{"name":"boolean"},"tags":{}},"fetch":{"defaultValue":null,"description":"","name":"fetch","required":false,"type":{"name":"((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>)"},"tags":{}},"changedAccessToken":{"defaultValue":null,"description":"","name":"changedAccessToken","required":true,"type":{"name":"string | undefined"},"tags":{}},"shouldThrowOnError":{"defaultValue":null,"description":"","name":"shouldThrowOnError","required":true,"type":{"name":"boolean"},"tags":{}},"headers":{"defaultValue":null,"description":"","name":"headers","required":true,"type":{"name":"{ [key: string]: string; }"},"tags":{}},"functions":{"defaultValue":null,"description":"Supabase Functions allows you to deploy and invoke edge functions.","name":"functions","required":true,"type":{"name":"FunctionsClient"},"tags":{}},"storage":{"defaultValue":null,"description":"Supabase Storage allows you to manage user-generated content, such as photos or videos.","name":"storage","required":true,"type":{"name":"StorageClient"},"tags":{}},"from":{"defaultValue":null,"description":"Perform a table operation.","name":"from","required":true,"type":{"name":"<T = any>(table: string) => SupabaseQueryBuilder<T>"},"tags":{"param":"table The table name to operate on."}},"rpc":{"defaultValue":null,"description":"Perform a function call.","name":"rpc","required":true,"type":{"name":"<T = any>(fn: string, params?: object | undefined, { head, count, }?: { head?: boolean | undefined; count?: \\"exact\\" | \\"planned\\" | \\"estimated\\" | null | undefined; } | undefined) => PostgrestFilterBuilder<T>"},"tags":{"param":"fn The function name to call.\\nparams The parameters to pass to the function call.\\nhead When set to true, no data will be returned.\\ncount Count algorithm to use to count rows in a table."}},"removeAllSubscriptions":{"defaultValue":null,"description":"Closes and removes all subscriptions and returns a list of removed\\nsubscriptions and their errors.","name":"removeAllSubscriptions","required":true,"type":{"name":"() => Promise<{ data: { subscription: RealtimeSubscription; }; error: Error | null; }[]>"},"tags":{}},"removeSubscription":{"defaultValue":null,"description":"Closes and removes a subscription and returns the number of open subscriptions.","name":"removeSubscription","required":true,"type":{"name":"(subscription: RealtimeSubscription) => Promise<{ data: { openSubscriptions: number; }; error: Error | null; }>"},"tags":{"param":"subscription The subscription you want to close and remove."}},"_closeSubscription":{"defaultValue":null,"description":"","name":"_closeSubscription","required":true,"type":{"name":"any"},"tags":{}},"_unsubscribeSubscription":{"defaultValue":null,"description":"","name":"_unsubscribeSubscription","required":true,"type":{"name":"any"},"tags":{}},"getSubscriptions":{"defaultValue":null,"description":"Returns an array of all your subscriptions.","name":"getSubscriptions","required":true,"type":{"name":"() => RealtimeSubscription[]"},"tags":{}},"_initSupabaseAuthClient":{"defaultValue":null,"description":"","name":"_initSupabaseAuthClient","required":true,"type":{"name":"any"},"tags":{}},"_initRealtimeClient":{"defaultValue":null,"description":"","name":"_initRealtimeClient","required":true,"type":{"name":"any"},"tags":{}},"_initPostgRESTClient":{"defaultValue":null,"description":"","name":"_initPostgRESTClient","required":true,"type":{"name":"any"},"tags":{}},"_getAuthHeaders":{"defaultValue":null,"description":"","name":"_getAuthHeaders","required":true,"type":{"name":"any"},"tags":{}},"_listenForMultiTabEvents":{"defaultValue":null,"description":"","name":"_listenForMultiTabEvents","required":true,"type":{"name":"any"},"tags":{}},"_listenForAuthEvents":{"defaultValue":null,"description":"","name":"_listenForAuthEvents","required":true,"type":{"name":"any"},"tags":{}},"_handleTokenChanged":{"defaultValue":null,"description":"","name":"_handleTokenChanged","required":true,"type":{"name":"any"},"tags":{}}},"generatedAt":1665991667362}')}}]);