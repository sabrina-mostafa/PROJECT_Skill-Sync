import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';



const ExportPDF = ({ exportRef }) => {
  const skills = useSelector((state) => state.skills.skills);
  const projects = useSelector((state) => state.projects.projects);
  const profile = useSelector((state) => state.profile);

  const triggerRef = useRef();

  // If triggered externally (via exportRef), simulate a click
  useEffect(() => {
    if (exportRef) {
      exportRef.current = {
        click: () => {
          triggerRef.current?.click();
        },
      };
    }
  }, [exportRef]);

  return (
    <div className="my-8">
      <PDFDownloadLink
        ref={triggerRef}
        key={JSON.stringify(profile)}
        document={<PDFDocument skills={skills} projects={projects} profile={profile} />}
        fileName="SkillSync_Report.pdf"
        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
      >
        {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default ExportPDF;
