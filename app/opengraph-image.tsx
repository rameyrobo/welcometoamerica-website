import { ImageResponse } from 'next/og'

// The link preview (og:image / twitter:image), in the site's settled palette: deep teal, cream, bright teal.
export const alt = 'Welcome to America Services: DOJ-recognized immigration and health services'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 96px', background: '#215e61', color: '#faf7f1' }}>
        <div style={{ width: 120, height: 6, background: '#2a9993', marginBottom: 40 }} />
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>Welcome to America Services</div>
        <div style={{ fontSize: 36, marginTop: 28, lineHeight: 1.3, maxWidth: 1000, color: '#e8efe9' }}>
          DOJ-recognized nonprofit: immigration legal services, community health workers and Medi-Cal enrollment
        </div>
      </div>
    ),
    size,
  )
}
