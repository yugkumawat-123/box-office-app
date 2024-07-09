const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <p>status : {status} </p>
      <p>
        premiered : {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
