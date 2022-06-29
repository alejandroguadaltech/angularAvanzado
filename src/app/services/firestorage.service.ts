import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private storage: AngularFireStorage) { }

  public async uploadImage(path:string, file:any, metadata?:any){
      await this.storage.upload(path,file, metadata);
      return await this.storage
        .ref(path)
        .getDownloadURL();
  }
}
