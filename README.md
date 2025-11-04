# SOPE Website

> Content management system and website built with PayloadCMS 3.0 and Next.js.

[![Payload CMS](https://img.shields.io/badge/Payload_CMS-3.55-black?style=flat&logo=payloadcms)](https://payloadcms.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## Overview

Full-stack CMS website built with PayloadCMS and Next.js. Features a headless CMS admin panel for managing pages, media, and global content blocks with PostgreSQL database and S3-compatible storage.

## Features

- Headless CMS with rich text editing
- Media management with automatic image optimization
- Global content blocks for reusable content
- PostgreSQL database (Supabase)
- S3 storage (Supabase Storage)
- Type-safe with auto-generated TypeScript types

## Technology Stack

**Framework & CMS**
- Next.js 15.4
- PayloadCMS 3.55
- React 19
- TypeScript 5.7

**Database & Storage**
- PostgreSQL (Supabase)
- S3-compatible storage

**Testing & Styling**
- Tailwind CSS 4.1
- Vitest & Playwright

## Running Locally

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**

   Copy `.env.example` to `.env` and add your credentials.

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Open http://localhost:3000**

   - Admin panel: http://localhost:3000/admin
