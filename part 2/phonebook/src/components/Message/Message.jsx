const Message = ({ msg, setMsg }) => {
  const border = {
    backgroundColor: '#D3D3D3',
    padding: '10px',
    borderStyle: 'groove',
    borderRadius: '10px',
    marginBottom: '10px'
  }
  const warnStyle = {
    ...border,
    borderColor: 'red',
    color: "red",
  };
  const successStyle = {
    ...border,
    borderColor: 'green',
    color: "green",
  };

  const warningMsg = () => <div style={warnStyle}>{msg.text}</div>;

  const successMsg = () => <div style={successStyle}>{msg.text}</div>;
  

  if (msg.text !== null) {
    setTimeout(() => {
      setMsg({text: null, type: ''});
    }, 5000);
    return msg.type === "warn" ? warningMsg() : successMsg();
  } else {
    return null;
  }
};

export default Message;
