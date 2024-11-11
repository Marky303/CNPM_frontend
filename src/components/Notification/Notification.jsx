// eslint-disable-next-line react/prop-types
function Notification({message = "Notification",onConfirm, isOpen, setIsOpen}) {
    if (!isOpen) return null;
  
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1000",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="d-flex flex-column align-items-center border border-secondary rounded-3 p-3"
          style={{ width: "400px", height: "140px", backgroundColor: "white" }}
        >
          <h5>{message}</h5>
          <div className="d-flex gap-5 mt-4 ">
            <button className="btn btn-primary px-3" onClick={onConfirm}>
              Xác nhận
            </button>
            <button
              className="btn btn-outline-primary px-4"
              onClick={() => setIsOpen(false)}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Notification;
  