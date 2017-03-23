import {Component} from '@angular/core';
import {CameraService} from '../../services/camera';

@Component({
  selector: 'app-mirror',
  templateUrl: 'mirror.html',
  styleUrls: ['mirror.scss']
})
export class MirrorComponent {
  public photo: any;

  constructor(private _camera: CameraService) {
  }

  public takePhoto() {
    this._camera.getPhoto()
      .subscribe(photo => {
          this.photo = photo;
      });
  }
}
