import type { LayoutLoad } from './$types';

export const csr = false;

export const load: LayoutLoad = ({ url }) => ({
  moe: `Fuck you, Moe${url.searchParams.has('moe') ? ` ${url.searchParams.get('moe')}` : ''}`,
});
