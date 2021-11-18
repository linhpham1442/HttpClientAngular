import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { User } from '../User';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  public readData: any;
  successmsg: any;
  ngOnInit(): void {
    this.getAllData();
  }

  // getdeleteid

  deleteID(id:any){
    this.service.deleteData(id).subscribe((res)=>{
      this.successmsg = res.message;
      this.getAllData();
    })
  }

  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      this.readData = res.data;
    });
  }

}
