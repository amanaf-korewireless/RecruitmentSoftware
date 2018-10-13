import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  endpoints: {
    atollEndpoint: 'http://freshers.gadgeon.com/',
    serverIp: 'http://Freshers.gadgeon.com/student'
  }
};
