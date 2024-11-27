import styles from "./UserSupport.module.css";
import Dropzone from "../../components/Dropzone/Dropzone";

function UserSupport() {

    
    function handleClickSend(){

    }
    function handleClickCancel(){
        
    }
  return (
    <div className={styles.container}>
      
      <div className={styles.reportForm}>

        <Dropzone />
        <div className={styles.textBoxEditor}>
          <input
            type="text"
            className={styles.input}
            placeholder="Miêu tả lỗi kèm thông tin máy in, thời gian gặp lỗi và số token phí (nếu bị trừ trong quá trình xảy ra lỗi)"
          />
        </div>
        <div className={styles.btnActions}>
         <button className={styles.send} onClick={handleClickSend}>GỬI</button>
         <button className={styles.cancel} onClick={handleClickCancel}>HỦY</button>
         </div>
      </div>
    </div>
  );
}

export default UserSupport;

