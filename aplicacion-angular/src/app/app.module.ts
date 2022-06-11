import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule } from '@angular/forms';

import { InvitadoGuard } from './guards/invitado.guard';
import { UsuariosGuard } from './guards/usuarios.guard';
import { AdministradorGuard } from './guards/administrador.guard';
import { NoInvitadoGuard } from './guards/no-invitado.guard';
import { NoUsuariosGuard } from './guards/no-usuarios.guard';
import { NoAdministradorGuard } from './guards/no-administrador.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroCuentaComponent } from './components/registro-cuenta/registro-cuenta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { HomeComponent } from './components/home/home.component';
import { AutenticacionTelefonoComponent } from './components/autenticacion-telefono/autenticacion-telefono.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { CamposVaciosPipe } from './pipes/campos-vacios.pipe';
import { ListaRecetasComponent } from './components/lista-recetas/lista-recetas.component';
import { NumeroPersonasPipe } from './pipes/numero-personas.pipe';
import { AgregarRecetaComponent } from './components/agregar-receta/agregar-receta.component';
import { EditarRecetaComponent } from './components/editar-receta/editar-receta.component';
import { EliminarRecetaComponent } from './components/eliminar-receta/eliminar-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioSesionComponent,
    RegistroCuentaComponent,
    ContactoComponent,
    AyudaComponent,
    HomeComponent,
    AutenticacionTelefonoComponent,
    ListaUsuariosComponent,
    CamposVaciosPipe,
    ListaRecetasComponent,
    NumeroPersonasPipe,
    AgregarRecetaComponent,
    EditarRecetaComponent,
    EliminarRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    FormsModule
  ],
  providers: [
    InvitadoGuard,
    UsuariosGuard,
    AdministradorGuard,
    NoInvitadoGuard,
    NoUsuariosGuard,
    NoAdministradorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }