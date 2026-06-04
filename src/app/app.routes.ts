import { Routes } from '@angular/router';
import { CreateMetaComponent } from './components/metaProfiles/create/createMeta.component';
import { MetaProfilesComponent } from './components/metaProfiles/metaProfiles.component';

export const routes: Routes = [
    {
        path: "meta-profiles",
        component: MetaProfilesComponent
    }
];

