"use client";
import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";

interface Props {
  value?: string;
}

const HtmlContentWithoutReadmore = ({ value }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      let shadowRoot = containerRef.current.shadowRoot;
      if (!shadowRoot) {
        shadowRoot = containerRef.current.attachShadow({ mode: "open" });
      }

      const rawHtml = value || "Không có nội dung";
      // .replace(/\\/g, "")
      //.replace(/<\/?strong>/g, "");
      //.replace(/^(?:<p[^>]*><br\s*\/?><\/p>\s*)+/i, "")
      //.replace(/(?:<p[^>]*><br\s*\/?><\/p>\s*)+$/i, "");

      const cleanHtml = DOMPurify.sanitize(rawHtml, {
        USE_PROFILES: { html: true },
        ALLOWED_TAGS: [
          "b",
          "i",
          "u",
          "em",
          "strong",
          "p",
          "h1",
          "h2",
          "h3",
          "ul",
          "ol",
          "li",
          "br",
          "span",
          "div",
        ],
        ALLOWED_ATTR: ["style"],
      });

      const htmlTemplate = `
        <style>
          :host {
            all: initial;
          }

          .html-wrapper {
            overflow: hidden;
            transition: max-height 0.5s ease;
          }

          .html-content {
            font-family: sans-serif;
            line-height: 1.5;
          }

          html {
            font-size: 1rem;
          }

          @media (max-width: 1023px) {
            html {
              font-size: 0.875rem;
            }
          }

          @media (max-width: 767px) {
            html {
              font-size: 0.75rem;
            }
          }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
          font-size: 1em;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 8px 12px;
          vertical-align: top;
          text-align: left;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        tr:hover {
          background-color: #f1f1f1;
        }

        th {
          background-color: #f0f0f0;
          font-weight: bold;
        }

        td div {
          margin: 0;
          padding: 0;
        }
        img {
          width: -webkit-fill-available;
        }
        </style>
        <div class="html-wrapper">
          <div class="html-content">${cleanHtml}</div>
        </div>
      `;

      shadowRoot.innerHTML = htmlTemplate;
    }
  }, [value]);

  return (
    <div className="tw-min-h-[25rem] tw-relative">
      <div ref={containerRef} />
    </div>
  );
};

export default React.memo(HtmlContentWithoutReadmore);
