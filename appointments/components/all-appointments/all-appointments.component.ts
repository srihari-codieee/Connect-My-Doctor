import { Component, OnInit } from '@angular/core';
import { AppointService } from 'src/app/appoint.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private userData:AppointService){}

  ngOnInit(): void {

    this.getData();
  }

  users:any="";

  getData(){
    this.userData.users().subscribe((data)=>
    this.users=data);    
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }   
  
  
  // deleteAppoint(id:any){
  //   this.userData.deleteAppoint(id:any).subscribe((res:any)=>)
  // }

  // deleteAppoint(item:any){
  //  this.userData.deleteAppoint(item).subscribe((result)=>{
  //   console.warn(result)
  //  })
  // }

  deleteAppointment(users:any){
    this.userData.deleteAppointment(users).subscribe((result)=>{
         console.warn(result);
         this.getData();
        })
  }


}
