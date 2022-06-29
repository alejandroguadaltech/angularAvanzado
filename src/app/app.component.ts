import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fileURLToPath } from 'url';
import { ImagenModel } from './models/imagen.model';
import { FirestorageService } from './services/firestorage.service';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-avanzado';
  imagenList: ImagenModel[] = [];
  imagenForm = new FormGroup({
    imagen: new FormControl(''),
  }
  )
  file:any;
  constructor(private firestoreService:FirestoreService,
              private fireStorageService: FirestorageService,
    ){
  }
  ngOnInit(): void {
    this.firestoreService.getImagenes().subscribe((imagenes: ImagenModel[])=>{
      this.imagenList = imagenes;
    })
  }
  onFileSelected(event:any){
    this.file = event.target.files[0];
  }
  changeImage(){
    if(this.file){
      console.log(this.file);
      let metadata = {name:this.file.name, size:this.file.size, type: this.file.size}
      const id = this.imagenList[0].id;
      this.fireStorageService.uploadImage('images/image.png', this.file, metadata).then((response:any)=>{
        response.subscribe((element: any)=>{
          this.firestoreService.updateImagen(id, element)
        })
      }) 
    }
  }
  	

}
