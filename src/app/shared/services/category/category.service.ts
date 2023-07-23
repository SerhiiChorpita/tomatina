import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collectionData, CollectionReference, deleteDoc, doc, docData, DocumentReference, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, DocumentData } from '@firebase/firestore';
import { environment } from 'src/environments/environment';
import { ICategoryRequest, ICategoryResponse } from '../../interface/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryCollection!: CollectionReference<DocumentData>;

  constructor(
    private http: HttpClient,
    private afs: Firestore
  ) {
    this.categoryCollection = collection(this.afs, 'category');
  }


  createFirebase(category: ICategoryRequest): Promise<DocumentReference<DocumentData>> {
    return addDoc(this.categoryCollection, category)
  }

  getAllFirebase() {
    return collectionData(this.categoryCollection, { idField: 'id' })
  }

  getOneFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `category/${id}`);
    return docData(categoryDocumentReference, { idField: 'id' });
  }

  updateFirebase(category: ICategoryRequest, id: string) {
    const categoryDocumentReference = doc(this.afs, `category/${id}`);
    return updateDoc(categoryDocumentReference, { ...category });
  }

  deleteFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `category/${id}`);
    return deleteDoc(categoryDocumentReference);
  }
}
