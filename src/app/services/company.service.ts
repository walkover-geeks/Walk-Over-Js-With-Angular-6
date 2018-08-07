import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { environment } from '../../environments/environment';
 
@Injectable()

export class CompanyService {
	constructor(private http: HttpClient) { }

	getCompanies(): Observable<any> {
		console.log(`${environment.api_url}companies?mobile=${this.getMobileNumber() == null ? '' : this.getMobileNumber()}`);
		return this.http.get(`${environment.api_url}companies?mobile=${this.getMobileNumber() == null ? '' : this.getMobileNumber()}`);
	}

	getCompany(id: number) {
		return this.http.get(`${environment.api_url}companies/${id}?mobile=${this.getMobileNumber() == null ? '' : this.getMobileNumber()}`);
	}

	setMobileNumber(mobile:any) {
	    localStorage.setItem('mobile', mobile);
	}
	getMobileNumber() {
	    return localStorage.getItem('mobile');
	}
}