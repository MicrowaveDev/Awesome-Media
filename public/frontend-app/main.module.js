import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Ajax } from './helpers/ajax';
import { MediaService } from './services/media.service';
import {
    AppComponent,
    MediaComponent,
    LeftSidenavComponent
} from './components';

import {VgCore} from 'videogular2/core';
import {VgControls, VgControlsModule, VgPlayPause} from 'videogular2/controls';
import {VgOverlayPlay} from 'videogular2/overlay-play';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';
import { MdIconModule } from '@angular2-material/icon';

import { PreventHref } from './directives/prevent-href.directive.js';
import { AudioPlayer } from './directives/audio-player.directive.js';

import { FileUploadModule } from 'ng2-file-upload';

import { TrimPipe } from './pipes';
import { routes } from './components/app.routes';
import {UserService} from "./services/user.service";
import {SocketService} from "./services/socket.service";

import * as config from '../../config';
import {MediaList} from "./directives/media-list.directive";
import {LoadMedia} from "./broadcasters/load-media";
import {Broadcaster} from "./broadcasters/broadcaster";
import {PlayMedia} from "./broadcasters/play-media";
import {RightSidenavComponent} from "./components/right_sidenav/right_sidenav.component";
import {PlaylistService} from "./services/playlist.service";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        MediaComponent,
        LeftSidenavComponent,
        RightSidenavComponent,
        MediaList,
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
        MdIconModule,

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
        PlaylistService,
        SocketService,
        MdIconRegistry,
        Broadcaster,
        LoadMedia,
        PlayMedia,

        { provide: 'AppConfig', useValue: config.data }
    ],
})
export class MainModule {}