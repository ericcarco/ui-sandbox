# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS, no build step (chosen by the owner for this sandbox). Small vanilla JS only where a page needs behaviour.

## Users

Job seekers who want to find out who they already know at companies that are hiring. During onboarding they are usually at a computer, moving between this product and LinkedIn in another tab.

## Product Purpose

Anyone I Know is an AI job-search product. It matches open roles to the people already in the user's own network, so an application starts with a warm introduction instead of a cold resume.

## Positioning

Warm-intro first: the product starts from the user's real contacts and shows where they work, rather than starting from a job board.

## Operating Context

- Connections come from the user's own LinkedIn data export (a ZIP containing Connections.csv). LinkedIn's self-serve API does not expose connections and its pages cannot be framed, so the export is requested by the user in a separate tab and arrives by email.
- The export is easiest on a computer; phone users are offered the steps by email.
- Phone and Google contacts (vCard, Google CSV) are optional additions.

## Capabilities and Constraints

- Reads names, companies, titles and connection dates from the export. No messages, no LinkedIn password.
- The product never contacts or messages anyone on the user's behalf.
- Users can delete their contacts at any time.
- Undecided: backend, hosting, and how "email me these steps" is delivered.

## Brand Commitments

- Name: Anyone I Know.
- Visual system: the "Anyone I Know" design system (default theme Porch Light), copied from the design canvas into `ds/aik/`. Treat those files as the source of tokens and components.

## Evidence on Hand

- Design canvas "Anyone I Know — Onboarding" with the onboarding flow artboards and integration notes.
- No testimonials, customer names, metrics or pricing exist. Do not invent any.

## Product Principles

1. The user's network is theirs: say plainly what is read, and what never is.
2. Be honest about waits and detours (LinkedIn's export takes minutes and happens elsewhere).
3. Keep the user's place: when they leave for another tab, the product is where they left it.
4. Never act on someone's behalf without them.
