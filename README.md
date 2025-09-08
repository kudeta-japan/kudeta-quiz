# KU-DETA Website Template

Next.js 14 + TypeScript + Tailwind CSS skeleton for the KU-DETA restaurant site.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and adjust store info.
3. Start dev server:
   ```bash
   npm run dev
   ```

## Updating Content

### Photos
- Place images under `public/images/` using WebP or AVIF.
- Use descriptive filenames (e.g., `steak-200.jpg`).

### Menu
- Add MDX files to `content/menu/`.
- Front matter fields: `name`, `price`, `category`, `allergens`, `tags`, `image`.

### Events
- Add MDX files to `content/events/` with `title`, `when`, `price`, `capacity`, `cta`, `ctaUrl`.

### News
- Add MDX files to `content/news/` with standard front matter (`title`, `date`).

### Environment Variables
- Edit `.env.local` for `SITE_*`, `RESERVE_URL`, `LINE_URL`, etc.

### Deploy
- Deploy to Vercel.
- Set the same environment variables in Vercel dashboard.

