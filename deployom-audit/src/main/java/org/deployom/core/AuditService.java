/*
 * The MIT License
 *
 * Copyright (c) 2014 DeployOM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.deployom.core;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.deployom.data.Command;
import org.deployom.data.Host;
import org.deployom.data.Job;
import org.deployom.data.Service;

public class AuditService {

    private static final Logger logger = Logger.getLogger(AuditService.class.getName());
    private final ReleaseService releaseService;
    private final SiteService siteService;

    public AuditService(String siteName) {

        // Open Site
        siteService = new SiteService(siteName);

        // Open Release
        releaseService = new ReleaseService(siteService.getReleaseName());
    }

    public String getFileName() {

        return ConfigService.DATA_DIR + siteService.getSiteName() + ".audit.xls";
    }

    public HSSFWorkbook saveAudit() {

        // Create book
        HSSFWorkbook workbook = new HSSFWorkbook();

        // Default Style
        HSSFCellStyle style = workbook.createCellStyle();
        style.setWrapText(true);

        // Header Style
        HSSFCellStyle styleHeader = workbook.createCellStyle();
        styleHeader.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        HSSFFont font = workbook.createFont();
        font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
        font.setColor(HSSFColor.WHITE.index);
        styleHeader.setFillForegroundColor(IndexedColors.BLACK.getIndex());
        styleHeader.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
        styleHeader.setFont(font);

        // Error Style
        HSSFCellStyle styleError = workbook.createCellStyle();
        styleError.setFillForegroundColor(IndexedColors.CORAL.getIndex());
        styleError.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
        styleError.setWrapText(true);

        for (Job job : releaseService.getJobs()) {

            // Open Job
            JobService jobService = new JobService(siteService.getSiteName(), job.getJobName());

            // Create Sheet
            HSSFSheet sheet = workbook.createSheet(job.getJobName());

            int rownum = 0;
            int cellnum = 0;

            //Create a new row in current sheet
            Row row = sheet.createRow(rownum++);

            // 0
            Cell cell = row.createCell(cellnum++);
            cell.setCellValue("Host");
            cell.setCellStyle(styleHeader);

            // 1
            cell = row.createCell(cellnum++);
            cell.setCellValue("Service");
            cell.setCellStyle(styleHeader);

            // 2
            cell = row.createCell(cellnum++);
            cell.setCellValue("Command");
            cell.setCellStyle(styleHeader);

            // 3
            cell = row.createCell(cellnum++);
            cell.setCellValue("Executable");
            cell.setCellStyle(styleHeader);

            // 4
            cell = row.createCell(cellnum++);
            cell.setCellValue("Error");
            cell.setCellStyle(styleHeader);

            // 5
            cell = row.createCell(cellnum++);
            cell.setCellValue("Output");
            cell.setCellStyle(styleHeader);

            // Check all hosts
            for (Host host : jobService.getHosts()) {

                // Check all services
                for (Service service : host.getServices()) {

                    // Get a Commands
                    for (Command command : service.getCommands()) {

                        //Create a new row in current sheet
                        row = sheet.createRow(rownum++);
                        cellnum = 0;

                        // 0
                        cell = row.createCell(cellnum++);
                        cell.setCellValue(host.getHostName());
                        cell.setCellStyle(style);

                        // 1
                        cell = row.createCell(cellnum++);
                        cell.setCellValue(service.getServiceName());
                        cell.setCellStyle(style);

                        // 2
                        cell = row.createCell(cellnum++);
                        cell.setCellValue(command.getTitle());
                        cell.setCellStyle(style);

                        // 3
                        cell = row.createCell(cellnum++);
                        cell.setCellValue(command.getExec());
                        cell.setCellStyle(style);

                        // 4
                        cell = row.createCell(cellnum++);
                        cell.setCellValue("N");
                        cell.setCellStyle(style);

                        // 5
                        cell = row.createCell(cellnum++);
                        if (command.getOut().length() > 1000) {
                            cell.setCellValue(command.getOut().substring(0, 1000) + "...");
                        } else {
                            cell.setCellValue(command.getOut());
                        }
                        cell.setCellStyle(style);

                        // Error
                        if (command.isError() == true) {
                            row.getCell(5).setCellStyle(styleError);
                            row.getCell(4).setCellValue("Y");
                        }
                    }
                }
            }

            // Set Size
            sheet.setColumnWidth(0, 6000);
            sheet.setColumnWidth(1, 4000);
            sheet.setColumnWidth(2, 8000);
            sheet.setColumnWidth(3, 14000);
            sheet.setColumnWidth(4, 3000);
            sheet.setColumnWidth(5, 20000);
        }

        // Save
        try {
            FileOutputStream out = new FileOutputStream(new File(getFileName()));
            workbook.write(out);
            out.close();
            logger.log(Level.INFO, "{0} generated successfully..", getFileName());

            return workbook;
        } catch (FileNotFoundException ex) {
            logger.log(Level.WARNING, "Audit: {0}", ex);
        } catch (IOException ex) {
            logger.log(Level.WARNING, "Audit: {0}", ex);
        }

        return null;
    }
}
