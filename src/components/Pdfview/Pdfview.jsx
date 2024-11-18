import React, { useState } from 'react';
// import { Document, Page } from '@react-pdf/renderer';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  
  // Tạo nội dung PDF
  const MyDocument = () => (
    <Document >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>trang 1</Text>
        </View>
        
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>trang 2</Text>
        </View>
        
      </Page>
    </Document>
  );

const PdfViewer = () => {
  
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer width="50%" height="50%" showToolbar={false} >
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default PdfViewer;
// Link for docs: https://react-pdf.org/