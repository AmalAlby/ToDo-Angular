import { Component } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  userId=""
  id=""
  title=""
  completed=""


  read=()=>{
    let data:any={
      "userId":this.userId,
      "id":this.id,
      "title":this.title,
      "completed":this.completed
    }
    console.log(data)
  }
}
