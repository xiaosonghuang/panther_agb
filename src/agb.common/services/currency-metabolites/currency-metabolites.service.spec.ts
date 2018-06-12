/* tslint:disable:no-unused-variable */

import { CurrencymetabolitesService } from './currency-metabolites.service';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Currencymetabolites Service', () => {
  let currencymetabolitesService: CurrencymetabolitesService;

  let localStoreData = {
    "2hb[c]": "",
    "2hb[e]": "",
    "h[c]": ""
  };

  beforeAll(function() {
    localStorage.clear();
    localStorage.setItem('currency-metabolites', JSON.stringify(localStoreData));
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [CurrencymetabolitesService]
    });

    currencymetabolitesService = TestBed.get(CurrencymetabolitesService);

  });

  it('should correctly initialized', () => {
    expect(currencymetabolitesService.currencymetabolites).not.toBeNull();
  });

  it('should isCurrecymetabolite', () => {
    expect(currencymetabolitesService.isCurrency('h[c]')).toBeTruthy();
    expect(currencymetabolitesService.isCurrency('2hb[e]')).toBeTruthy();
    expect(currencymetabolitesService.isCurrency('nocurrency')).not.toBeTruthy();
  });

  afterAll(() => {
    localStorage.clear();
  });

});
