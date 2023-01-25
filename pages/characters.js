import Link from 'next/link';
import fetchData from '../lib/api';

export default function Characters({ characters }) {
  return (
    <>
      <h1 className="text-5xl font-bold m-3">Characters</h1>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <ul>
            {characters.map((character, idx) => (
              <li key={idx}>
                <Link
                  className="text-white bg-gradient-to-r from-fuchsia-700 to-fuchsia-700
                  bg-no-repeat [background-position:0_88%]
                  [background-size:100%_0.2em]
                  motion-safe:transition-all motion-safe:duration-200
                  hover:[background-size:100%_100%]
                  focus:[background-size:100%_100%]"
                  href={`characters/${character.id}`}
                >
                  {character.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const characters = await fetchData('characters');
  return {
    props: {
      characters,
    },
  };
}
