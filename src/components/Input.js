const Input = ({ handleChange,value,name,title}) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
       <span>{title}</span>
       
      </label>
    );
  };
  
  export default Input;