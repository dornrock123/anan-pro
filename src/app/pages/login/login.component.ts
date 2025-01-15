import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // ตรวจสอบ Login (คุณสามารถเพิ่มตรรกะตรวจสอบผู้ใช้ตรงนี้)
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      this.router.navigate(['/dashboard']); // ไปที่หน้า Dashboard
    } else {
      alert('Invalid login credentials');
    }
  }
}
