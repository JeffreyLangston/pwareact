import React from 'react';
import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";
import { useReactMediaRecorder } from "react-media-recorder";

function App() {

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true, askPermissionOnMount: true,blobPropertyBag: { type: "video/mp4" } });


  var saveBlob = () => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
  
        var url = mediaBlobUrl;
        a.href = url;
        a.download = 'video.mp4';
        a.click();
        window.URL.revokeObjectURL(url);
  
};

  return (
    <div className="App">
      <div>Video Recorder</div>

      <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
      <button onClick={saveBlob}>Download</button> 
    </div>

    </div>
  );
}

export default App;
