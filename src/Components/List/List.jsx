const List = ({ listdata }) => {
  return (
    <ul>
      {listdata.map((data) => (
        <li key={data}>{data}</li>
      ))}
    </ul>
  );
};

export default List;
