import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public map: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.loadMap();
  }

  loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 8,
      center: [116.39,39.9]
    });
  }

}
