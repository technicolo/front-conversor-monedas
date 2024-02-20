import { Injectable, inject } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/API';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  auth = inject(AuthService);

  async getAllCurrencies(): Promise<Currency[]> {
    const res = await fetch(API + 'Currency', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    const data = await res.json();
    return data;
  }

  async getCurrencyById(id: number | string): Promise<Currency | undefined> {
    try {
      const res = await fetch(API + 'Currency/' + id, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + this.auth.token(),
        },
      });
      if (!res.ok) {
        throw new Error('Error fetching subscription');
      }
      return await res.json();
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }


  async getFavoriteCurrencies(): Promise<Currency[]> {
    const res = await fetch(API + 'Currency/favorite', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    const data = await res.json();
    return data;
  }

  async addFavoriteCurrency(currencyId: number | string): Promise<boolean> {
    const res = await fetch(API + 'Currency/favorite/' + currencyId, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return res.ok;
  }

  async deleteFavoriteCurrency(currencyId: number | string): Promise<boolean> {
    const res = await fetch(API + 'Currency/favorite/' + currencyId, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return res.ok;
  }
}
