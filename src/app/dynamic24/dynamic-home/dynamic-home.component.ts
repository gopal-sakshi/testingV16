import { Component } from '@angular/core';
import { model } from '../fields23';

@Component({
    selector: 'app-dynamic-home',
    templateUrl: './dynamic-home.component.html',
    styleUrls: ['./dynamic-home.component.scss']
})
export class DynamicHomeComponent {
    model:any = model
}
