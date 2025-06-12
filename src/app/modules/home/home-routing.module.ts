import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";

export const router = [
    {
        path: '', component: HomeComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(router)]
})
export class HomeRoutingModule {}