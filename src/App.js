import { useState } from 'react';
import bootcode from './bootcode';

function App() {
  const [bootCode, setBootCode] = useState(bootcode);

  console.log(bootCode);

  window.bootCode = bootCode;

  return (
    <div className="screen-container">
      <canvas height={144} width={160} />
      <span>drop the bootcode here</span>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files.length) {
            const reader = new FileReader();

            reader.onload = function (e) {
              setBootCode(new Uint8Array(e.target.result));
            };

            reader.readAsArrayBuffer(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}

export default App;
