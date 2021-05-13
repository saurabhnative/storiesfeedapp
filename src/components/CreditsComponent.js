import React from "react";
import "./CreditsComponent.css";
export default function CreditsComponent({ setCreditsPopUpOpen }) {
  function renderCreditItems() {
    return (
      <div className="text-left credits-text-container overflow-y-scroll">
        Food1:- Image by{" "}
        <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1867398">
          Pexels
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1867398">
          Pixabay
        </a>
        <br />
        Food2:- Image by{" "}
        <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154587">
          OpenClipart-Vectors
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154587">
          Pixabay
        </a>
        <br />
        Food3:- Image by{" "}
        <a href="https://pixabay.com/users/luiza_83-7899109/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4851545">
          Luiza Kawala
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4851545">
          Pixabay
        </a>
        <br />
        Tech1:- Image by{" "}
        <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154312">
          OpenClipart-Vectors
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154312">
          Pixabay
        </a>
        <br />
        Tech2:- Image by{" "}
        <a href="https://pixabay.com/users/talhakhalil007-5671515/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">
          talha khalil
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">
          Pixabay
        </a>
        <br />
        Travel1:- Image by{" "}
        <a href="https://pixabay.com/users/jebbuchman-8528845/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3271579">
          Jeb Buchman
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3271579">
          Pixabay
        </a>
        <br />
        Travel2:- Image by{" "}
        <a href="https://pixabay.com/users/felixmittermeier-4397258/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4423621">
          FelixMittermeier
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4423621">
          Pixabay
        </a>
        <br />
        Entertainment1:- Image by{" "}
        <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=690685">
          Free-Photos
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=690685">
          Pixabay
        </a>
        <br />
        Entertainment2:- Image by{" "}
        <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1031087">
          Free-Photos
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1031087">
          Pixabay
        </a>
        <br />
        Science1:- Image by{" "}
        <a href="https://pixabay.com/users/wikiimages-1897/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=11111">
          WikiImages
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=11111">
          Pixabay
        </a>
        <br />
        Science2:- Image by{" "}
        <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154734">
          OpenClipart-Vectors
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=154734">
          Pixabay
        </a>
        <br />
        Fitness1:- Image by{" "}
        <a href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1837460">
          Gordon Johnson
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1837460">
          Pixabay
        </a>
        <br />
        Fitness2:- Image by{" "}
        <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3179985">
          mohamed Hassan
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3179985">
          Pixabay
        </a>
        <br />
        School1:- Image by{" "}
        <a href="https://pixabay.com/users/lucasgrey-679745/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4828404">
          Łukasz Siwy
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4828404">
          Pixabay
        </a>
        <br />
        School2:- Image by{" "}
        <a href="https://pixabay.com/users/azamkamolov-2854934/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1545578">
          AzamKamolov
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1545578">
          Pixabay
        </a>
        <br />
        Gaming1:- Image by{" "}
        <a href="https://pixabay.com/users/dg-ra-4854875/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3634586">
          Rafael Javier
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3634586">
          Pixabay
        </a>
        <br />
        Gaming2:- Image by{" "}
        <a href="https://pixabay.com/users/pencilparker-7519217/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3045125">
          pencil parker
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3045125">
          Pixabay
        </a>
        <br />
        Social1:- Image by{" "}
        <a href="https://pixabay.com/users/janjf93-3084263/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2311259">
          janjf93
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2311259">
          Pixabay
        </a>
        <br />
        Social2:- Image by{" "}
        <a href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3846597">
          Gordon Johnson
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3846597">
          Pixabay
        </a>
      </div>
    );
  }
  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 py-4 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            ​
          </span>

          <div className="credits-container w-screen inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Credits
                  </h3>
                  <div className="mt-2">{renderCreditItems()}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center items-center">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setCreditsPopUpOpen(false)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
