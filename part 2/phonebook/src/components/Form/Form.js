const Form = ({onSubmit}) => {
  return (
    <>
    <h2>Add New Entry: </h2>
    <form onSubmit={onSubmit}>
      <div>
        <label>name:</label>
        <input type="text" name="name"/>
      </div>
      <div>
        <label>number:</label>
        <input type="text" name="num" />
      </div>
      <button>Add</button>
    </form>
    </>
  );
};
export default Form;
