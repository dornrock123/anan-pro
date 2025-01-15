import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface User {
  id: number;              // รหัส
  username: string;        // ชื่อผู้ใช้
  password: string;           // password
  email: string;           // อีเมล
  role: string;           // role
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    // สร้าง FormGroup สำหรับฟอร์ม
    registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

  user: User[] = [];
  error = '';                       // ข้อความ error

  // URL สำหรับเรียก API
  private apiUrl = 'http://127.0.0.1:5000/api/register'; // API URL โดยตรง

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  Submit(): void {
    if (this.registerForm.valid) {
      // ส่งข้อมูลฟอร์มไปยัง API
      this.http.post(this.apiUrl, this.registerForm.value).subscribe({
        next: (response: any) => {
          alert(response.message); // แจ้งผลลัพธ์
        },
        error: (err: any) => {
          alert(err.error.message || 'An error occurred'); // แจ้งข้อผิดพลาด
        },
      });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

    // // ฟังก์ชันดึงข้อมูลแว่น
    // fetchUserData(): void {

    //   this.http.get<any>(this.apiUrl)
    //     .subscribe({
    //       next: (response) => {
    //         if (response.status === 'success') {
    //           this.user = response.data.map((user: any) => ({
    //             ...user,
    //             showDetails: false
    //           }));
    //         } else {
    //           this.error = 'Failed to fetch data';
    //         }
    //       },
    //       error: (error) => {
    //         this.error = error.message || 'An error occurred';
    //       }
    //     });
    // }

}
