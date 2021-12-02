import data from "./data.json";

function UserList() {
  const dataComponents = data.map((el) => {
    return (
      <div key={el._id}>
        <h3>{el.name.first}</h3>
        <h4>{el.name.last}</h4>
      </div>
    );
  });
  return <div>{dataComponents}</div>;
}

export default UserList;
