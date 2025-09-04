import Dropdown from '@/components/dropdown';

export const metadata = {
  title: "Bryxzn | Tech Content",
  description: "Portfolio and projects by Bryxzn",
};

export default function Home() {
  return (
    <main
      style={{
        paddingTop: "5rem",
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
      <div style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.6rem",
            marginTop: "1.5rem",
            fontWeight: 500,
            color: "#ffffff",
            gap: "1.5rem",
          }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=btech1190@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <polyline points="3,7 12,13 21,7"></polyline>
              </svg>
            </a>
            <a href="https://www.instagram.com/bryxzn.tech/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@bryxzn.tech" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2h4a6 6 0 0 0 6 6v4a9.99 9.99 0 0 1-6-2.03V16a6 6 0 1 1-6-6v4a2 2 0 1 0 2 2V2z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@bryxznn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.6 2.7 12 2.7 12 2.7h-.1s-5.6 0-8.8.3c-.4 0-1.2.1-1.9.9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10.1v1.8c0 2 .5 3.9.5 3.9s.2 1.6.8 2.3c.7.8 1.6.8 2 .9 1.4.1 6 .3 8.7.3 2.8 0 8.7-.3 8.7-.3.4 0 1.2 0 1.9-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.9V10c0-2-.5-3.9-.5-3.9zM9.6 14.6V7.8l6.3 3.4-6.3 3.4z"/>
                </svg>
              </a>
          </div>
      <div className='flex flex-col items-center mt-12 gap-16 text-black background-white'>
              <div className='flex flex-col'>
                <Dropdown />
              </div>
              <div className='flex flex-col'>
                <Dropdown />
              </div>
              <div className='flex flex-col'>
                <Dropdown />
              </div>
              <div className='flex flex-col'>
                <Dropdown />
              </div>
          </div>
    </main>
  );
}
