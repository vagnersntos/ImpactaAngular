import { NgModule } from '@angular/core';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FilhoComponent } from './filho/filho.component';
import { PaiComponent } from './pai/pai.component';
import { OutputPaiComponent } from './output-pai/output-pai.component';
import { OutputFilhoComponent } from './output-filho/output-filho.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { PipeComponent } from './pipe/pipe.component';
import { RaizQuadrada } from './pipe-raiz-quadrada';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormModelComponent } from './form-model/form-model.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    FilhoComponent,
    PaiComponent,
    OutputPaiComponent,
    OutputFilhoComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    AlterarTextoDirective,
    PipeComponent,
    RaizQuadrada,
    FormTemplateComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
