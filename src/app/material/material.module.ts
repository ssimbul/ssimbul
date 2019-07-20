import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material";

const MaterialComponenets = [MatButtonModule];

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets]
})
export class MaterialModule {}
