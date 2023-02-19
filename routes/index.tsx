import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Q88G8CRU2", "GYUQQCLV", "YP9VPGUUG"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class="m-5 p-1">
      <form>
        <input
          class="bg-gray-300 rounded-md mx-5 text-black p-2 text-lg"
          placeholder="#"
          type="text"
          name="q"
          value={query}
        />
        <button class="p-2 bg-blue-200 text-sm rounded-md" type="submit">
          Search
        </button>
      </form>
      <ul class="m-5 p-1">
        {results.map((name) => (
          <li>
            <a class="underline text-sm" key={name} href={`/player/${name}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
