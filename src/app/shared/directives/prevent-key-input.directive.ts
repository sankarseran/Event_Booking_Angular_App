import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventKeyInput]'
})
export class PreventKeyInputDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;
  @Input() Alphabets: boolean;
  @Input() Alphanumeric: boolean;
  @Input() Alphanumericspace: boolean;
  @Input() AlphaSpace: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
      const e = event as KeyboardEvent;
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
          // Allow: Ctrl+A
          (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+C
          (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
          // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
      }
      if (this.OnlyNumber) {
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      } else if (this.Alphabets) {
          // Ensure that it is a alphabets and stop the keypress
          if (e.keyCode < 65 || e.keyCode > 90) {
              e.preventDefault();
          }
      } else if (this.Alphanumeric) {
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) &&
              (e.keyCode < 65 || e.keyCode > 90)) {
              e.preventDefault();
          }
      } else if (this.AlphaSpace) {
          // Ensure that it is a alphabets and stop the keypress
          if (e.keyCode < 65 || e.keyCode > 90) {
              if (e.keyCode !== 32) {
                  e.preventDefault();
              }
          }
      } else if (this.Alphanumericspace) {
          // Ensure that it is a alphabets and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) &&
              (e.keyCode < 65 || e.keyCode > 90)) {
              if (e.keyCode !== 32) {
                  e.preventDefault();
              }
          }
      }
  }

}
