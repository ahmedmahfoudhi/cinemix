import { useSearchParams } from "next/navigation";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Result from "./components/Result";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import {
  getApiUrl,
  moviesGenres,
  trendingAndTopRatedMovies,
} from "./constants";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const genreKey =
    searchParams && searchParams.genre ? searchParams.genre : "getTrending";
  const eltWithKey = [...trendingAndTopRatedMovies, ...moviesGenres].find(
    (elt) => elt.key === genreKey
  );
  let data = [];
  if (eltWithKey) {
    let url = "";
    if ("url" in eltWithKey) {
      url = eltWithKey.url;
    } else if ("genreId" in eltWithKey) {
      url = getApiUrl(eltWithKey.genreId);
    }
    const request = await fetch(`https://api.themoviedb.org/3${url}`).then(
      (res) => res.json()
    );
    data = request.results;
  }
  return (
    <main>
      <Header />
      <Nav />
      <Result results={data} />
    </main>
  );
}
