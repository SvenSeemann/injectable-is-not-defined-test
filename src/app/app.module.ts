import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppInsightsService, ApplicationInsightsModule} from '@markpieszak/ng-application-insights';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationInsightsModule.forRoot({
      instrumentationKeySetLater: true
    })
  ],
  providers: [AppService, AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
