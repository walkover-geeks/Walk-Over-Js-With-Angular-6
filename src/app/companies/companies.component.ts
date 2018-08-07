import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
	public companies;

	public myForm: FormGroup;

	constructor(private fb: FormBuilder, private companyService: CompanyService) {
		this.myForm = this.createUserForm();
	}

	ngOnInit() {
		this.getCompanies();
		console.log(this.companies);
	}

	getCompanies() {
		this.companies = this.companyService.getCompanies();
	}

	private createUserForm() {
		return this.fb.group({
			name: ['', Validators.required],
			email: '',
			mobile: '',
			gender: '',
			city: '',
			hobbies: '',
			address: '',
		});
	}

	public onSubmit(data) {
	console.log('the form data is :', data);
	}
}