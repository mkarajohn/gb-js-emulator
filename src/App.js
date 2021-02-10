import disassemble from './disassembler';
import { Fragment, useState } from 'react';
import bootcode from './bootcode';

function App() {
  const [bootCode, setBootCode] = useState(bootcode);

  console.log(bootCode);

  window.bootCode = bootCode;

  return (
    <Fragment>
      <div className="screen-container">
        <canvas height={144} width={160} />
        {bootCode ? (
          <span>bootcode loaded</span>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </div>
      <div className="bootcode-container">
        <code>
          <pre>{disassemble(bootCode)}</pre>
        </code>
      </div>
    </Fragment>
  );
}

export default App;
