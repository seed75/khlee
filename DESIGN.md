---
name: "Kanghyeok Lee's portfolio"
description: "An editorial portfolio built around evidence from working projects."
colors:
  paper: "#f4f3f8"
  panel: "#faf9fc"
  ink: "#17162b"
  muted-ink: "#535168"
  divider: "#d1cfdf"
  indigo: "#3225a9"
  indigo-active: "#221980"
  pale-indigo: "#e6e2fa"
  image-dark: "#23223c"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Condensed"
    fontSize: "clamp(3.65rem, 8vw, 7.2rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist"
    fontSize: "1rem"
    lineHeight: 1.65
  label:
    fontFamily: "Geist"
    fontSize: "0.78rem"
    fontWeight: 610
rounded:
  action: "3px"
  image-frame: "12px"
spacing:
  column-gap: "18px"
  gutter: "clamp(20px, 5.2vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "9px 16px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-active}"
  project-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.image-frame}"
---

## Overview

Lead with what Kanghyeok builds, then show the software. The home page presents a short introduction, five project examples, capabilities linked to those examples, and direct contact. Project pages document the problem, individual contribution, working outcome, and what to test next.

The compared directions were a typographic editorial layout and a more interactive presentation. The editorial layout lets readers compare actual interfaces sooner and keeps the reading and navigation paths independent of animation.

## Colors

Use cool paper and ink for reading. Indigo marks the main action, links, and the introductory emphasis. The capabilities band uses pale indigo and the footer uses saturated indigo. Screenshot mats support the captured interface and preserve its original contrast.

## Typography

Use Barlow Condensed Bold for display and section headings. Use Geist for navigation, descriptions, and project facts. The large introduction leads into compact, readable project descriptions. Keep body copy to a comfortable line length.

## Layout

Use a shell up to 1280px wide with fluid gutters. The 12-column desktop work grid allocates 7 and 5 columns to the first two projects and 4 columns to each of the next three. At 920px or narrower it becomes two equal columns. At 600px or narrower it becomes one. Case-study text stacks at the same phone breakpoint. The résumé has a dedicated A4 print stylesheet.

## Elevation & Depth

Use background tones and one-pixel borders to separate content. Use real project screenshots within flat image mats.

## Shapes

Use a 3px radius on primary actions and 12px on project frames. The email and supporting navigation stay as text links.

## Components

Project cards pair an unaltered interface capture with a short role label, named case-study link, and one-sentence explanation. The whole card opens the case study through a single link and tab stop. Case-study facts use a description list. Links use a 2px visible keyboard outline, with white in the indigo footer. Hover transitions last 160ms, and the site disables them when reduced motion is requested.

## Do's and Don'ts

- Lead with a real screen, a specific contribution, and a verified link where available.
- Label personal work, team work, and concepts according to what shipped.
- Keep unmeasured outcomes qualitative and future checks explicit.
- Keep main content and links in the rendered HTML.
- Avoid decorative motion and screenshots with fabricated content.
