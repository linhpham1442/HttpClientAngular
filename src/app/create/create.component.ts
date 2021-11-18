import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:ActivatedRoute, private router: Router) { }

errormsg: any;
successmsg: any;
getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.route.snapshot.paramMap.get('id');
    if (this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.patchValue({
          fullname: res.data[0].fullname,
          email: res.data[0].email,
          mobile: res.data[0].mobile
        });
      });
    }
    
  }

  userForm = new FormGroup({
  'fullname': new FormControl('', Validators.required),
  'email': new FormControl('', Validators.required ),
  'mobile': new FormControl('', Validators.required)
  });
  // create new user 
  public userSubmit(){
    if (this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
        setTimeout(()=>{
          this.goToRead();
        }, 1000)
      })
    } else {
      this.errormsg = 'all field is required !';
    }
  }

  // updatedata
  public userUpdate(){
    console.log(this.userForm.value,'updatedform');
    if(this.userForm.valid){
      this.service.updateData(this.userForm.value, this.getparamid).subscribe((res)=>{
        this.successmsg = res.message;
        setTimeout(()=>{
          this.goToRead();
        }, 1000)
      })
    }else {
      this.errormsg = 'all field is required'
    }
  }

  public goToRead(){
    this.router.navigate(['/read']);
  }

}
