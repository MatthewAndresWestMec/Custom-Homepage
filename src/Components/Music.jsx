const Music = () => {
  return (
    <>
      <div
        style={{
          left: 0,
          width: '100%',
          height: '80px',
          position: 'relative',
        }}>
        <iframe
          src='https://open.spotify.com/embed/playlist/0SpLsgmXLmPGFVhSfb1AdM?utm_source=oembed'
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            border: 0,
          }}
          allowFullScreen
          allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture;'></iframe>
      </div>
    </>
  );
};

export default Music;
