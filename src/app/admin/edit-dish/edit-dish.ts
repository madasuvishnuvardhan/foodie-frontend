import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-dish',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-dish.html'
})
export class EditDish implements OnInit {
  editDishForm!: FormGroup;
  dishId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dishId = this.route.snapshot.paramMap.get('id')!;
    this.editDishForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['']
    });

    // Load existing dish details
    this.http.get<any>(`http://localhost:3000/dishes/${this.dishId}`).subscribe(data => {
      this.editDishForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.editDishForm.valid) {
      this.http.put(`http://localhost:3000/dishes/${this.dishId}`, this.editDishForm.value)
        .subscribe(() => {
          alert('Dish updated successfully');
          this.router.navigate(['/view-dishes']);
        });
    }
  }
}
