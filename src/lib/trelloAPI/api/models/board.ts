import type {Limits} from './limits';
import type {Preferences} from './preferences';
import type {TrelloID} from './trelloID';
import type {List} from './list';

export interface Board {
    id: TrelloID;
    /** The name of the board. */
    name?: string;
    desc?: string;
    descData?: string;
    closed?: boolean;
    idMemberCreator?: TrelloID;
    idOrganization?: TrelloID;
    pinned?: boolean;
    url?: string;
    shortUrl?: string;
    prefs?: Preferences;
    labelNames?: {
        green?: string;
        yellow?: string;
        orange?: string;
        red?: string;
        purple?: string;
        blue?: string;
        sky?: string;
        lime?: string;
        pink?: string;
        black?: string;
    };
    lists?: List[];
    limits?: Limits;
    starred?: boolean;
    memberships?: string;
    shortLink?: string;
    subscribed?: boolean;
    powerUps?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    idTags?: string;
    datePluginDisable?: string;
    creationMethod?: string;
    ixUpdate?: number;
    templateGallery?: string;
    enterpriseOwned?: boolean;
}
