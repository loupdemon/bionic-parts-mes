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
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
} from './BTMIndividualQuery138';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
} from './BTMNode19';

/**
 * 
 * @export
 * @interface BTMRecordMetrics1169
 */
export interface BTMRecordMetrics1169 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMRecordMetrics1169
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169
     */
    doBodyValidation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMRecordMetrics1169
     */
    previousFeatureId?: string;
    /**
     * 
     * @type {Array<BTMIndividualQuery138>}
     * @memberof BTMRecordMetrics1169
     */
    references?: Array<BTMIndividualQuery138>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169
     */
    useLatestBehavior?: boolean;
}

/**
 * Check if a given object implements the BTMRecordMetrics1169 interface.
 */
export function instanceOfBTMRecordMetrics1169(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMRecordMetrics1169FromJSON(json: any): BTMRecordMetrics1169 {
    return BTMRecordMetrics1169FromJSONTyped(json, false);
}

export function BTMRecordMetrics1169FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMRecordMetrics1169 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'doBodyValidation': !exists(json, 'doBodyValidation') ? undefined : json['doBodyValidation'],
        'previousFeatureId': !exists(json, 'previousFeatureId') ? undefined : json['previousFeatureId'],
        'references': !exists(json, 'references') ? undefined : ((json['references'] as Array<any>).map(BTMIndividualQuery138FromJSON)),
        'useLatestBehavior': !exists(json, 'useLatestBehavior') ? undefined : json['useLatestBehavior'],
    };
}

export function BTMRecordMetrics1169ToJSON(value?: BTMRecordMetrics1169 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19ToJSON(value),
        'btType': value.btType,
        'doBodyValidation': value.doBodyValidation,
        'previousFeatureId': value.previousFeatureId,
        'references': value.references === undefined ? undefined : ((value.references as Array<any>).map(BTMIndividualQuery138ToJSON)),
        'useLatestBehavior': value.useLatestBehavior,
    };
}

