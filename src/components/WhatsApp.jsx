import React, { useState } from "react";
import WhatsAppImage from "./WhatsApp-Image.svg";
import logo from "./assets/img/logo-2.png";
import { SendHorizontal } from "lucide-react";

const WhatsApp = () => {
  const [open, setOpen] = useState(false);

  // Configure for Simetmark (Pvt) Ltd - construction/building business
  const phoneNumber = "12325656858"; // Based on site contact info: +123 (256) 568 58
  const message = encodeURIComponent(
    "Hello! 🏗️ I'm interested in Simetmark's construction and building solutions. How can you help me?"
  );

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open WhatsApp Chat"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            animation: "bounce 1s infinite",
            display: "flex",
          }}
        >
          <img
            src={WhatsAppImage}
            alt="Simetmark WhatsApp"
            style={{
              width: "60px",
              height: "60px",
            }}
          />
        </button>
      </div>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "7rem",
            right: "1.5rem",
            width: "350px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            zIndex: 9999,
            overflow: "hidden",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#075e54",
              minHeight: "60px",
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              color: "white",
              position: "relative",
            }}
          >
            <img
              src={logo}
              alt="Simetmark"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                marginRight: "12px",
                border: "2px solid white",
                backgroundColor: "#f3f4f6",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "1.2",
                }}
              >
                Simetmark (Pvt) Ltd
              </div>
              <div style={{ fontSize: "12px", color: "#d3f6e5" }}>
                Typically replies within 1 hour
              </div>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                paddingLeft: "12px",
              }}
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div
            style={{
              backgroundImage:
                "url('https://user-images.githubusercontent.com/6079142/128636003-18651e58-6eac-4b6c-8f9a-ae9c1eae1c5d.png')",
              backgroundRepeat: "repeat",
              padding: "20px 16px 12px",
              minHeight: "120px",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px 8px 8px 2px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                padding: "12px",
                maxWidth: "80%",
                marginBottom: "8px",
                border: "1px solid #ece5dd",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#075e54",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Simetmark (Pvt) Ltd
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#1f2937",
                  marginBottom: "4px",
                  whiteSpace: "pre-line",
                  lineHeight: "1.4",
                }}
              >
                Hello! 🏗️ Welcome to Simetmark (Pvt) Ltd! We specialize in: •
                Manufacturing Solutions • Construction Technology • Innovative
                Building Systems • Sustainable Practices How can we help you
                today?
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "4px",
                  fontSize: "11px",
                  color: "#6b7280",
                }}
              >
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  style={{ marginLeft: "4px", fill: "#60a5fa" }}
                >
                  <path d="M1.707 12.293a1 1 0 0 1 1.415 0l6.586 6.586 13.293-13.293a1 1 0 0 1 1.415 1.415l-14 14a1 1 0 0 1-1.415 0l-7.293-7.293a1 1 0 0 1 0-1.415z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Footer with button */}
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #ece5dd",
            }}
          >
            <button
              style={{
                width: "100%",
                borderRadius: "25px",
                backgroundColor: "#25d366",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                border: "none",
                padding: "8px 16px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.2s",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`,
                  "_blank"
                )
              }
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#22bb5b")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#25d366")}
            >
              Chat on WhatsApp
              <SendHorizontal size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Add bounce animation styles */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-30px);
          }
          70% {
            transform: translateY(-15px);
          }
          90% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default WhatsApp;
