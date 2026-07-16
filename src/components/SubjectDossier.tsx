import { useState } from "react";
import { motion } from "motion/react";
import { Corners } from "./Corners";
import { WaveCanvas } from "./WaveCanvas";
import { makeAscii, makeHex } from "../lib/print";

const ascii = makeAscii();
const hexDump = makeHex();

const vt = (size: number): React.CSSProperties => ({
  fontFamily: "'VT323',monospace",
  fontSize: size,
  letterSpacing: ".1em",
});

const personnel: [string, string][] = [
  ["NAME", "SHIVARAJ"],
  ["FUNCTION", "SOFTWARE ENGINEER"],
  ["STATION", "EMP0 // AGENTIC SYSTEMS"],
  ["PRIMARY LANG", "TYPESCRIPT | RUST"],
  ["OPERATING SYS", "ARCH (BTW)"],
  ["EDITOR", "NEOVIM"],
  ["MENTAL STATE", "CAFFEINATED"],
];

const skills =
  "TYPESCRIPT / JAVASCRIPT / PYTHON / C / REACT / NEXT.JS / REMIX / REACT NATIVE / TAILWIND / NODE.JS / EXPRESS / POSTGRESQL / PRISMA / DRIZZLE / REDIS / BULLMQ / GRAPHQL / DOCKER / AWS / N8N / NEOVIM / LINUX";

export function SubjectDossier() {
  const [copied, setCopied] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText("shivaraj_95951");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      style={{
        position: "relative",
        border: "1px solid #3b5c8f",
        boxShadow:
          "0 0 18px rgba(80,130,220,.18), inset 0 0 40px rgba(60,110,200,.06)",
      }}
    >
      <Corners />

      {/* title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          borderBottom: "1px solid #3b5c8f",
        }}
      >
        <div
          style={{
            ...vt(30),
            letterSpacing: ".14em",
            color: "#dcebff",
            textShadow: "0 0 8px rgba(140,190,255,.6)",
          }}
        >
          SUBJECT SR-110
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            border: "1px solid #7ea6dd",
            padding: 3,
          }}
        >
          <div style={{ width: 10, height: 10, background: "#9cc4ff" }} />
          <div style={{ width: 10, height: 10, background: "#9cc4ff" }} />
          <div style={{ width: 10, height: 10, background: "#22406e" }} />
        </div>
      </div>

      {/* row: photo | personnel data */}
      <div className="dossier-grid">
        <div style={{ borderRight: "1px solid #3b5c8f", padding: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 6,
              marginBottom: 10,
            }}
          >
            <div
              className="pulse-dot"
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#9cc4ff",
                boxShadow: "0 0 6px rgba(140,190,255,.8)",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#5d7ba8",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#22406e",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              border: "1px solid #3b5c8f",
              aspectRatio: "1/1.05",
              overflow: "hidden",
              background: "#060a12",
            }}
          >
            <pre
              style={{
                position: "absolute",
                inset: 0,
                margin: 0,
                fontSize: 9,
                lineHeight: "9px",
                color: "#2b4a7a",
                overflow: "hidden",
                padding: 6,
              }}
            >
              {ascii}
            </pre>
            {!imgFailed && (
              <img
                src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
                alt="Subject photo"
                onError={() => setImgFailed(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter:
                    "grayscale(1) contrast(1.35) brightness(.95) sepia(1) hue-rotate(180deg) saturate(2.4)",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center,rgba(4,6,11,0) 0 .6px,rgba(4,6,11,.55) 1.1px)",
                backgroundSize: "3px 3px",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,rgba(60,120,220,.10),rgba(4,6,11,.35))",
                pointerEvents: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              fontSize: 11,
              color: "#5d7ba8",
              letterSpacing: ".12em",
            }}
          >
            <span>IMG.0x2F // OPTIC SCAN</span>
            <span className="blink">REC ●</span>
          </div>
        </div>

        {/* personnel data table */}
        <div
          style={{
            padding: "10px 22px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {personnel.map(([label, value]) => (
            <div
              key={label}
              className="personnel-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid #3b5c8f",
                padding: "12px 2px",
                gap: 12,
              }}
            >
              <span
                style={{
                  ...vt(24),
                  color: "#dcebff",
                  textShadow: "0 0 6px rgba(140,190,255,.5)",
                }}
              >
                {label}
              </span>
              <span style={{ ...vt(24), color: "#e6f1ff", textAlign: "right" }}>
                {value}
              </span>
            </div>
          ))}
          <div
            className="personnel-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "12px 2px",
              gap: 12,
            }}
          >
            <span
              style={{
                ...vt(24),
                color: "#dcebff",
                textShadow: "0 0 6px rgba(140,190,255,.5)",
              }}
            >
              THREAT ASSESSMENT
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#e6f1ff",
                letterSpacing: ".3em",
                textShadow: "0 0 8px rgba(140,190,255,.8)",
              }}
            >
              ★ ★ ★
            </span>
          </div>
        </div>
      </div>

      {/* row: comm channels | special skills */}
      <div className="dossier-grid" style={{ borderTop: "1px solid #3b5c8f" }}>
        <div style={{ borderRight: "1px solid #3b5c8f", padding: 16 }}>
          <div
            style={{
              ...vt(22),
              letterSpacing: ".12em",
              color: "#dcebff",
              marginBottom: 10,
            }}
          >
            COMM CHANNELS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 13,
              letterSpacing: ".06em",
            }}
          >
            <a
              href="https://github.com/shivaraj110"
              target="_blank"
              rel="noopener"
            >
              &gt;GITHUB .............. /SHIVARAJ110
            </a>
            <a
              href="https://x.com/shivaraj_does"
              target="_blank"
              rel="noopener"
            >
              &gt;X/TWITTER ......... @SHIVARAJ_DOES
            </a>
            <a
              href="https://blog.shivaraj110.com"
              target="_blank"
              rel="noopener"
            >
              &gt;BLOG ............... TRANSMISSIONS
            </a>
            <a href="mailto:shivaraj@termdx.studio">
              &gt;EMAIL ..... SHIVARAJ@TERMDX.STUDIO
            </a>
            <button
              onClick={copyDiscord}
              className="link-btn"
              style={{
                all: "unset",
                cursor: "pointer",
                color: "#b8d4ff",
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 13,
                letterSpacing: ".06em",
              }}
            >
              &gt;DISCORD ........... {copied ? "[COPIED!]" : "SHIVARAJ_95951"}
            </button>
            <a
              href="https://github.com/sponsors/shivaraj110"
              target="_blank"
              rel="noopener"
            >
              &gt;SPONSOR ........... FUND.OPERATIVE
            </a>
          </div>
        </div>
        <div style={{ padding: "16px 22px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 10,
            }}
          >
            <div
              style={{ ...vt(22), letterSpacing: ".12em", color: "#dcebff" }}
            >
              SPECIAL SKILLS
            </div>
            <div
              style={{
                border: "1px solid #7ea6dd",
                padding: "2px 7px",
                fontSize: 11,
                color: "#dcebff",
                letterSpacing: ".1em",
              }}
            >
              TS
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 0",
              fontSize: 13,
              color: "#8fb2e6",
              letterSpacing: ".05em",
              lineHeight: 1.7,
            }}
          >
            <span>{skills}</span>
          </div>
          <div
            style={{
              marginTop: 14,
              border: "1px solid #22406e",
              background: "rgba(60,120,220,.05)",
              position: "relative",
              height: 110,
            }}
          >
            <WaveCanvas />
            <div
              style={{
                position: "absolute",
                top: 4,
                left: 8,
                fontSize: 10,
                color: "#5d7ba8",
                letterSpacing: ".15em",
              }}
            >
              BIO-SIGNAL // COMMIT FREQUENCY
            </div>
          </div>
          <pre
            style={{
              margin: "10px 0 0",
              fontSize: 11,
              lineHeight: 1.5,
              color: "#3f6296",
              overflow: "hidden",
              whiteSpace: "pre",
              fontFamily: "'Share Tech Mono',monospace",
            }}
          >
            {hexDump}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
