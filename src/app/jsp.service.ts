import { Injectable } from '@angular/core';
// import { JSPM } from 'jsprintmanager';
declare var JSPM: any;
@Injectable({
  providedIn: 'root'
})
export class JspService {
  private isConnected = false;

  constructor() {
    // Required: Set up JSPrintManager and connect to local service
    JSPM.JSPrintManager.auto_reconnect = true;
    JSPM.JSPrintManager.start();
    this.detectJSPM();
  }

  printEmployeeReport(pdfUrl: string) {
    if (!this.isConnected) {
      console.log('JSPrintManager client is not connected. Please ensure the client app is running.');
      return;
    }
    const cpj = new JSPM.ClientPrintJob();
    const myPrinter = new JSPM.DefaultPrinter();
    cpj.clientPrinter = myPrinter;
    cpj.files.push(new JSPM.PrintFilePDF(pdfUrl, JSPM.FileSourceType.URL, 'EmployeeReport.pdf', 1));
    cpj.sendToClient();
  }

  detectJSPM() {
    JSPM.JSPrintManager.WS.onStatusChanged = () => {
      if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
        this.isConnected = true;
        console.log('JSPrintManager Client is running');
        // Now that connection is open, fetch installed printers
        JSPM.JSPrintManager.getPrinters().then((printers: any) => {
          console.log('Printers available on client:', printers);
          // You can save the printers list here to show in your UI
        });

      } else {
        this.isConnected = false;
        console.log('JSPrintManager Client App is not running or not installed! Please install it to continue.');
      }
    };
  }
}
