import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { WriterDashboardModule } from './layout/writer-dashboard/writer-dashboard.module';
import { WriterService } from './layout/writer-dashboard/writer.service';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ComponentsModule,
    LayoutModule,
    RegistrationModule,
    FormsModule,
    ReactiveFormsModule,
    WriterDashboardModule,
    HttpClientModule,
    NgxStarRatingModule,
  ],
  providers: [WriterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
