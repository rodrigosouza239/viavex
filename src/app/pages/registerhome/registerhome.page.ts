import { Component, OnInit } from '@angular/core';
const { CameraPreview } = Plugins;
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Router } from '@angular/router';
const { Camera } = Plugins;
import { Storage } from '@ionic/storage';
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.page.html',
  styleUrls: ['./registerhome.page.scss'],
})
export class RegisterhomePage{
image = null
cameraActive = false;
URLCnhFrente = null;
URLCnhVerso = null;


  constructor(public router: Router,private storage: Storage) {}

  async takePicture() {
    if(this.URLCnhFrente === this.URLCnhVerso){
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        promptLabelPhoto:'ESCOLHA UMA FOTO DA GALERIA',
        promptLabelPicture: 'TIRE UMA FOTO',
        presentationStyle: 'fullscreen',
        source:CameraSource.Camera,
      });
      var URLCnhFrente = image.base64String
      this.URLCnhFrente = `data:image/jpeg;base64,${URLCnhFrente}`;
      console.log('URLCnhFrente:',this.URLCnhFrente)
      this.storage.set('clientes_senha',URLCnhFrente)
    }else{
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        promptLabelPhoto:'ESCOLHA UMA FOTO DA GALERIA',
        promptLabelPicture: 'TIRE UMA FOTO',
        presentationStyle: 'fullscreen',
        source:CameraSource.Camera,
      });
      var URLCnhVerso = image.base64String
      this.URLCnhVerso = `data:image/jpeg;base64,${URLCnhVerso}`;
      console.log('URLCnhVerso:',this.URLCnhVerso)
      this.storage.set('clientes_senha',URLCnhVerso)
      this.router.navigate(['registerdocuments']);
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
