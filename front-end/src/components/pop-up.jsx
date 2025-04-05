import toast from "react-hot-toast";

export const PopUp = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://mail.google.com/mail/u/0?ui=2&ik=600e170702&attid=0.2&permmsgid=msg-f:1828579227333375758&th=19606b1e78dd370e&view=fimg&fur=ip&permmsgid=msg-f:1828579227333375758&sz=s0-l75-ft&attbid=ANGjdJ8jR6GrfNV8xTYpD_PpZMjJVHnGb0ncLCA7pMuZsCNBsgQtwNr3c2AfFkkdy-HfGjf1apFDo5ks-u2-kadsClRK43mlp-yaAdfhlu3lADRPcqRRSkBposbw1nw&disp=emb&realattid=ii_19606b1acae8d9875ac1&zw"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Marti & Iliqn</p>
            <p className="mt-1 text-sm text-gray-500">
              Only 2km away! They are waiting for you!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border cursor-pointer border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
