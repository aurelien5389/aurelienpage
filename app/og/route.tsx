import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1528 60%, #111d38 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cercle décoratif */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,60,100,0.5) 0%, transparent 70%)',
          }}
        />

        {/* Badge localisation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(30,50,80,0.6)',
            border: '1px solid rgba(30,60,100,0.8)',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '32px',
            width: 'fit-content',
            color: '#94a3b8',
            fontSize: '18px',
          }}
        >
          📍 Rennes · Remote & déplacements
        </div>

        {/* Nom */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}
        >
          Aurélien{' '}
          <span style={{ color: '#00d4ff' }}>PAGE</span>
        </div>

        {/* Titre */}
        <div
          style={{
            fontSize: '30px',
            color: '#00d4ff',
            fontWeight: 600,
            marginBottom: '24px',
          }}
        >
          Consultant SEO & Chef de Projet Digital
        </div>

        {/* Accroche */}
        <div
          style={{
            fontSize: '22px',
            color: '#94a3b8',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          SEO · SEA · GEO · Automatisation No-code
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '20px',
            color: 'rgba(148,163,184,0.5)',
            fontFamily: 'monospace',
          }}
        >
          aurelienpage.fr
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
