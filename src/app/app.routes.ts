import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard/dashboard';

export const routes: Routes = [

    {
        path: '',
        component:Login
    },
    {
        path: 'dashboard',
        component: Dashboard
    }

];
