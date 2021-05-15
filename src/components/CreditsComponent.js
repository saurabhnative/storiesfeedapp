import React from "react";
import "./CreditsComponent.css";
export default function CreditsComponent({ setCreditsPopUpOpen }) {
  function renderCreditItems() {
    return (
      <div className="text-left credits-text-container overflow-y-scroll">
        Information sources:- Wikipedia, Outlookindia articles, Bharat Biotech,
        Pharmeasy
        <br />
        <b>Note:</b> Although I have taken utmost care to as factually correct
        as possible and taken information only from verified sources, if you
        find any discrepancies in the information or media used in this app,
        then kindly reach out to me on my twitter handle{" "}
        <a href="https://twitter.com/coderwhodreams">@coderwhodreams</a> for
        corrections
        <br />
        Vaccine icons:-
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">
            mavadee
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        Vaccine Images:-
        <br />
        Covishield:- Photo by{" "}
        <a href="https://pixahive.com/portfolio/inderpreetkaur/">
          Inderpreet kaur
        </a>{" "}
        from Pixahive
        <br />
        Covishield2:- Photo by{" "}
        <a href="https://pixahive.com/portfolio/inderpreetkaur/">
          Inderpreet kaur
        </a>{" "}
        from Pixahive
        <br />
        Covaxin:- Photo by{" "}
        <a href="https://pixahive.com/portfolio/inderpreetkaur/">
          Inderpreet kaur
        </a>{" "}
        from Pixahive
        <br />
        Spunik 5:-{" "}
        <a href="https://commons.wikimedia.org/wiki/File:%D0%92%D0%B0%D0%BA%D1%86%D0%B8%D0%BD%D0%B0_%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_V.jpg">
          Mos.ru
        </a>
        , <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>,
        via Wikimedia Commons
        <br />
        Pfizer–BioNTech:-{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Pfizer-BioNTech_COVID-19_vaccine_(2020)_E.jpg">
          U.S. Secretary of Defense
        </a>
        , <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>,
        via Wikimedia Commons
        <br />
        Sinopharm:-{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Sinopharm_COVID-19_vaccine_(2021)_K.jpeg">
          Ministerio de Defensa del Perú from Perú, Perú
        </a>
        , <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>,
        via Wikimedia Commons
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
