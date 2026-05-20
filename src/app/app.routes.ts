import { Routes } from "@angular/router";
import { Detalhes } from "./components/detalhes/detalhes";
import { App } from "./app";
import { Home } from "./components/home/home";

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'detalhes/:slug', component: Detalhes },
];