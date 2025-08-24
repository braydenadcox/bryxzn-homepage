export const metadata = {
  title: "Bryxzn | Tech Content",
  description: "Portfolio and projects by Bryxzn",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `
          url('/images/BryxznTexture.png'),   /* texture layer */
          linear-gradient(#303030, #1f1f1f) /* gradient layer */
        `,
        backgroundSize: "cover, cover", 
        backgroundPosition: "center, center",
        backgroundRepeat: "repeat, no-repeat", 
        backgroundBlendMode: "overlay", 
        position: "relative",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontFamily: "'Satoshi Variable', 'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "6rem",
          lineHeight: 1.1,
          zIndex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ABABAB, #FFFFFF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Hey, I&apos;m Bryxzn!
          <p
            style={{
              fontSize: "2.1rem",
              marginTop: "2rem",
              fontWeight: 375,
              color: "#ffffff",
            }}
          >
            Welcome to my page!
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.6rem",
            marginTop: "1.5rem",
            fontWeight: 500,
            color: "#ffffff",
            gap: "1.5rem",
          }}>
            <a href='https://www.instagram.com/bryxzn.tech/' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.tiktok.com/@bryxzn.tech' target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href='https://www.youtube.com/@bryxznn' target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </span>
      </h1>
    </main>
  );
}