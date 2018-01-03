import { Component } from "@angular/core"
@Component({
     selector: "user-app",
     template: `
               <div><h1>Hello {{variable}}</h1></div> 
               <div><test-app>My name is Phuc </test-app></div>       
`
})

export class AppComponent {
    variable ="Angular";
}