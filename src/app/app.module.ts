import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';
import { MusicAppComponent } from './pages/music-app/music-app.component';
import { NavBarComponent } from './blocks/nav-bar/nav-bar.component';
import { HomeComponent } from './blocks/home/home.component';
import { ListItemComponent } from './pages/music-app/component/list-item/list-item.component';
import { PlayItemComponent } from './pages/music-app/component/play-item/play-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    MusicAppComponent,
    NavBarComponent,
    HomeComponent,
    ListItemComponent,
    PlayItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
