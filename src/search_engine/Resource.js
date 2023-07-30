const Resource = ({ resource }) => {
  return (
    <article>
      <h2>{resource.name}</h2>
      <p>{resource.role}</p>
    </article>
  );
};
export default Resource
