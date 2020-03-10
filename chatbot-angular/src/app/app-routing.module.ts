import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AgentPageComponent} from './agent-page/agent-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ChatDialogComponent} from './chat/chat-dialog/chat-dialog.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



export const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'admin', component: AgentPageComponent },
{ path: '', component: HomePageComponent },
{ path: 'chat', component: ChatDialogComponent},

// simple view to show error 404
//{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
