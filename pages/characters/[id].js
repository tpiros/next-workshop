import { CldImage, CldOgImage } from 'next-cloudinary';
import fetchData from '../../lib/api';

const Character = ({ character }) => (
  <>
    <CldOgImage src={character.image} />
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure>
        <CldImage
          width="400"
          height="400"
          src={character.image}
          underlay="demonslayer/galaxy"
          alt={character.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-100">{character.name}</h2>
        <p className="text-gray-100">{character.bio}</p>
      </div>
    </div>
  </>
);

export async function getStaticPaths() {
  const characters = await fetchData('characters');
  const paths = characters.map((character) => ({
    params: { id: character.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const character = await fetchData(`characters/${id}`);
  return {
    props: {
      character,
    },
  };
}
export default Character;
