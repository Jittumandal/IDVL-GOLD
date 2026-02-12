import React from "react";
import { MdDocumentScanner } from "react-icons/md";

export default function VerifyReport() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12">
            <div className="flex flex-col items-center gap-6">
                <img src="/img/verify-report-screenshot.svg" alt="verify" className="h-12 w-12" />
                <h1 className="text-3xl font-semibold">Verify Your Report</h1>
            </div>

            <div className="mt-8 space-y-8">
                <div className="rounded border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-medium">Report Number</h2>
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Enter Your Report No."
                            className="w-full rounded border border-gray-200 px-3 py-2 text-sm shadow-sm"
                        />
                        <button className="rounded bg-gray-700 px-4 py-2 text-white">Verify</button>
                    </div>
                    <div className="mt-4">
                        <button className="rounded border border-gray-300 bg-white px-4 py-2 text-sm">SKU Lookup</button>
                    </div>
                </div>

                <div className="rounded border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-medium">Scan QR Code</h2>
                    <div className="flex flex-col items-center gap-4 py-8">
                        <div className="h-28 w-28 rounded border border-gray-300 bg-gray-50 p-4 text-center">
                            <MdDocumentScanner size={48} className="mx-auto text-gray-400" />
                        </div>
                        <button className="rounded border border-gray-700 px-4 py-2">Request Camera Permissions</button>
                        <a href="#" className="text-sm text-gray-600 underline">Scan an Image File</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
