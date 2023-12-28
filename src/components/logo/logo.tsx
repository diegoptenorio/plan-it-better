import { Logo as LogoSvg } from '../../assets/img'
import Img from 'next/image'

export const Logo = () => (
    <Img src={LogoSvg} alt="Plan It Better" />
)