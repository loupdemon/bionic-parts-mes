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
import type { BTPBuiltinIdentifier233 } from './BTPBuiltinIdentifier233';
import {
    BTPBuiltinIdentifier233FromJSON,
    BTPBuiltinIdentifier233FromJSONTyped,
    BTPBuiltinIdentifier233ToJSON,
} from './BTPBuiltinIdentifier233';
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPExpressionBuiltinCall239
 */
export interface BTPExpressionBuiltinCall239 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionBuiltinCall239
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTPExpression9>}
     * @memberof BTPExpressionBuiltinCall239
     */
    arguments?: Array<BTPExpression9>;
    /**
     * 
     * @type {BTPBuiltinIdentifier233}
     * @memberof BTPExpressionBuiltinCall239
     */
    name?: BTPBuiltinIdentifier233;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionBuiltinCall239
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionBuiltinCall239 interface.
 */
export function instanceOfBTPExpressionBuiltinCall239(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionBuiltinCall239FromJSON(json: any): BTPExpressionBuiltinCall239 {
    return BTPExpressionBuiltinCall239FromJSONTyped(json, false);
}

export function BTPExpressionBuiltinCall239FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionBuiltinCall239 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPExpression9FromJSON)),
        'name': !exists(json, 'name') ? undefined : BTPBuiltinIdentifier233FromJSON(json['name']),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPExpressionBuiltinCall239ToJSON(value?: BTPExpressionBuiltinCall239 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9ToJSON(value),
        'btType': value.btType,
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPExpression9ToJSON)),
        'name': BTPBuiltinIdentifier233ToJSON(value.name),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}

