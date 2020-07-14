import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicDiv]',
})
export class DynamicDivDirective implements OnInit {
  @Input() value: number;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const div = this.renderer.createElement('div');
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Click' + ' ' + this.value);

    this.renderer.appendChild(button, text);
    this.renderer.appendChild(div, button);
    this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.addClass(this.el.nativeElement, 'content-inside');
    this.renderer.addClass(this.el.nativeElement, 'd-flex');
    this.renderer.addClass(this.el.nativeElement, 'align-items-center');
    this.renderer.addClass(this.el.nativeElement, 'justify-content-center');
    this.el.nativeElement
      .querySelector('button')
      .addEventListener('click', this.showAlert.bind(this));
  }

  showAlert() {
    alert('Button' + ' ' + this.value + ' ' + 'clicked');
  }
}
