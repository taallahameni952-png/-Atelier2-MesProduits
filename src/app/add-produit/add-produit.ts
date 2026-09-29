import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css'
})
export class AddProduit {

  newProduit = new Produit();

  constructor(private produitService: ProduitService) {
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
    console.log(this.newProduit);
  }
}