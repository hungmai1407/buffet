import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';
import { MusicAppComponent } from './pages/music-app/music-app.component';
import { NavBarComponent } from './blocks/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    MusicAppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
