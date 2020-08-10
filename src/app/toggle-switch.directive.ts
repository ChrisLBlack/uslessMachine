import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleSwitch]'
})
export class ToggleSwitchDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  private elmArray: Event[] = [];

  @HostListener('click', ['$event'])
    toggleOnSwitch(): void {
      this.renderer.setAttribute(event.target, 'class',
       `on ${this.getClassList(this.elementRef.nativeElement.getAttribute('class'), 'off')}`);
      this.elmArray.push(event);
      const eventIndex = this.elmArray.indexOf(event);
      setTimeout(() => {
        this.toggleOffSwitch(eventIndex);
      }, 1000);
    }

    toggleOffSwitch(eventIndex: number): void {
      const elm = this.elmArray[eventIndex].target;
      this.renderer.setAttribute(elm, 'class', 
      `off ${this.getClassList(this.elementRef.nativeElement.getAttribute('class'), 'on')}`);
    }

    getClassList(arr: Array<string>, str: string): string {
      let classes: Array<string> = [];
      let classListString: string = '';
      classes.push(this.elementRef.nativeElement.getAttribute('class'));
      classes = classes[0].split(" ").filter(x => x !== str);
      classListString = classes.join(" ");
      return classListString;
    }

}
