import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];

  constructor(private todoProv: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProv.getTodos();
  }

  openTodoAlert(){
    let addToDoAlert = this.alertController.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Remove",
          handler: ()=>{
            while(this.todos.length>0){
             this.todos.pop();
            }
          }
        },
        {
           text: "Cancel" 
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            //this.todos.push(todoText);
            this.todoProv.addTodo(todoText);
          }
        }
      ]
    });

    addToDoAlert.present();
  }

}
