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
    <div>
      <h1>{data.tag}</h1>
      <h1>{data.name}</h1>
    </div>
  );
}
