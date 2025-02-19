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
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';
import type { BTAssociativeDataInfo } from './BTAssociativeDataInfo';
import {
    BTAssociativeDataInfoFromJSON,
    BTAssociativeDataInfoFromJSONTyped,
    BTAssociativeDataInfoToJSON,
} from './BTAssociativeDataInfo';

/**
 * 
 * @export
 * @interface BTAppAssociativeDataArrayInfo
 */
export interface BTAppAssociativeDataArrayInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    changeId?: string;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {Array<BTAssociativeDataInfo>}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    items?: Array<BTAssociativeDataInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTAppAssociativeDataArrayInfo
     */
    parentChangeId?: string;
}

/**
 * Check if a given object implements the BTAppAssociativeDataArrayInfo interface.
 */
export function instanceOfBTAppAssociativeDataArrayInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppAssociativeDataArrayInfoFromJSON(json: any): BTAppAssociativeDataArrayInfo {
    return BTAppAssociativeDataArrayInfoFromJSONTyped(json, false);
}

export function BTAppAssociativeDataArrayInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppAssociativeDataArrayInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTAssociativeDataInfoFromJSON)),
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
    };
}

export function BTAppAssociativeDataArrayInfoToJSON(value?: BTAppAssociativeDataArrayInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTAssociativeDataInfoToJSON)),
        'parentChangeId': value.parentChangeId,
    };
}

