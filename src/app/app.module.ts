import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, AppComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponents } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, ...AppComponents, ...SharedComponents],
	imports: [BrowserModule, AppRoutingModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
