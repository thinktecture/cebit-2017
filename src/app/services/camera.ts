import {Observable} from 'rxjs/Observable';
import {DesktopCameraService} from './desktopCamera';
import {MobileCameraService} from './mobileCamera';
import {PlatformService} from './platform';
import {NgZone} from '@angular/core';

export interface ICameraService {
    getPhoto(): Observable<string>;
}

export abstract class CameraService implements ICameraService {
    public abstract getPhoto(): Observable<string>;
}

export function cameraServiceFactory(platformService: PlatformService, zone: NgZone): ICameraService {
    if (platformService.isMobileDevice) {
        return new MobileCameraService(zone);
    }

    return new DesktopCameraService();
}
