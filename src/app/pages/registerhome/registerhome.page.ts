import { Component, OnInit } from '@angular/core';
const { CameraPreview } = Plugins;
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.page.html',
  styleUrls: ['./registerhome.page.scss'],
})
export class RegisterhomePage{
image = null
cameraActive = false;


  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      promptLabelPhoto:'ESCOLHA UMA FOTO DA GALERIA',
      promptLabelPicture: 'TIRE UMA FOTO',
      presentationStyle: 'fullscreen',
      source:CameraSource.Camera,
    });
    
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
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
     this.stopCamera();
  }

  flipCamera(){
    CameraPreview.flip();
  }

}
