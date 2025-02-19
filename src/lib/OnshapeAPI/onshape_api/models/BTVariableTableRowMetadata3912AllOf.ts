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
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';

/**
 * 
 * @export
 * @interface BTVariableTableRowMetadata3912AllOf
 */
export interface BTVariableTableRowMetadata3912AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    crossHighlightData?: BTTableBaseCrossHighlightData2609;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    info?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    isFullyEditable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    isRecursiveImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912AllOf
     */
    lastWritingFeatureNodeId?: string;
}

/**
 * Check if a given object implements the BTVariableTableRowMetadata3912AllOf interface.
 */
export function instanceOfBTVariableTableRowMetadata3912AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVariableTableRowMetadata3912AllOfFromJSON(json: any): BTVariableTableRowMetadata3912AllOf {
    return BTVariableTableRowMetadata3912AllOfFromJSONTyped(json, false);
}

export function BTVariableTableRowMetadata3912AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVariableTableRowMetadata3912AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightData']),
        'info': !exists(json, 'info') ? undefined : json['info'],
        'isFullyEditable': !exists(json, 'isFullyEditable') ? undefined : json['isFullyEditable'],
        'isRecursiveImport': !exists(json, 'isRecursiveImport') ? undefined : json['isRecursiveImport'],
        'lastWritingFeatureNodeId': !exists(json, 'lastWritingFeatureNodeId') ? undefined : json['lastWritingFeatureNodeId'],
    };
}

export function BTVariableTableRowMetadata3912AllOfToJSON(value?: BTVariableTableRowMetadata3912AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'crossHighlightData': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightData),
        'info': value.info,
        'isFullyEditable': value.isFullyEditable,
        'isRecursiveImport': value.isRecursiveImport,
        'lastWritingFeatureNodeId': value.lastWritingFeatureNodeId,
    };
}

