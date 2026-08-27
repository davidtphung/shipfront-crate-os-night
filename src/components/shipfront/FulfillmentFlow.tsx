"use client";

import { motion, useReducedMotion } from "motion/react";
import { flowLabels } from "@/data/site-copy";

export function FulfillmentFlow() {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      className="relative overflow-hidden rounded-[20px] border border-white/8 bg-[#050505]"
      whileHover={
        reduce
          ? undefined
          : { y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }
      }
      whileTap={
        reduce
          ? undefined
          : { scale: 0.97, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }
      }
    >
      <figcaption className="sr-only">
        Illustrative Shipfront order flow from storefront through inventory, picking,
        packing, and delivery. Not live customer data.
      </figcaption>
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.16em] text-white/50 uppercase">
          Shipfront / Order Flow
        </p>
        <p className="font-mono text-[11px] text-white/50">Illustrative</p>
      </div>
      <div className="relative aspect-[5/4] min-h-[280px] bg-black">
        <svg
          viewBox="0 0 640 500"
          className="h-full w-full"
          role="img"
          aria-label="Abstract fulfillment path: store, inventory, pick, pack, ship, customer"
        >
          <rect width="640" height="500" fill="#000000" />
          <g opacity="0.28" stroke="#FFFFFF" strokeWidth="1">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="500" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 52} x2="640" y2={i * 52} />
            ))}
          </g>

          <path
            d="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            className={reduce ? undefined : "flow-dash"}
            pathLength={1}
          />
          <path
            d="M320 210 C 330 280, 250 320, 170 360"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.55"
            className={reduce ? undefined : "flow-dash"}
          />
          <path
            d="M320 210 C 360 300, 470 340, 540 380"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.55"
            className={reduce ? undefined : "flow-dash"}
          />

          {!reduce ? (
            <>
              <circle r="5" fill="#FFFFFF">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M120 120 C 180 120, 210 200, 320 210 C 430 220, 470 140, 540 150"
                />
              </circle>
              <circle r="4" fill="#FFFFFF">
                <animateMotion
                  dur="11s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M320 210 C 360 300, 470 340, 540 380"
                />
              </circle>
            </>
          ) : null}

          <g>
            <rect x="48" y="78" width="148" height="86" rx="14" fill="#050505" stroke="rgba(255,255,255,0.16)" />
            <text x="64" y="104" fill="#A3A3A3" fontSize="10" fontFamily="ui-monospace, monospace">
              STORE
            </text>
            <text x="64" y="128" fill="#FFFFFF" fontSize="16" fontWeight="700">
              Storefront
            </text>
            <text x="64" y="148" fill="#C8C8C8" fontSize="11" fontFamily="ui-monospace, monospace">
              {flowLabels[0]}
            </text>
          </g>

          <g>
            <rect x="250" y="168" width="140" height="96" rx="16" fill="#111111" />
            <circle cx="320" cy="204" r="10" fill="#FFFFFF" className={reduce ? undefined : "node-breathe"} />
            <text x="270" y="232" fill="#FFFFFF" fontSize="12" fontWeight="700">
              SHIPFRONT
            </text>
            <text x="270" y="250" fill="#A3A3A3" fontSize="10" fontFamily="ui-monospace, monospace">
              {flowLabels[1]}
            </text>
          </g>

          <g>
            {Array.from({ length: 6 }).map((_, i) => (
              <rect
                key={i}
                x={78 + (i % 3) * 22}
                y={300 + Math.floor(i / 3) * 22}
                width="18"
                height="18"
                rx="4"
                fill={i === 2 ? "#FFFFFF" : "#1A1A1A"}
                stroke="rgba(255,255,255,0.16)"
              />
            ))}
            <text x="78" y="290" fill="#A3A3A3" fontSize="10" fontFamily="ui-monospace, monospace">
              INVENTORY
            </text>
          </g>

          <g>
            <rect x="230" y="330" width="150" height="70" rx="12" fill="#050505" stroke="rgba(255,255,255,0.16)" />
            <text x="246" y="358" fill="#FFFFFF" fontSize="14" fontWeight="700">
              Pick / Pack
            </text>
            <text x="246" y="380" fill="#C8C8C8" fontSize="11" fontFamily="ui-monospace, monospace">
              {flowLabels[2]} - {flowLabels[3]}
            </text>
          </g>

          <g>
            <rect x="470" y="108" width="122" height="78" rx="14" fill="#050505" stroke="rgba(255,255,255,0.16)" />
            <text x="486" y="136" fill="#A3A3A3" fontSize="10" fontFamily="ui-monospace, monospace">
              PARCEL
            </text>
            <text x="486" y="160" fill="#FFFFFF" fontSize="13" fontWeight="700">
              {flowLabels[4]}
            </text>
          </g>

          <g>
            <rect x="470" y="344" width="122" height="70" rx="14" fill="#111111" />
            <circle cx="496" cy="372" r="6" fill="#FFFFFF" />
            <text x="512" y="376" fill="#FFFFFF" fontSize="13" fontWeight="700">
              Customer
            </text>
            <text x="486" y="396" fill="#A3A3A3" fontSize="10" fontFamily="ui-monospace, monospace">
              {flowLabels[5]}
            </text>
          </g>
        </svg>
        {!reduce ? (
          <div
            className="scan-line pointer-events-none absolute inset-y-10 w-16 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden
          />
        ) : null}
      </div>
    </motion.figure>
  );
}
