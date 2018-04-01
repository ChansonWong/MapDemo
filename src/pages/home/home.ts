import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.loadMap();
  }

  loadMap() {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 15 // 定位后放大15倍
    });
    map.plugin(['AMap.Geolocation'], function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition:'RB'
      });

      console.log("来到这里吗？");
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', function (data) {
        console.log(data.position.getLat());
      });//返回定位信息
      AMap.event.addListener(geolocation, 'error', function (data) {
        console.log("定位失败！")
      });//返回定位出错信息
    });
  }

  onComplete(data){
    console.log(data.position.getLat());
  }

  onError(data) {
    console.log("定位失败！")
  }

}
