class Report {
  constructor(data) {
    this.data = data;
  }

  generate() {
    return `Report Content: ${JSON.stringify(this.data)}`;
  }
}

class PDFExporter {
  export(report) {
    const content = report.generate();
    console.log(`Exporting to PDF: ${content}`);
  }
}

const report = new Report({ title: "Sales Q1", total: 5000 });
const exporter = new PDFExporter();
exporter.export(report);