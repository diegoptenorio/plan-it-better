import { Logo as LogoSvg } from '@img';
import Img from 'next/image';

export const Logo = () => (
    <Img src={LogoSvg} className="mb-[40px]" alt="Plan It Better" />
);
