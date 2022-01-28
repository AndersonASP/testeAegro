import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//prime NG
import { AccordionModule } from 'primeng/accordion';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


//DIRETIVAS
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CarouselModule} from "primeng/carousel";
import {IconComponent} from "./icon/icon.component";
import {IconMapComponent} from "./icon-map/icon-map.component";
import {SvgIconComponent} from "./svg-icon/svg-icon.component";

//

@NgModule({
  declarations: [
    IconComponent,
    IconMapComponent,
    SvgIconComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    //prime NG
    PaginatorModule,
    DataViewModule,
    CardModule,
    AccordionModule,
    DynamicDialogModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextareaModule,
    CarouselModule,

    FormsModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    BreadcrumbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,


    //prime NG
    PaginatorModule,
    DataViewModule,
    CardModule,
    RadioButtonModule,
    CheckboxModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    InputTextareaModule,
    CarouselModule,
    IconComponent

  ],
  providers: [DialogService],
})
export class SharedModule {}
