import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Aplicacion Riego',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sobre la App',
      url: '/about',
      icon: 'shapes'
    },
    {
      title: 'Ayuda',
      url: '/help',
      icon: 'help'
    }
/*     {
      title: 'Dynamic Chart',
      url: '/dynamic',
      icon: 'pie'
    } */
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
