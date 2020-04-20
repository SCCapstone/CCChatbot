import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AgentPageComponent} from './agent-page/agent-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ChatDialogComponent} from './chat/chat-dialog/chat-dialog.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { DownloadComponent } from './download/download.component';
import { AuthGuard } from './core/auth.guard';
import { AboutComponent } from './about/about.component';




export const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'calendar', component: AgentPageComponent },
{ path: '', component: HomePageComponent },
{ path: 'chat', component: ChatDialogComponent},
{ path: 'download', component: DownloadComponent, canActivate: [AuthGuard]}, // logged in users cannot access downloadable code
{ path: 'about', component: AboutComponent},  

// simple view to show error 404
//{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
