"use client";
import { useState } from "react";
import Image from "next/image";

const page = () => {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <main className="p-5 overflow-y-auto min-h-screen text-white bg-black">
            <h1 className="text-2xl font-bold">Create Quote</h1>

            <div className="flex flex-col gap-4 border border-gray-800 rounded-2xl p-5 mt-5">
                <textarea
                    id="quote-text"
                    placeholder="Write your quote..."
                    className="w-full bg-transparent border-none resize-none text-base text-white outline-none min-h-[100px] placeholder-gray-400"
                />

                {/* Upload Section */}
                <div className="flex items-center gap-3">
                    <label
                        htmlFor="image-upload"
                        className="flex items-center gap-2 bg-[#1d9bf0] hover:bg-[#0d8ae8] text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition"
                    >
                        <Image src="/icons/image.svg" alt="Upload" width={20} height={20} />
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>

                {preview && (
                    <div id="image-preview">
                        <Image
                        src={preview}
                        alt="Preview"
                        width={600}
                        height={400}
                        className="w-full rounded-xl mt-3 object-cover"
                        />
                    </div>
                )}

                <button
                    id="post-btn"
                    className="mt-2 bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition"
                >
                    Post Quote
                </button>
            </div>
        </main>
    );
}
export default page