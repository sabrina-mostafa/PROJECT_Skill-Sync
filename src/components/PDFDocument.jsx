import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    paddingBottom: 4,
    borderBottom: 1,
    borderBottomColor: '#008080',
    color: '#008080',
  },
  listItem: {
    marginBottom: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
});

const PDFDocument = ({ skills = [], projects = [], profile = {} }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{(profile.name || 'Your Name').toUpperCase()}</Text>

        <View style={styles.header}>
          <Text style={{fontSize: 11, fontWeight: 500}}>{profile.title || 'Your Title'}</Text>

          <View style={styles.row} >
            <Text style={{ fontSize:9 }}>
              <Text style={{ fontWeight: 'bold' }}>LinkedIn:</Text>{' '}
              {profile.linkedin && (
                <Link src={profile.linkedin} style={{ color: 'blue', marginRight: 10 }}>
                  {profile.name?.toLowerCase().replace(/\s+/g, '-')}
                </Link>
              )}
            </Text>
            <Text style={{ fontSize:9 }}>
              <Text style={{ fontWeight: 'bold' }}>Email:</Text>{' '}
              {profile.email && (
                <Link src={`mailto:${profile.email}`} style={{ color: 'blue', marginRight: 10 }}>
                  {profile.email}
                </Link>
              )}
            </Text>
            <Text style={{ fontSize:9 }}>
              <Text style={{ fontWeight: 'bold' }}>GitHub:</Text>{' '}
              {profile.github && (
                <Link src={profile.github} style={{ color: 'blue' }}>
                  {profile.name?.toLowerCase().replace(/\s+/g, '-')}
                </Link>
              )}
            </Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Skills</Text>
          {skills.map(skill => (
            <Text key={skill.id} style={styles.listItem}>
              <Text style={styles.label}>{skill.title}</Text> – {skill.category} — Confidence:{' '}
              <Text style={{ fontWeight: '700' }}>{skill.rating}/5</Text>
            </Text>
          ))}
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Projects</Text>
          {projects.map(project => (
            <View key={project.id} style={{ marginBottom: 8 }}>
              <Text style={styles.label}>{project.title}</Text>
              <Text>{project.description}</Text>

              {project.liveLink && (
                <Text>
                  <Text style={{ fontSize: '10px', fontWeight: '800' }}>Live Demo: </Text>
                  <Link src={project.liveLink} style={{ color: 'blue', fontSize: '10px' }}>
                    {project.title}
                  </Link>
                </Text>
              )}

              {/* {project.skills?.length > 0 && (
                <Text style={{ fontSize: '10px' }}>
                  <Text style={{ fontWeight: '800' }}>Skills Used: </Text>
                  {project.skills
                    .map(id => {
                      const match = skills.find(s => s.id === id);
                      return match?.title;
                    })
                    .filter(Boolean)
                    .join(', ') || 'N/A'}
                </Text>
              )} */}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
