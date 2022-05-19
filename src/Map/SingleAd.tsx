import React, { useEffect, useState } from 'react';
import { AdEntity } from 'types';

interface Props {
  id: string;
}

const SingleAd = (props: Props) => {
  const [ad, setAd] = useState<AdEntity | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ads/${props.id}`);
      const data = await res.json();
      setAd(data);
    })();
  }, []);

  if (ad === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      {ad.price && <p>{ad.price} zł</p>}
      <hr />
      <a href={ad.url} target='_blank'>
        Open adv
      </a>
    </>
  );
};

export default SingleAd;
