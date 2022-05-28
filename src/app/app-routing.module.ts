import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './blocks/home/home.component';
import { MusicAppComponent } from './pages/music-app/music-app.component';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';

const routes: Routes = [
  {
    path: 'todo-app',
    component: TodoAppComponent,
  },
  {
    path: 'music-app',
    component: MusicAppComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
