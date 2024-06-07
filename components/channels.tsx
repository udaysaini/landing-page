import Link from "next/link"
import { Separator } from "./ui/separator"
import { Avatar } from "@mui/material"

export const Channels = () => {
    const channels = [
        {
            logo: '/geekyathlete-tech.jpeg',
            name: 'GeekyAthlete Tech',
            subs: '302',
            link: 'https://www.youtube.com/@GeekyAthleteTech'
        },
        {
            logo: '/geekyathlete.jpeg',
            name: 'GeekyAthelte',
            subs: '14',
            link: 'https://www.youtube.com/@geekyathlete6391'
        },
        {
            logo: '/ud11.jpg',
            name: 'Uday Saini',
            subs: '14,000',
            link: 'https://www.youtube.com/@UdaySaini11'
        },
        {
            logo: '/joe.jpeg',
            name: 'Santwinder Singh Waraich',
            subs: '1.24M',
            link: 'https://www.youtube.com/@SantwinderSinghWaraich'
        },
    ]
    // Avatar Styles
    const style = {
        width: {
            xs: 50, // width on extra-small devices
            sm: 100, // width on small devices
            md: 150, // default width
        },
        height: {
            xs: 50, // height on extra-small devices
            sm: 100, // height on small devices
            md: 150, // default height
        },
        // You can add more responsive keys (lg, xl) as needed
    };
    return (
        <div className="text-center">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Channels I've Worked With</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>

            <div className="flex items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
                {channels.map((channel, index) => (
                    <div key={index} className="mt-10 flex">
                        <div className="flex flex-col items-center">
                            <Link href={`${channel.link}`}>
                                <Avatar src={channel.logo} alt={channel.name} sx={style} />
                            </Link>
                            <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
                            <p className="text-lg mt-2">{channel.subs} subs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Channels;