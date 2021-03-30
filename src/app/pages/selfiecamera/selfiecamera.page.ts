import { Component, OnInit } from '@angular/core';
const { CameraPreview } = Plugins;
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Router } from '@angular/router';
const { Camera } = Plugins;
import { Storage } from '@ionic/storage';
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-selfiecamera',
  templateUrl: './selfiecamera.page.html',
  styleUrls: ['./selfiecamera.page.scss'],
})
export class SelfiecameraPage implements OnInit {

image = null
cameraActive = false;
Selfieurl = null;


  constructor(public router: Router,private storage: Storage) { }

  ngOnInit() {
  }

  async takePicture() {
    if(this.Selfieurl === this.Selfieurl){
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        promptLabelPhoto:'ESCOLHA UMA FOTO DA GALERIA',
        promptLabelPicture: 'TIRE UMA FOTO',
        presentationStyle: 'fullscreen',
        source:CameraSource.Camera,
      });
      var Selfieurl = image.base64String
      this.Selfieurl = `data:image/jpeg;base64,${Selfieurl}`;
      console.log('Selfieurl:',this.Selfieurl)
      this.storage.set('clientes_senha',Selfieurl)
      this.router.navigate(['registerhomeenviar']);
    }
  }



  camera(){
     const cameraPreviewOptions: CameraPreviewOptions ={
       position: 'rear',
       parent: 'cameraPreview',
       className: 'cameraPreview'
     };
     CameraPreview.start(cameraPreviewOptions);
     this.cameraActive = true;
  }

  async stopCamera(){
     await CameraPreview.stop();
     this.cameraActive = false
  }

 async captureImage(){
     const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
           quality: 90
     };
     const result = await CameraPreview.capture(cameraPreviewPictureOptions);
     this.image = `data:image/jpeg;base64,${result.value}`;
     console.log(this.image)
     this.stopCamera();
  }

  flipCamera(){
    CameraPreview.flip();
  }

}
