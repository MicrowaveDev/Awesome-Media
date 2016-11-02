export * from '../../node_modules/es6-shim/es6-shim.min';
export * from '../../node_modules/es6-promise/dist/es6-promise.min';
export * from '../../node_modules/reflect-metadata/Reflect';
export * from '../../node_modules/zone.js/dist/zone.min';
export * from '../../node_modules/zone.js/dist/long-stack-trace-zone.min';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs';

import { MainModule } from './main.module';

platformBrowserDynamic().bootstrapModule(MainModule);