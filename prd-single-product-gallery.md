# Product Requirements Document

## Feature Overview

- Feature: Redesign the product gallery into a single-product landing page
- Target page: `src/components/ProductGallery.jsx`
- Featured product: `Bubuk Bawang Tiwai`
- Page type: Full single-product only

## Background

The current page behaves like a product catalog because it presents multiple items and category filters. This splits user attention and weakens the positioning of the featured product. The page should instead function as a focused, premium landing page centered entirely on one flagship product.

## Goal

- Make `Bubuk Bawang Tiwai` the clear visual and content focus
- Create a more premium, persuasive, and intentional product experience
- Help users quickly understand the product, its benefits, and what action to take next

## Problem Statement

- The current grid layout feels like a generic catalog rather than a flagship product page
- Category filters are unnecessary in a single-product experience
- Product information is not yet structured into a clear conversion-oriented narrative

## Target Users

- Users who want to understand a herbal product quickly
- Users evaluating health benefits and practical daily usage
- Users who are ready to buy or contact the brand directly

## User Needs

- See the product clearly and immediately
- Understand the key benefits within a few seconds
- Know the format, pack size, intended use, and price
- Build trust before making a purchase decision
- Reach a purchase or consultation action without friction

## Value Proposition

`Bubuk Bawang Tiwai` is positioned as a practical, pure, and versatile herbal powder for daily use. The page should communicate ease of use, product quality, and a strong sense of origin and credibility.

## Scope

### In Scope

- Remove the multi-product grid
- Remove category filters
- Create a hero section focused on one product only
- Add a large product visual area
- Add core product details and pricing
- Add key benefits and a short trust section
- Add purchase and consultation calls to action

### Out of Scope

- Related products
- Active cart functionality
- Checkout flow
- Backend or API integration
- Complex product variants or SKU logic

## Recommended Page Structure

### 1. Product Hero

- Large main image of `Bubuk Bawang Tiwai`
- Badge such as `Featured Product` or `Premium Pick`
- Product name
- Short supporting headline explaining the core value
- Price
- Primary CTA: `Buy on Shopee`
- Secondary CTA: `Consult via WhatsApp`

### 2. Product Summary

- Weight or pack size
- Product format: powder
- Main use case
- Three to four short product highlights

### 3. Key Benefits

- Easy to use in daily routines
- Practical to mix or consume as needed
- Premium, natural, and trustworthy presentation
- Fast to scan and understand

### 4. Supporting Visual Gallery

- One main visual
- Two to four supporting visuals, such as:
  - packaging close-up
  - powder texture
  - raw ingredient context
  - usage or lifestyle imagery

### 5. Why Choose This Product

- A short narrative about what makes the powder format valuable
- Highlights around ingredient quality, processing, and convenience
- Connected to TIWARA's premium and quality-driven brand story

### 6. Trust and Assurance

- Selected ingredients
- High-standard processing
- East Kalimantan sourcing
- Credible proof points presented in a concise way

### 7. Closing CTA

- Repeat the main purchase action near the bottom of the page
- Add a short reassurance line such as consultation availability or product authenticity

## Content Direction

### Product Name

- `Bubuk Bawang Tiwai`

### Tone of Voice

- Premium
- Confident
- Clean and focused
- Lightly scientific, but not overly technical

### Core Message

- A premium herbal powder designed for practical daily use
- Easy to integrate into everyday routines
- Built around quality, purity, and local origin

## UX Direction

- Desktop: two-column layout with product visuals on one side and purchase information on the other
- Mobile: prioritize image, product name, short benefits, price, then CTA
- CTA should be visible quickly without excessive scrolling
- Every secondary element should support the single-product focus

## Visual Direction

- Stay aligned with the design language in `src/components/Home.jsx`
- Feel premium and editorial rather than catalog-like
- Maintain the existing brand palette and visual identity
- Use strong hierarchy, generous spacing, and intentional composition
- Avoid card-heavy patterns that suggest a multi-product listing page

## Functional Requirements

- Static product data is acceptable
- CTA buttons link to Shopee and WhatsApp
- Optional gallery interaction can use simple local state
- No backend or API is required

## Success Criteria

- The page displays only one featured product
- `Bubuk Bawang Tiwai` is the clear visual and messaging focus
- Product name, benefits, price, and CTA are visible above the fold on desktop
- The mobile experience remains clear and readable
- No leftover elements make the page feel like a catalog

## Acceptance Criteria

- `src/components/ProductGallery.jsx` no longer contains the four-product grid
- Category filters are removed
- The hero section focuses only on `Bubuk Bawang Tiwai`
- The page includes a main image, concise details, benefits, price, and CTAs
- The layout remains consistent with TIWARA's brand identity
- The page works well on both desktop and mobile
