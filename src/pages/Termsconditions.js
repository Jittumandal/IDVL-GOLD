import React from "react";

const Termsconditions = () => {
  return (
    <>
      <section
        className="relative flex min-h-[300px] items-center justify-center px-6 py-16 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(6,95,70,0.35), rgba(16,185,129,0.35)), url('/img/Terms-and-conditions.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="banner"
      >
        <div className="max-w-7xl">
          <h1 className="pt-20 text-3xl font-extrabold leading-[70px] leading-tight sm:text-4xl md:text-5xl">
            Empowering Your Experience:
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text leadingHeight leading-[70px] text-transparent">
              IDVL Report Disclaimer & Terms of Use
            </span>
          </h1>

          <div className="mx-auto mt-6 max-w-5xl text-base text-white/90 sm:text-lg">
            <p>
              The IDVL report contains only the characteristics of the gems and/or jewellery described herein after they have been carefully graded, tested, examined, and analyzed by Indian Diamond & Valuation Laboratory (IDVL Company).
            </p>
          </div>
        </div>
      </section>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl bg-white p-4">
          <div className="prose prose-sm prose-slate max-w-none text-slate-900">
            <div className="mb-2 font-semibold">
              <strong>Last updated on Feb 23, 2026</strong>
            </div>

            <p className="mb-2">
              The IDVL report contains only the characteristics of the gems and/or jewellery described herein after they have been carefully graded, tested, examined, and analyzed by Indian Diamond & Valuation Laboratory (IDVL Company). All examinations are performed by qualified gemologists using advanced gemological instruments under 10X magnification, including a fully corrected triplet loupe, binocular microscope, master color stone comparison, electronic carat balance, proportion measuring devices, and other specialized laboratory equipment as required.
            </p>
            <div className="mb-2 font-semibold">
              <strong>Terms of Use</strong>
            </div>

            <p className="mb-4">
              The grading and identification are based on internationally accepted gemological standards and practices applicable at the time of examination.
            </p>



            <div className="mb-4 font-semibold">
              <strong>Terms & Conditions</strong>
            </div>
            <ol className="ml-6 list-decimal space-y-4">
              <li>
                The IDVL report shall be considered null and void if any alteration, tampering, forgery, duplication, or modification is made to the gemstone(s), jewellery, or to the report itself.
              </li>

              <li>
                The report represents the professional opinion of IDVL at the time of examination only and does not imply continuous monitoring of the gemstone(s) or jewellery.
              </li>

              <li>
                In the event of any claim by the client or any third party for damage to the gems/jewellery, financial loss, or any direct or indirect consequences arising from this report, the liability of IDVL Company shall be strictly limited to the professional fees received for issuing the report.
              </li>

              <li>
                The parties acknowledge that gemological opinions may reasonably vary among laboratories and experts. Therefore, IDVL Company, its directors, gemologists, employees, or representatives shall not be held responsible for any differences in grading or identification resulting from the application of other grading systems or methodologies.
              </li>

              <li>
                This report is issued solely at the request of the client and/or lawful owner of the gems/jewellery. Neither the client nor any purchaser shall interpret this report as an appraisal, valuation, guarantee, insurance document, or warranty of any kind.
              </li>

              <li>
                The IDVL report does not guarantee market value, resale value, merchantability, or suitability for any specific purpose.
              </li>

              <li>
                Mounted jewellery or mounted gemstones are examined only to the extent permitted by the mounting. Certain characteristics may not be fully determinable without removal from the setting.
              </li>

              <li>
                The IDVL certificate does not disclose or confirm any treatments, enhancements, clarity modifications, or processes unless specifically stated in the report.
              </li>

              <li>
                The IDVL certificate does not comment on or identify Chemical Vapour Deposition (C.V.D.), High Pressure High Temperature (HPHT), or other laboratory growth or enhancement processes unless expressly mentioned.
              </li>
              <li>Natural inclusions, growth patterns, and other internal features are part of the gemstone’s inherent characteristics and do not constitute defects unless otherwise specified.</li>

              <li>Any misuse, unauthorized reproduction, partial reproduction, or digital manipulation of the report is strictly prohibited.</li>
              <li>The IDVL report shall be governed by the laws of India. All disputes, claims, or arbitration matters shall fall under the exclusive jurisdiction of the courts within the State of Delhi.</li>
            </ol>
          </div>

        </div>
      </main>
    </>
  );
};

export default Termsconditions;
