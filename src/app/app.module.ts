import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestService } from './test-service';
import { MatchDemoComponent } from './match-demo/match-demo.component';
import { TeamComponent } from './match-demo/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchDemoComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
