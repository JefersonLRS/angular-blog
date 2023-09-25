import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  rolarParaAncora(anchorID: string): void {
    const elemento = this.el.nativeElement.querySelector(anchorID);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
