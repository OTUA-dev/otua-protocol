/**
 * Home page — OTUA Protocol web application.
 *
 * Foundation phase: minimal landing page to verify the application boots.
 * Campaign, wallet, and contribution interfaces will be built in future phases
 * after the protocol specification and contract layer are finalized.
 */
export default function HomePage() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>OTUA Protocol</h1>
      <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '0.5rem' }}>
        Open-source collective bulk-purchasing coordination on the Stellar network.
      </p>
      <p
        style={{
          fontSize: '0.875rem',
          color: '#888',
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      >
        Foundation phase — core protocol mechanics are not yet implemented.
      </p>
    </main>
  );
}
