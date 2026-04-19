import fs from "fs";
import path from "path";

const REPORT_DIR = path.join(process.cwd(), "reports");

// ensure folder exists
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR);
}

export const createReportFile = (prefix: string) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `${prefix}-${timestamp}.txt`;
  const filePath = path.join(REPORT_DIR, filename);

  fs.writeFileSync(filePath, ""); // create empty file

  return filePath;
};

export const appendToReport = (filePath: string, content: string) => {
  fs.appendFileSync(filePath, content + "\n");
};