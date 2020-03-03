import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { ScullyLibModule } from "@scullyio/ng-lib";

import { ApiService } from "./api.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ScullyLibModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
