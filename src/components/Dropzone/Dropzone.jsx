import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ),
    ]);
  }, []);

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #cccccc",
          padding: "20px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: '#222b45'
        }}
      >
        <input {...getInputProps()} />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0px"}}>
        <span><IoImageOutline style={{ height:'20px', width:'24px'}}/></span> 
        <p style={{marginBottom: "0px"}}>Thêm ảnh lỗi đang gặp</p>
        <p style={{marginTop: "8px"}}>Hoặc kéo và thả</p>
        </div>
        
      </div>
      <div>
        {files.map((file) => (
          <div
            key={file.name}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <img
              src={file.preview}
              alt={file.name}
              style={{ width: "100px", height: "50px", marginRight: "10px" }}
            />
            <p style={{ flexGrow: 1, color: '#222b45' }}>{file.name}</p>
            <button
              onClick={() => removeFile(file.name)}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "red",
                display: "flex",
                alignItems: "center",
                
              }}
            >
              <MdDeleteOutline style={{height: "50px", width: "20px"}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropzone;
