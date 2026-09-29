import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  imports: [DatePipe],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits {

  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.listeProduits();
  }
}