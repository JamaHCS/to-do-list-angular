import { ListComponent } from './components/list/list.component';
import {DetailsComponent} from "./components/details/details.component";
import {TodoComponent} from "./todo.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch:'full'
  },
  {
    path: "",
    component: TodoComponent,
    children: [
      {
        path: "list",
        component: ListComponent
      },
      {
        path: "details/:id",
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
