import { MediaListComponent } from './media-list/media-list.component';

export let routes = [
    { path: '', component: MediaListComponent, pathMatch: 'full' },
    { path: ':status', component: MediaListComponent }
];