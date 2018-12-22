import { Directive ,ElementRef,Renderer} from '@angular/core';


@Directive({
  selector: '[appMakeBorder]'
})
export class MakeBorderDirective {

  constructor(public myElementref: ElementRef,public myRenderer: Renderer) {
    this.myRenderer.setElementStyle(this.myElementref.nativeElement,"text-decoration","underline")
   }

}
