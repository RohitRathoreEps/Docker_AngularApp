import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
ToRunTheLogic() {
debugger;
let arr = [10, 25, 7, 99, 43];

let largest = arr[0];   // assume first value is largest
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

}
}
