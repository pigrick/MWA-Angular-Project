
import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[colorChange]'
})
export class ColorsDirective {
    @Input('colorChange') myColor
    constructor(private el: ElementRef) {}

    @HostListener('mouseenter')
    onMouseEnter() {
        this.changeColor(this.myColor);
        this.changeBold(true);
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.changeColor(null);
        this.changeBold(false);
    }
    private changeColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    private changeBold(boolean : Boolean){
        if(boolean) {
            this.el.nativeElement.style.fontWeight = 'bold';
        } else {
            this.el.nativeElement.style.fontWeight = 'normal';
        }
    }
}