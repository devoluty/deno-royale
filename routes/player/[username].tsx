import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../../types.d.ts";

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU0MWQ5ZWEyLTEzNWYtNDkzYi1iMzUwLWU3ZDkzNWU0NjZiYiIsImlhdCI6MTY3Njc2MDk5Niwic3ViIjoiZGV2ZWxvcGVyLzQ3NDMxNjYwLTcwNWUtYTFkMS0zNTFmLWE2MjNkMGM0MWI5OSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuMjI2LjEzNy4xNjIiXSwidHlwZSI6ImNsaWVudCJ9XX0.f5VidIpMyDL5YbxkRi0dGnjch4yK9oF1rfXBssqEAm8VPQ8m-7G8ijwQgVAPlQ7BceQEe2SvviXUavjNQ4QXeA";

    const url = `https://api.clashroyale.com/v1/players/%23${username}`;
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div class="m-5 p-1 roboto-mono">
      <ul>
        <li>
          <p class="text-5xl font-bold dm-mono">{data.tag}</p>
        </li>
        <li>
          <p class="text-xl text-gray-900 my-3">{data.name}</p>
        </li>
        <li>
          <p text-gray-900>
            Trophies: <span class="text-yellow-600">{data.trophies}</span>
          </p>
        </li>
        <li>
          <p>
            Highest trophies:{" "}
            <span class="text-yellow-600">{data.bestTrophies}</span>
          </p>
        </li>
        <li>
          <p class="text-green-800">Wins: {data.wins}</p>
        </li>
        <li>
          <p class="text-red-800">Losses: {data.losses}</p>
        </li>
        <li>
          <p>All battles: {data.battleCount}</p>
        </li>
        <span class="text-gray-800 text-sm">Clan: {data.clan.name}</span>
      </ul>
    </div>
  );
}
