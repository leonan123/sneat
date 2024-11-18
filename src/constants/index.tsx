import {
  BiCloset,
  BiCreditCard,
  BiFootball,
  BiHome,
  BiLogIn,
  BiMobileAlt,
  BiTable,
  BiUserPlus,
} from 'react-icons/bi'
import { FaRegEye } from 'react-icons/fa'
import { LuUserCog } from 'react-icons/lu'
import { TbLayoutBoard, TbTextSize } from 'react-icons/tb'

export const NAV_LINKS = [
  {
    title: '',
    links: [
      {
        text: 'Dashboard',
        href: '/',
        icon: <BiHome size={22} />,
      },
      {
        text: 'Account Settings',
        href: '/settings',
        icon: <LuUserCog size={22} />,
      },
    ],
  },

  {
    title: 'PAGES',
    links: [
      {
        text: 'Login',
        href: '/auth',
        icon: <BiLogIn size={22} />,
      },
      {
        text: 'Register',
        href: '/auth',
        icon: <BiUserPlus size={22} />,
      },
    ],
  },

  {
    title: 'USER INTERFACE',
    links: [
      {
        text: 'Typography',
        href: '#',
        icon: <TbTextSize size={22} />,
      },
      {
        text: 'Icons',
        href: '#',
        icon: <FaRegEye size={22} />,
      },
      {
        text: 'Cards',
        href: '#',
        icon: <BiCreditCard size={22} />,
      },
      {
        text: 'Tables',
        href: '#',
        icon: <BiTable size={22} />,
      },
      {
        text: 'Form Layouts',
        href: '#',
        icon: <TbLayoutBoard size={22} />,
      },
    ],
  },
]

export const ORDERS = [
  {
    id: 1,
    amount: '82.5k',
    title: 'Electronic',
    styles: 'text-secondary bg-secondary/10',
    subtitle: 'Mobile, Earbuds, TV',
    avatarIcon: <BiMobileAlt size={26} />,
  },
  {
    id: 2,
    amount: '23.8k',
    title: 'Fashion',
    styles: 'text-success bg-success/10',
    subtitle: 'Tshirt, Jeans, Shoes',
    avatarIcon: <BiCloset size={26} />,
  },
  {
    id: 3,
    amount: 849,
    title: 'Decor',
    styles: 'text-info bg-info/10',
    subtitle: 'Fine Art, Dining',
    avatarIcon: <BiHome size={26} />,
  },
  {
    id: 4,
    amount: 99,
    title: 'Sports',
    styles: 'text-primary bg-primary/10',
    subtitle: 'Football, Cricket Kit',
    avatarIcon: <BiFootball size={26} />,
  },
]
