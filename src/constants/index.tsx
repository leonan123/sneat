import {
  BiCreditCard,
  BiHome,
  BiLogIn,
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
