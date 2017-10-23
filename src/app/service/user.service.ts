import { Injectable } from '@angular/core'
import { Product, Condition } from '../product.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import { Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductService{
    constructor(private http: HttpClient){}
    
    getProducts():Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:8080/products');
    }

    deleteProducts(id: String){
        return this.http.delete('http://localhost:8080/delete/' + id);
    }

    getProduct(id):Observable<Product>{
        return this.http.get<Product[]>('http://localhost:8080/products').mergeMap(p => p).filter(p => p._id === id);
    }

    createProduct(product: Product){
        return this.http.post('http://localhost:8080/create', product);
    }
    // getProducts():Promise<Product[]> {
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/products')
    //             .then(function(res) {
    //                 resolve(res.json());
    //             })
    //     })
    // }

    // deleteProducts(id: String){
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/delete/' + id, {method: 'DELETE'})
    //             .then(function(res){
    //                 resolve();
    //             }).catch(err => reject(err));
    //     })
    // }

    // createProduct(product: Product){
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/create', { 
    //             method: 'POST', 
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(product)
    //         })
    //             .then(res => resolve())
    //             .catch(err => reject(err));
    //     })
    // }
}