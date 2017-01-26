import { NgModule }     from '@angular/core';

import { BhatestHolaComponent } from './components/bhatest-hola.component'
import { BhatestHolaService } from './services/bhatest-hola.service'

@NgModule({
  declarations: [
    BhatestHolaComponent
  ],
  exports: [BhatestHolaComponent],
  imports: [],
  providers: [BhatestHolaService]
})
export class BhatetsAnModule {}