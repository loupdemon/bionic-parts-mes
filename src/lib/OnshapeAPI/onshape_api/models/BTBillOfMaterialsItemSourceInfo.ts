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
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsItemSourceInfo
 */
export interface BTBillOfMaterialsItemSourceInfo {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    fullConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    href?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    isStandardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    nonGeometricItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    sourceElementMicroversionId?: string;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    thumbnailInfo?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    versionMetadataWorkspaceMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    viewHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    wvmId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsItemSourceInfo
     */
    wvmType?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsItemSourceInfo interface.
 */
export function instanceOfBTBillOfMaterialsItemSourceInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsItemSourceInfoFromJSON(json: any): BTBillOfMaterialsItemSourceInfo {
    return BTBillOfMaterialsItemSourceInfoFromJSONTyped(json, false);
}

export function BTBillOfMaterialsItemSourceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsItemSourceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'fullConfiguration': !exists(json, 'fullConfiguration') ? undefined : json['fullConfiguration'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'isStandardContent': !exists(json, 'isStandardContent') ? undefined : json['isStandardContent'],
        'nonGeometricItemId': !exists(json, 'nonGeometricItemId') ? undefined : json['nonGeometricItemId'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'sourceElementMicroversionId': !exists(json, 'sourceElementMicroversionId') ? undefined : json['sourceElementMicroversionId'],
        'thumbnailInfo': !exists(json, 'thumbnailInfo') ? undefined : BTThumbnailInfoFromJSON(json['thumbnailInfo']),
        'versionMetadataWorkspaceMicroversionId': !exists(json, 'versionMetadataWorkspaceMicroversionId') ? undefined : json['versionMetadataWorkspaceMicroversionId'],
        'viewHref': !exists(json, 'viewHref') ? undefined : json['viewHref'],
        'wvmId': !exists(json, 'wvmId') ? undefined : json['wvmId'],
        'wvmType': !exists(json, 'wvmType') ? undefined : json['wvmType'],
    };
}

export function BTBillOfMaterialsItemSourceInfoToJSON(value?: BTBillOfMaterialsItemSourceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value._configuration,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'fullConfiguration': value.fullConfiguration,
        'href': value.href,
        'isStandardContent': value.isStandardContent,
        'nonGeometricItemId': value.nonGeometricItemId,
        'partId': value.partId,
        'sourceElementMicroversionId': value.sourceElementMicroversionId,
        'thumbnailInfo': BTThumbnailInfoToJSON(value.thumbnailInfo),
        'versionMetadataWorkspaceMicroversionId': value.versionMetadataWorkspaceMicroversionId,
        'viewHref': value.viewHref,
        'wvmId': value.wvmId,
        'wvmType': value.wvmType,
    };
}

