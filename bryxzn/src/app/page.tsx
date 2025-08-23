export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(10,10,10,0), rgba(10,10,10,0.3)), url('/images/BryxznSnowBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontFamily: "'Satoshi Variable', sans-serif",
          fontWeight: 600,
          fontSize: "6rem",
          color: "white",
          textAlign: "center",
          position: "absolute",
          top: "20%",    
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Hey, I&apos;m Bryxzn!
      </h1>
    </main>
  );
}