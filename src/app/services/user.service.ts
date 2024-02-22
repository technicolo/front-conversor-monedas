import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API } from '../constants/API';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService{

  async getAll(): Promise<User[]> {
    const res = await fetch(API + 'User', {
      headers: {
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    const data = await res.json();
    return data;
  }
  
  async getUserById(id: number): Promise<User> {
    const res = await fetch(API + 'User/' + id, {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.auth.token(),
      },
    });
    return await res.json();
  }

  async editUserSubscription(userId: number, subscriptionId: number): Promise<boolean> {
    const res = await fetch(API + 'User/' + userId, {
      method: 'PATCH',
      headers: {
          Authorization: 'Bearer ' + this.auth.token(),
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriptionId), // Enviar subscriptionId directamente
    });
    return res.ok;
  }
  
}