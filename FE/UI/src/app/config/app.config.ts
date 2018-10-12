import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  endpoints: {
    atollEndpoint: 'http://18.235.147.822/',
    serverIp: 'http://18.235.147.82/student'
  }
};
