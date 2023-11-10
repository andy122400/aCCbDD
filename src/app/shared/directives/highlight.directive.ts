import {
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
    Input,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective {
    @Input() highlightColor: string = 'yellow'; // Default highlight color

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null); // Clear the highlight when the mouse leaves
    }

    private highlight(color: string | null) {
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-color',
            color,
        );
    }
}
