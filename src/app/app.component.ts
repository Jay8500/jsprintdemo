import { Component, inject } from '@angular/core';
import { JspService } from './jsp.service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jsprint';
  public _jspService = inject(JspService);

  printReport() {
    const reportUrl = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf';
    this._jspService.printEmployeeReport(reportUrl);
  }
}
