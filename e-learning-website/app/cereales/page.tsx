"use client";

import Image from "next/image";
import Link from "next/link";
import { useSpeechSynthesis } from 'react-speech-kit';
import { FaVolumeUp } from 'react-icons/fa';


const imagesCereales = [
    { src: "/images/mais.jpg", description: "La culture du maïs" },
    { src: "/images/riz.jpg", description: "La culture du riz" },
    { src: "/images/mil.jpg", description: "La culture du mil" },
    { src: "/images/sorgho.jpg", description: "La culture du sorgho" },
]

export default function cereales() {
    const { speak } = useSpeechSynthesis();

    return (
        <div className="overflow-x-hidden flex flex-col items-center min-h-screen bg-gray-100 py-4">
            {imagesCereales.map((image, index) => (
                <div key={index} className="relative block w-9/10 flex justify-center mb-4 last:mb-0 max-w-fit">
                    <Link href={"/cereales/"+image.src.slice(8,-4)} className="relative">
                        <Image
                            src={image.src}
                            alt={image.src.slice(8,-4)}
                            width={500}
                            height={500}
                            className="max-w-full rounded-lg shadow-md border border-gray-300 p-2"
                        />
                    </Link>
                    <button
                        onClick={() => speak({ text: image.description, voice: window.speechSynthesis.getVoices().find(voice => voice.lang === 'fr-FR') })}
                        className="absolute bottom-4 right-4 bg-sky-500/50 rounded-full p-2 shadow-md"
                    >
                        <FaVolumeUp size={64} color="black" />
                    </button>
                </div>
            ))}
        </div>
    );
}