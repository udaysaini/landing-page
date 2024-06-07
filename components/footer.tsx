import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        {
            href: 'https://twitter.com/uday10saini',
            icon: <XIcon className='h-8 w-8' />
        },
        {
            href: 'https://www.instagram.com/udaysaini11/',
            icon: <InstagramIcon className='h-9 w-9' />
        },
        {
            href: 'https://www.youtube.com/@geekyathletetech',
            icon: <YouTubeIcon className='h-10 w-10' />
        },
        {
            href: 'mailto:uday10saini@gmail.com',
            icon: <EmailIcon className='h-8 w-8' />
        }
    ]
    return (
        <div className='text-center pb-8'>
            <div className='flex items-center justify-center space-x-4'>

                {links.map((link, index) => (
                    <Link href={link.href} key={index} className='hover:opacity-45 transition duration-300'>
                        {link.icon}
                    </Link>

                ))}

            </div>
            <p className='text-sm text-slate-100/50'>uday10saini@gmail.com</p>
            <p className='text-sm text-slate-100/50'>© Uday Saini. All rights reserved.</p>
        </div>
    )
}

export default Footer;