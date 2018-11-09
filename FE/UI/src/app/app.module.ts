import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { CandidateElementComponent } from './table-list/candidate-element/candidate-element.component';
import { ApiServices } from './services/api.services'
import { FilterUtils } from './lib/FilterUtils'
import { ChartModule } from 'angular-highcharts';
import { LoginComponent } from './login/login.component'
import { DatePipe } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircularProgressComponent } from './circular-progress/circular-progress.component'
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularFire2';
import { environment } from 'environments/environment';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatFormFieldModule } 
from '@angular/material';
import { CandidateDetailsComponent } from './table-list/candidate-details/candidate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TableListComponent,
    LoginComponent,
    CircularProgressComponent,
    CandidateElementComponent,
    CandidateDetailsComponent
  ],
  entryComponents: [
    CandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,MatToolbarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    AngularFireAuthModule,AngularFireModule.initializeApp(environment.firbase)
  ],
  providers: [ApiServices, FilterUtils, { provide: LocationStrategy, useClass: HashLocationStrategy },DatePipe,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
