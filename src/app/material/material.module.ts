import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
const MaterialComponenets = [MatButtonModule, MatTabsModule];

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets]
})
export class MaterialModule {}
