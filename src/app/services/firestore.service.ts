import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImagenModel } from '../models/Imagen.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  public getImagenes(): Observable<ImagenModel[]> {
    return this.firestore
      .collection('imagenes')
      .valueChanges()
      .pipe(map(this.treatData));
  }

  public updateImagen(id:number, src:string):void{
    this.firestore.doc(`imagenes/${id}`).update({src:src});
  }

  private treatData(data: any[]): ImagenModel[] {
    return data.map((item: any) => (
      {id: item.id, src: item.src}
    ));
  }

}
