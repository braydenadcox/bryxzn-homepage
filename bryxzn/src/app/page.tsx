export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(10,10,10,0), rgba(10,10,10,0.3)), url('/images/BryxznPageBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          background: "linear-gradient(90deg, #4b0082, #001f4d)", 
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
       }}
      >
      Hey, I&apos;m Bryxzn!
      <p style={{
        fontSize: "2.1rem",
        marginTop: "2rem",
        fontWeight: 375,
        color: "#ffffff",


      }}>Welcome to my page!</p>
      </span>
      </h1>
    </main>
  );
}