import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicHomeComponent } from './dynamic-home/dynamic-home.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from './dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxsComponent } from './dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component';
import { DynamicErrorComponent } from './dynamic-error/dynamic-error.component';

const routes23: Routes = [
    { path: '', component: DynamicHomeComponent }
]

@NgModule({
    declarations: [
        DynamicHomeComponent,
        DynamicFieldComponent,
        DynamicFormComponent,
        DynamicInputComponent,
        DynamicSelectComponent,
        DynamicRadioComponent,
        DynamicCheckboxsComponent,
        DynamicErrorComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes23),
        ReactiveFormsModule
    ]
})
export class Dynamic24Module { }
