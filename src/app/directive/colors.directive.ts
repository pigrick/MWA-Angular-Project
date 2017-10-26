
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
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.changeColor('white');
    }
    private changeColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}