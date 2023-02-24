import { Thumbnail } from "./Thumbnail";

export const Results = ({ Results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grind-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
