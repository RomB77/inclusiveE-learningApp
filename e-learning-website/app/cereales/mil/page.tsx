"use client";

import Image from "next/image";
import Link from "next/link";
import { useSpeechSynthesis } from 'react-speech-kit';
import { FaVolumeUp } from 'react-icons/fa';

const images = [
    { src: "/images/preparationSol.png", description: "Préparation du sol pour le mil : labour profond, défrichage, fumure de fond" },
    { src: "/images/semis.jpg", description: "Techniques de semis : semis en lignes, poquets, espacements optimaux" },
    { src: "/images/fertilisation.png", description: "Fertilisation du mil : doses et périodes pour NPK, urée, compost" },
    { src: "/images/mildiouMil.jpg", description: "Gestion des maladies : traitement du mildiou, charbon et ergot du mil" },
    { src: "/images/ravageurMil.jpg", description: "Gestion des ravageurs : lutte contre Striga, chenille mineuse, foreurs de tiges" },
    { src: "/images/sechage.jpg", description: "Récolte et post-récolte : séchage, battage, stockage en milieu sec" },
];

export default function mil() {
    const { speak } = useSpeechSynthesis();

    return (
        <div className="overflow-x-hidden flex flex-col items-center min-h-screen bg-gray-100 py-4">
            {images.map((image, index) => (
                <div key={index} className="relative block w-9/10 flex justify-center mb-4 last:mb-0 max-w-fit">
                    <Link href={`/image/${index + 1}`} className="relative">
                        <Image
                            src={image.src}
                            alt={`Image ${index + 1}`}
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