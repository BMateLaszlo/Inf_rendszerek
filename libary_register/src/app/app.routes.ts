import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { ExpiredReturnComponent } from './expired-return/expired-return.component';


export const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'users', component: UsersComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'expired-return', component: ExpiredReturnComponent}
];