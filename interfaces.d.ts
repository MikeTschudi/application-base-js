import Portal = require("esri/portal/Portal");
import PortalItem = require("esri/portal/PortalItem");
import PortalQueryResult = require("esri/portal/PortalQueryResult");

export interface ApplicationConfigs {
  application?: ApplicationConfig;
  config: ApplicationConfig;
  local?: ApplicationConfig;
  url?: ApplicationConfig;
}

export interface ApplicationConfig {
  appid?: string;
  basemapUrl?: string;
  basemapReferenceUrl?: string;
  center?: string;
  components?: string;
  embed?: boolean;
  extent?: string;
  find?: string;
  group?: string | string[];
  helperServices?: any;
  level?: string;
  marker?: string;
  oauthappid?: string;
  portalUrl?: string;
  proxyUrl?: string;
  title?: string;
  viewpoint?: string;
  webmap?: string | string[];
  webscene?: string | string[];
  [propName: string]: any;
}

export interface ApplicationBaseSettings {
  environment: {
    isEsri?: boolean;
    webTierSecurity?: boolean;
  };
  localStorage?: {
    fetch?: boolean;
  };
  group?: {
    default?: string;
    itemParams?: {
      [propname: string]: any;
    };
    fetchItems?: boolean;
    fetchInfo?: boolean;
    fetchMultiple?: boolean;
  };
  portal?: {
    fetch?: boolean;
  };
  urlParams?: string[];
  webmap?: {
    default?: string;
    fetch?: boolean;
    fetchMultiple?: boolean;
  };
  webscene?: {
    default?: string;
    fetch?: boolean;
    fetchMultiple?: boolean;
  }
}

export interface ApplicationBaseResult {
  error?: Error;
  value: any;
  promise: IPromise<any>;
}

export interface ApplicationBasePortalItemResult extends ApplicationBaseResult {
  value: PortalItem;
  promise: IPromise<PortalItem>;
}

export interface ApplicationBasePortalQueryResult extends ApplicationBaseResult {
  value: PortalQueryResult;
  promise: IPromise<PortalQueryResult>;
}

export interface ApplicationBaseResults {
  applicationItem?: ApplicationBasePortalItemResult;
  applicationData?: ApplicationBaseResult;
  groupInfos?: ApplicationBasePortalQueryResult;
  groupItems?: ApplicationBasePortalQueryResult;
  localStorage?: ApplicationConfig;
  portal?: Portal;
  urlParams?: ApplicationConfig;
  webMapItems?: ApplicationBasePortalItemResult[];
  webSceneItems?: ApplicationBasePortalItemResult[];
}

export interface ApplicationProxy {
  sourceUrl: string,
  proxyUrl: string,
  proxyId: string
}
