export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `
          url('/images/BryxznTexture.png'),   /* texture layer */
          linear-gradient(#303030, #1f1f1f) /* gradient layer */
        `,
        backgroundSize: "cover, cover", // match both layers
        backgroundPosition: "center, center",
        backgroundRepeat: "repeat, no-repeat", // noise repeats, gradient doesn't
        backgroundBlendMode: "overlay", // blend texture into gradient
        position: "relative",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "20%",
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
        </span>
      </h1>
    </main>
  );
}