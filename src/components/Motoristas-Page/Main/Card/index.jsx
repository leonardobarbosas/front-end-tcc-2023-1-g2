export const Card = ({ props }) => {
  const a = props.map((index) => {
    return index.nome;
  });
  return (
    <div>
      <h1>{a}</h1>
    </div>
  );
};
