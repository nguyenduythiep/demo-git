import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  constructor(){

    this.myFunction1();
    this.myFunction();
    this.thiep();
  }

  myFunction1() {
    const stringArray = ["hello","hello","hello","hello","hello"];
    const array = [];


   stringArray.forEach((e, i) => {
    const newChars = e.split('');
    const newValue = newChars[0] + newChars[1] + newChars[2];
    array.push(newValue);
    console.log('newChars', newChars);
    console.log('i', i);
   });
   console.log('array 1', array);

  }

   myFunction() {
    let stringArray = ["hello","hello","hello","hello","hello"];
    const array = [];


   stringArray.forEach((e, i) => {
    const newValue = e.substr(0,3);
    array.push(newValue);
    console.log('e', e);
    console.log('i', i);
   });
   stringArray = array;
   console.log('stringArray 2', stringArray);

  }
  thiep(){
    const stringArray = ["hello","hello","hello","hello","hello"];

    for(var i=0;i< stringArray.length; i++){

    stringArray[i] = stringArray[i].substr(0,3);

    }
    console.log('stringArray 3', stringArray);
  }
}





