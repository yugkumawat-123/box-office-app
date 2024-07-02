export default function AppTitle(props) {
  const {
    title = "BoxOffice",
    subtitle = "Are you lokking for a movie or and actor ?",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
