import DisplayCard from '../components/display-card/display-card';

const PlayGround = () => {
  // a sandbox for making components, we can delete when finished building lol
  const mockData = {
    name: 'Jordan',
    role: 'associate software engineer',
    details:
      'software engineer who is trying to fill enough text to demo a paragraph here',
    further: 'further information here',
  };

  return (
    <DisplayCard
      data={mockData}
      img="https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
      editButton
    />
  );
};

export default PlayGround;
