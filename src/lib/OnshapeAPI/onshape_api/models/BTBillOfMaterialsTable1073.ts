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
import type { BTTable1825 } from './BTTable1825';
import {
    BTTable1825FromJSON,
    BTTable1825FromJSONTyped,
    BTTable1825ToJSON,
} from './BTTable1825';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableRow1054 } from './BTTableRow1054';
import {
    BTTableRow1054FromJSON,
    BTTableRow1054FromJSONTyped,
    BTTableRow1054ToJSON,
} from './BTTableRow1054';
import type { BTTableSortOrder4371 } from './BTTableSortOrder4371';
import {
    BTTableSortOrder4371FromJSON,
    BTTableSortOrder4371FromJSONTyped,
    BTTableSortOrder4371ToJSON,
} from './BTTableSortOrder4371';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsTable1073
 */
export interface BTBillOfMaterialsTable1073 extends BTTable1825 {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTable1073
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBillOfMaterialsTable1073
     */
    failedMetadataRepresentativeOccurrences?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsTable1073
     */
    indented?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsTable1073
     */
    isShowingTopLevelAssemblyRow?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTable1073
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsTable1073
     */
    revision?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsTable1073
     */
    showingExcluded?: boolean;
}

/**
 * Check if a given object implements the BTBillOfMaterialsTable1073 interface.
 */
export function instanceOfBTBillOfMaterialsTable1073(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsTable1073FromJSON(json: any): BTBillOfMaterialsTable1073 {
    return BTBillOfMaterialsTable1073FromJSONTyped(json, false);
}

export function BTBillOfMaterialsTable1073FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsTable1073 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTable1825FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'failedMetadataRepresentativeOccurrences': !exists(json, 'failedMetadataRepresentativeOccurrences') ? undefined : json['failedMetadataRepresentativeOccurrences'],
        'indented': !exists(json, 'indented') ? undefined : json['indented'],
        'isShowingTopLevelAssemblyRow': !exists(json, 'isShowingTopLevelAssemblyRow') ? undefined : json['isShowingTopLevelAssemblyRow'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'showingExcluded': !exists(json, 'showingExcluded') ? undefined : json['showingExcluded'],
    };
}

export function BTBillOfMaterialsTable1073ToJSON(value?: BTBillOfMaterialsTable1073 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTable1825ToJSON(value),
        'btType': value.btType,
        'failedMetadataRepresentativeOccurrences': value.failedMetadataRepresentativeOccurrences,
        'indented': value.indented,
        'isShowingTopLevelAssemblyRow': value.isShowingTopLevelAssemblyRow,
        'partNumber': value.partNumber,
        'revision': value.revision,
        'showingExcluded': value.showingExcluded,
    };
}

