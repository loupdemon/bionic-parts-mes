/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTConfiguredPartProperties2645 } from './BTConfiguredPartProperties2645';
import {
    BTConfiguredPartProperties2645FromJSON,
    BTConfiguredPartProperties2645FromJSONTyped,
    BTConfiguredPartProperties2645ToJSON,
} from './BTConfiguredPartProperties2645';
import type { BTOnePartProperties230 } from './BTOnePartProperties230';
import {
    BTOnePartProperties230FromJSON,
    BTOnePartProperties230FromJSONTyped,
    BTOnePartProperties230ToJSON,
} from './BTOnePartProperties230';
import type { BTTessellationProperties927 } from './BTTessellationProperties927';
import {
    BTTessellationProperties927FromJSON,
    BTTessellationProperties927FromJSONTyped,
    BTTessellationProperties927ToJSON,
} from './BTTessellationProperties927';

/**
 * 
 * @export
 * @interface BTPartProperties293
 */
export interface BTPartProperties293 {
    /**
     * 
     * @type {string}
     * @memberof BTPartProperties293
     */
    btType?: string;
    /**
     * 
     * @type {BTConfiguredPartProperties2645}
     * @memberof BTPartProperties293
     */
    configuredParts?: BTConfiguredPartProperties2645;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTPartProperties293
     */
    identityIdToQueryIndex?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof BTPartProperties293
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTOnePartProperties230>}
     * @memberof BTPartProperties293
     */
    parts?: Array<BTOnePartProperties230>;
    /**
     * 
     * @type {number}
     * @memberof BTPartProperties293
     */
    roughBytesEstimate?: number;
    /**
     * 
     * @type {BTTessellationProperties927}
     * @memberof BTPartProperties293
     */
    tessellationProperties?: BTTessellationProperties927;
}

/**
 * Check if a given object implements the BTPartProperties293 interface.
 */
export function instanceOfBTPartProperties293(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartProperties293FromJSON(json: any): BTPartProperties293 {
    return BTPartProperties293FromJSONTyped(json, false);
}

export function BTPartProperties293FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartProperties293 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configuredParts': !exists(json, 'configuredParts') ? undefined : BTConfiguredPartProperties2645FromJSON(json['configuredParts']),
        'identityIdToQueryIndex': !exists(json, 'identityIdToQueryIndex') ? undefined : json['identityIdToQueryIndex'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parts': !exists(json, 'parts') ? undefined : ((json['parts'] as Array<any>).map(BTOnePartProperties230FromJSON)),
        'roughBytesEstimate': !exists(json, 'roughBytesEstimate') ? undefined : json['roughBytesEstimate'],
        'tessellationProperties': !exists(json, 'tessellationProperties') ? undefined : BTTessellationProperties927FromJSON(json['tessellationProperties']),
    };
}

export function BTPartProperties293ToJSON(value?: BTPartProperties293 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configuredParts': BTConfiguredPartProperties2645ToJSON(value.configuredParts),
        'identityIdToQueryIndex': value.identityIdToQueryIndex,
        'nodeId': value.nodeId,
        'parts': value.parts === undefined ? undefined : ((value.parts as Array<any>).map(BTOnePartProperties230ToJSON)),
        'roughBytesEstimate': value.roughBytesEstimate,
        'tessellationProperties': BTTessellationProperties927ToJSON(value.tessellationProperties),
    };
}
