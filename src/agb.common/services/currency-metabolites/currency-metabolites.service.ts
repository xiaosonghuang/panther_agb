import { Injectable } from '@angular/core';

/**
 * Service to check is metabolite currency or not
 */
@Injectable()
export class CurrencymetabolitesService {

  currencymetabolites: { [key: string]: string }

  constructor() {
    this.loadCurrecymetabolites();
  }

  /**
   * Loads currency metabolites from localStorage
   */
  private loadCurrecymetabolites(): void {
    let collection = 'currency-metabolites';
    this.currencymetabolites = JSON.parse(localStorage.getItem(collection));
  }

  /**
   * Check that is metabolite currency
   * @param  {string}  metabolite name of metabolite
   * @return {boolean}            is metabolite currency or not
   */
  isCurrency(metabolite: string): boolean {
    return Boolean(metabolite in this.currencymetabolites);
  }

}
