import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen=false;
    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }
    constructor(){

    }
}

// @HostBinding('class.open') isOpen=false;
// @HostListener('document:click,this.elRef') toggleOpen(){
//     this.isOpen=this.elRef.nativeElement
// }
// constructor(private elRef:ElementRef){

// }