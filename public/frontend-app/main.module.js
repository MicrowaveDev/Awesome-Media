import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Ajax } from './helpers/ajax';
import { MediaService } from './services/media.service';
import {
    AppComponent,
    MediaListComponent,
    SidenavComponent
} from './components';

import {VgCore} from 'videogular2/core';
import {VgControls, VgControlsModule, VgPlayPause} from 'videogular2/controls';
import {VgOverlayPlay} from 'videogular2/overlay-play';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';

import { PreventHref } from './directives/prevent-href.directive.js';
import { AudioPlayer } from './directives/audio-player.directive.js';

import { FileUploadModule } from 'ng2-file-upload';

import { TrimPipe } from './pipes';
import { routes } from './components/app.routes';
import {UserService} from "./services/user.service";
import {SocketService} from "./services/socket.service";

import * as config from '../../config';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        MediaListComponent,
        SidenavComponent,
        //TodoHeaderComponent,
        //TodoItemComponent,
        TrimPipe,
        AudioPlayer,
        PreventHref
    ],
    imports: [
        BrowserModule,

        VgCore,
        VgControlsModule,

        FileUploadModule,

        MdSidenavModule,
        MdButtonModule,
        MdCardModule,
        MdProgressBarModule,
        MdInputModule,

        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    providers: [
        Ajax,
        MediaService,
        UserService,
        SocketService,
        { provide: 'AppConfig', useValue: config.data }
    ],
})
export class MainModule {}