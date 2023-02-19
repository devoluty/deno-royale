import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div class="m-5 p-1 text-sm">
      <p>404 not found: {url.pathname}</p>
    </div>
  );
}
