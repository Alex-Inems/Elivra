// app/maintenance/page.tsx

export default function Maintenance() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>🚧 Under Maintenance</h1>
        <p style={styles.text}>
          We’re currently performing maintenance.<br />
          Please check back in a little while.
        </p>
      </div>
    )
  }
  
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    text: {
      fontSize: '1.2rem',
      maxWidth: '500px',
    },
  }