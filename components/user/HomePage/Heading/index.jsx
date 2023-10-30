import MediaLink from "./MediaLink";
import TypingAnimation from "./TypingAnimation";

export default function Heading({ authorDetails, social }) {
    return (
        <div className="h-[90vh] relative">
            <div className='h-full relative'>
                <div className="h-full mx-12 md:px-8 flex flex-col justify-center gap-4 text-white font-medium">
                    <h1 className="text-lg md:text-2xl font-bold normalTextShadow">HI, I&apos;m {authorDetails.firstName} {authorDetails.lastName},</h1>
                    <h1 className="text-4xl h-20 md:h-fit md:text-5xl font-sans font-extrabold z-10 skillTextShadow flex flex-col md:flex-row md:gap-4"><span> I Am a </span> <span>
                        <TypingAnimation skill={authorDetails.skills} />
                    </span></h1>
                    <p className='md:w-2/3 sm:w-1/2 text-lg md:text-2xl normalTextShadow'>{authorDetails.intro}</p>
                    <div className=''>
                        <MediaLink social={social} />
                    </div>
                </div>
            </div>
        </div>
    )
}