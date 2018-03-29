import React from 'react';
import { Card, CardBody, Button, Badge } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { colors } from './Entry';

const Export = ({ entries }) => {

  let pages = [];
  const onPdfExport = () => {

    const pdf = new jsPDF();

    pages.map((page, index) => {
      return html2canvas(page).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', 0, 0);
          if(index === pages.length - 1) {
            pdf.save("Image.pdf");
          }
          else {
            pdf.addPage();
          }
        })
      ;
    });
  }

  const timeX = 10;
  const textX = 35;

  const onPdfTextExport = () => {

    const pdf = new jsPDF();

    entries.forEach((page, key) => {

      if(key) pdf.addPage();
      let line = 1;

      pdf.setFontSize(24);
      pdf.setFont('Helvetica', 'normal');
      pdf.text('HMS NONSUCH', 105, 22, {}, 0, 'center');

      pdf.setFontSize(12);
      pdf.text(`- ${key+1} -`, 105, 290, {}, 0, 'center');

      page.forEach(({text, m_type, privacy, created, linePoint}) => {

        pdf.setFont('Helvetica', 'normal');
        pdf.text(timeX, lineCord(line), created.toLocaleTimeString());

        pdf.setFont('Helvetica', 'bold');
        pdf.text(textX, lineCord(line), `${m_type} (${privacy})`);

        pdf.setFont('Helvetica', 'normal');
        let splitText = pdf.splitTextToSize(text, 165);
        pdf.text(textX, lineCord(line+1), splitText);

        line += linePoint;
      });
    });

    pdf.save("Text.pdf");
  }

  const startCord = 40.5;
  const lineSpase = 6.4;

  const lineCord = (line) => {
    return (line - 1) * lineSpase + startCord;
  }

  const PdfLayout = ({ children, page }) => {
    return (
      <div className={css(styles.layout)}>
        <h1 className={css(styles.title) + " display-5"}>
          HMS NONSUCH
        </h1>
        <div className={css(styles.dataContent)} >
          {children}
        </div>
        <div className={css(styles.pageNumber)}>- {page} -</div>
      </div>
    )
  }

  const PdfBody = (entries) => {

    return (
      <div>
        {entries.map(({created, m_type, privacy, text}, index) => {
          return (
            <div key={index} className={styles.listItem}>
              <div>
                <span className={css(styles.listTime)}>{created.toLocaleTimeString()}</span>
                <div className={css(styles.listRight)}><b>{m_type}</b> <Badge color={colors[privacy]}>{privacy}</Badge></div>
              </div>
              <div className={css(styles.listText)}>{text}</div>
              <br/>
            </div>
          )
        })}
      </div>
    )
  }

  const Pdf = () => {
    return(
      <div className={css(styles.exportBox)}>
        {entries.map((pageEntries, index) => {
          return (
            <div key={index} ref={node => { pages[index] = node }} className={css(styles.exportContent)} >
              <PdfLayout page={index+1}>{PdfBody(pageEntries)}</PdfLayout>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <Card>
      <CardBody>
        Export:
        {' '}
        <Button
          color="success"
          size="sm"
          className={css(styles.exportBtn)}
          onClick={onPdfExport}
          disabled={!entries.length}
        >
          Image.pdf
        </Button>
        {" "}
        <Button
          color="primary"
          size="sm"
          className={css(styles.exportBtn)}
          onClick={onPdfTextExport}
          disabled={!entries.length}
        >
          Text.pdf
        </Button>
        <Pdf/>
      </CardBody>
    </Card>
  )
}

const styles = StyleSheet.create({
  exportBtn: {
    margin: '-13px 0 -10px 0',
  },
  exportBoxDebug: {
    position: 'absolute',
    left: 420,
    top: -280,
    zIndex: 100,
    boxShadow: '0 0 0 1px #000'
  },
  exportBox: {
    width: 0,
    height: 0,
    overflow: 'hidden'
  },
  exportContent: {
    backgroundColor: '#fff',
    width: '210mm',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  layout: {
    padding: '36mm 10mm 15mm 10mm',
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    height: '297mm',
  },
  title: {
    position: 'absolute',
    top: '12mm',
    left: '0',
    width: '100%',
    textAlign: 'center',
    fontWeight: '300',
  },
  pageNumber: {
    position: 'absolute',
    bottom: '5mm',
    left: 0,
    width: '100%',
    textAlign: 'center',
  },
  dataContent: {
    height: '100%'
  },
  listRight: {
    marginLeft: '25mm',
  },
  listItem: {
    position: 'relative',
  },
  listTime: {
    float: 'left',
    textDecoration: 'underline'
  },
  listText: {
    marginLeft: '25mm',
  }
});

export default Export;
