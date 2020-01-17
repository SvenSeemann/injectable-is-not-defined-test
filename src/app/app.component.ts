import {Component} from '@angular/core';
import {AppInsightsService} from '@markpieszak/ng-application-insights';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly _appInsightService: AppInsightsService,
    private readonly _appService: AppService
  ) {
    console.log(this._appInsightService);
    this._appService.foo();
  }
}
