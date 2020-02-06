import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: "<my-shell></my-shell>",
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class AppComponent {}
