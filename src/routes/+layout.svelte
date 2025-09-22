<script lang="ts">
  import '$lib/app.css';
  import { page } from '$app/state';

  let { children, data } = $props();

  const url = $derived(page.url.origin);
  const moe = $derived(data.moe);
</script>

<svelte:head>
  <title>{moe}</title>
  <meta
    name="description"
    content="You're a real piece of shit, you know that right?"
  />

  <meta name="theme-color" content="#e0fbfc" />

  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href={`${url}/apple-touch-icon.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`${url}/favicon-32x32.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`${url}/favicon-16x16.png`}
  />
  <link rel="manifest" href={`${url}/site.webmanifest`} />

  <meta property="og:title" content={moe} />
  <meta property="og:image" content={`${url}/fuck-you-moe.png`} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fuckyou.moe" />
  <meta
    name="og:description"
    content="You're a real piece of shit, you know that right?"
  />

  <meta name="twitter:title" content={moe} />
  <meta name="twitter:image" content={`${url}/fuck-you-moe.png`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://fuckyou.moe" />
  <meta
    name="twitter:description"
    content="You're a real piece of shit, you know that right?"
  />

  <link
    rel="preload"
    href={`${url}/pacifico.woff2`}
    as="font"
    type="font/woff2"
    crossorigin
  />
  <link rel="preload" href={`${url}/pacifico.css`} as="style" />
  <link rel="stylesheet" href={`${url}/pacifico.css`} />
</svelte:head>

{@render children?.()}
