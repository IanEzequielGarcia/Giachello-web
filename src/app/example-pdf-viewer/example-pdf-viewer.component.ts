import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {  NgxExtendedPdfViewerModule,NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'], 
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  providers: [NgxExtendedPdfViewerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePdfViewerComponent {
  zoomValue: string = '100';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setZoomValue(event.target.innerWidth);
  }

  ngOnInit() {
    this.setZoomValue(window.innerWidth);
  }

  setZoomValue(width: number) {
    if (width <= 540) {  // Ajusta este valor según el tamaño de pantalla que consideres como "celular"
      this.zoomValue = '60';
    } else {
      this.zoomValue = '100';
    }
  }
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    // pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    // pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.

    
    }
}
