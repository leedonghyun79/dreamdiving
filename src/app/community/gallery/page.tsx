const GALLERY_IMAGES = [
  '00e5fbbbb9775.webp',
  '28c32171391d5.webp',
  '298ffe8159734.webp',
  '2e7db6acddb30.webp',
  '3386b839a39c3.webp',
  '4101f66abc4da.webp',
  '423f182611656.webp',
  '47396ac9fdbfc.webp',
  '509eb453114ab.webp',
  '5f8e66544fed2.webp',
  '69cb9d3e85d18.webp',
  '785b36126262c.webp',
  '821e2b68a1a4b.webp',
  '92042d9a24d9a.webp',
  'ac3aa93f22141.webp',
  'b373a0791d7ee.webp',
  'bc24d6d44671a.webp',
  'c05454e885579.webp',
  'c54ef347be010.webp',
  'dc2211045c5a7.webp',
  'dcc0c72cdfa40.webp',
  'f00c351e95f2c.webp',
  'f383c76ff4cff.webp',
  'f5f4d4f24a1f2.webp',
];

export default function GalleryPage() {
  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 20px 100px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {GALLERY_IMAGES.map((file, i) => (
          <div
            key={file}
            style={{ aspectRatio: '4 / 3', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#eee' }}
          >
            <img
              src={encodeURI(`/assets/갤러리/${file}`)}
              alt={`갤러리 ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
