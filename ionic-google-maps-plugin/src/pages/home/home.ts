import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapOptions, GoogleMaps, Marker, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let that = this;

    this.map = GoogleMaps.create("map_canvas");

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log("READY");

        that.map.addMarker({
            title: 'Inana',
            icon: 'red',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          }).then((marker: Marker) => {
            marker.showInfoWindow();
          });

        console.log(that.map);
    });
  }
}
